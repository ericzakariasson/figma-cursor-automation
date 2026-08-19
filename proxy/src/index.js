export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await request.text();

    let payload;
    try {
      payload = JSON.parse(body);
      if (payload.passcode !== env.FIGMA_PASSCODE) {
        return new Response("Forbidden", { status: 403 });
      }
    } catch {
      return new Response("Bad request", { status: 400 });
    }

    if (payload.event_type === "PING") {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const res = await fetch(env.CURSOR_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.CURSOR_AUTH_TOKEN}`,
      },
      body,
    });

    return new Response(res.body, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  },
};
