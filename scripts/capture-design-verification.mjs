import { chromium } from "playwright";
import { mkdir, rename, readdir, copyFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.CAPTURE_URL ?? "http://127.0.0.1:4173/";
const artifactsDir = path.resolve(process.cwd(), "artifacts");
const videoDir = path.join(artifactsDir, "video-temp");
const screenshotPath = path.join(
  artifactsDir,
  "build-with-cursor-stockholm-full.png",
);
const rawVideoPath = path.join(videoDir, "home-capture.webm");
const finalVideoPath = path.join(
  artifactsDir,
  "build-with-cursor-stockholm-full.webm",
);

await mkdir(artifactsDir, { recursive: true });
await mkdir(videoDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
});

const context = await browser.newContext({
  viewport: {
    width: 1440,
    height: 2200,
  },
  deviceScaleFactor: 1,
  colorScheme: "dark",
  recordVideo: {
    dir: videoDir,
    size: {
      width: 1440,
      height: 2200,
    },
  },
});

const page = await context.newPage();
await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.emulateMedia({ reducedMotion: "reduce" });
await page.evaluate(async () => {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }
});
await page.screenshot({
  path: screenshotPath,
  fullPage: true,
});

await page.mouse.move(140, 140);
await page.waitForTimeout(500);
await page.mouse.move(1200, 1950, { steps: 45 });
await page.waitForTimeout(500);

await context.close();
await browser.close();

await rename(rawVideoPath, finalVideoPath).catch(async () => {
  const files = await readdir(videoDir);
  const firstVideo = files.find((file) => file.endsWith(".webm"));

  if (!firstVideo) {
    throw new Error("Playwright did not produce a video artifact.");
  }

  await copyFile(path.join(videoDir, firstVideo), finalVideoPath);
});

console.log(`Saved screenshot to ${screenshotPath}`);
console.log(`Saved video to ${finalVideoPath}`);
