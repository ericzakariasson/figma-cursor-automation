#!/usr/bin/env node

import { parseArgs } from "node:util";
import { randomBytes } from "node:crypto";
import prompts from "prompts";

const EVENT_TYPES = [
  "FILE_UPDATE",
  "FILE_DELETE",
  "FILE_VERSION_UPDATE",
  "FILE_COMMENT",
  "LIBRARY_PUBLISH",
  "DEV_MODE_STATUS_UPDATE",
];

const onCancel = () => {
  console.log("\nAborted.");
  process.exit(1);
};

function parseCliArgs() {
  const { values } = parseArgs({
    options: {
      token: { type: "string" },
      team: { type: "string" },
      project: { type: "string" },
      file: { type: "string" },
      event: { type: "string" },
      endpoint: { type: "string" },
      passcode: { type: "string" },
      description: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
    strict: false,
  });
  return values;
}

function printUsage() {
  console.log(`
Usage: create-figma-webhook [options]

Context (pick one):
  --team <id>       Attach webhook to a team
  --project <id>    Attach webhook to a project
  --file <id>       Attach webhook to a file

Options:
  --token <token>   Figma personal access token (or set FIGMA_TOKEN env var)
  --event <type>    ${EVENT_TYPES.join(", ")}
  --endpoint <url>  URL to receive webhook POST requests
  --passcode <str>  Verification passcode (auto-generated if omitted)
  --description     Optional name/description (max 150 chars)
  -h, --help        Show this help message

Examples:
  create-figma-webhook --team 123 --event FILE_UPDATE --endpoint https://example.com/hook
  create-figma-webhook   (interactive mode)
`);
}

async function figmaGet(token, path) {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { "X-Figma-Token": token },
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(`Figma API error (${res.status}): ${JSON.stringify(data)}`);
  }
  return res.json();
}

async function pickContext(token, teamId) {
  const { level } = await prompts({
    type: "select",
    name: "level",
    message: "Attach webhook to:",
    choices: [
      { title: "This team", value: "team" },
      { title: "A project in this team", value: "project" },
      { title: "A file in this team", value: "file" },
    ],
  }, { onCancel });

  if (level === "team") {
    return { context: "team", context_id: teamId };
  }

  console.log("\nFetching projects...");
  const { projects } = await figmaGet(token, `/teams/${teamId}/projects`);

  if (!projects.length) {
    console.error("No projects found in this team.");
    process.exit(1);
  }

  const { projectId } = await prompts({
    type: "select",
    name: "projectId",
    message: "Select a project:",
    choices: projects.map((p) => ({ title: p.name, value: String(p.id) })),
  }, { onCancel });

  if (level === "project") {
    return { context: "project", context_id: projectId };
  }

  console.log("\nFetching files...");
  const { files } = await figmaGet(token, `/projects/${projectId}/files`);

  if (!files.length) {
    console.error("No files found in this project.");
    process.exit(1);
  }

  const { fileKey } = await prompts({
    type: "select",
    name: "fileKey",
    message: "Select a file:",
    choices: files.map((f) => ({ title: f.name, value: f.key })),
  }, { onCancel });

  return { context: "file", context_id: fileKey };
}

async function gather(args) {
  const token = args.token || process.env.FIGMA_TOKEN;

  const config = {
    token,
    event_type: args.event,
    endpoint: args.endpoint,
    passcode: args.passcode,
    description: args.description,
  };

  if (args.team) {
    config.context = "team";
    config.context_id = args.team;
  } else if (args.project) {
    config.context = "project";
    config.context_id = args.project;
  } else if (args.file) {
    config.context = "file";
    config.context_id = args.file;
  }

  // --- Token ---
  if (!config.token) {
    const { token: t } = await prompts({
      type: "password",
      name: "token",
      message: "Figma personal access token:",
      validate: (v) => (v ? true : "Token is required"),
    }, { onCancel });
    config.token = t;
  }

  // --- Context (interactive drill-down) ---
  if (!config.context) {
    const { teamId } = await prompts({
      type: "text",
      name: "teamId",
      message: "Team ID (from your Figma team URL):",
      validate: (v) => (v ? true : "Team ID is required"),
    }, { onCancel });

    const picked = await pickContext(config.token, teamId);
    config.context = picked.context;
    config.context_id = picked.context_id;
  }

  // --- Event type ---
  if (!config.event_type) {
    const { event_type } = await prompts({
      type: "select",
      name: "event_type",
      message: "Event type:",
      choices: EVENT_TYPES.map((e) => ({ title: e, value: e })),
    }, { onCancel });
    config.event_type = event_type;
  }

  // --- Endpoint ---
  if (!config.endpoint) {
    const { endpoint } = await prompts({
      type: "text",
      name: "endpoint",
      message: "Webhook endpoint URL:",
      validate: (v) => {
        try {
          new URL(v);
          return true;
        } catch {
          return "Must be a valid URL";
        }
      },
    }, { onCancel });
    config.endpoint = endpoint;
  }

  // --- Passcode (auto-generate if not provided and non-interactive) ---
  if (!config.passcode) {
    config.passcode = randomBytes(16).toString("hex");
    console.log(`\nGenerated passcode: ${config.passcode}`);
  }

  // --- Description (only ask in interactive mode) ---
  if (config.description === undefined && !args.event) {
    const { description } = await prompts({
      type: "text",
      name: "description",
      message: "Description (optional):",
    }, { onCancel });
    if (description) config.description = description;
  }

  if (!config.token || !config.event_type || !config.context || !config.context_id || !config.endpoint || !config.passcode) {
    console.error("Error: missing required parameters. Run with --help for usage.");
    process.exit(1);
  }

  return config;
}

async function createWebhook(config) {
  const body = {
    event_type: config.event_type,
    context: config.context,
    context_id: config.context_id,
    endpoint: config.endpoint,
    passcode: config.passcode,
  };
  if (config.description) body.description = config.description;

  const res = await fetch("https://api.figma.com/v2/webhooks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Figma-Token": config.token,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error(`\nFigma API error (${res.status}):`);
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  return data;
}

async function main() {
  const args = parseCliArgs();

  if (args.help) {
    printUsage();
    process.exit(0);
  }

  const config = await gather(args);
  const webhook = await createWebhook(config);

  console.log("\nWebhook created successfully:");
  console.log(JSON.stringify(webhook, null, 2));
}

main();
