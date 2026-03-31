import { chromium } from "playwright";
import { copyFile, mkdir, readdir, rename, rm } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.CAPTURE_URL ?? "http://127.0.0.1:4173/";
const artifactsDir = path.resolve(process.cwd(), "artifacts");
const videoDir = path.join(artifactsDir, "video-temp");
const screenshotPath = path.join(artifactsDir, "cursor-automation-home-full.png");
const finalVideoPath = path.join(artifactsDir, "cursor-automation-home-full.webm");

await mkdir(artifactsDir, { recursive: true });
await mkdir(videoDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
});

const context = await browser.newContext({
  viewport: {
    width: 1440,
    height: 1904,
  },
  deviceScaleFactor: 1,
  recordVideo: {
    dir: videoDir,
    size: {
      width: 1440,
      height: 1904,
    },
  },
  colorScheme: "dark",
});

const page = await context.newPage();
const recordedVideo = page.video();
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

await page.mouse.move(120, 120);
await page.waitForTimeout(500);
await page.mouse.move(1200, 1800, { steps: 45 });
await page.waitForTimeout(500);

await context.close();
await browser.close();

const recordedVideoPath = await recordedVideo?.path().catch(() => undefined);

if (recordedVideoPath) {
  await rename(recordedVideoPath, finalVideoPath).catch(async () => {
    await copyFile(recordedVideoPath, finalVideoPath);
  });
} else {
  const files = await readdir(videoDir);
  const firstVideo = files.find((file) => file.endsWith(".webm"));
  if (!firstVideo) {
    throw new Error("Playwright did not produce a video artifact.");
  }
  await rename(path.join(videoDir, firstVideo), finalVideoPath).catch(async () => {
    await copyFile(path.join(videoDir, firstVideo), finalVideoPath);
  });
}

await rm(videoDir, { recursive: true, force: true });

console.log(`Saved screenshot to ${screenshotPath}`);
console.log(`Saved video to ${finalVideoPath}`);
