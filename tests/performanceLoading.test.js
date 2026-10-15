import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import test from "node:test";

test("the home video stays within the first-load performance budget", async () => {
  const info = await stat(new URL("../public/videos/hero-background.mp4", import.meta.url));
  assert.ok(info.size <= 4_000_000, `hero-background.mp4 is ${info.size} bytes; expected at most 4,000,000 bytes`);
});

test("media priority keeps off-screen assets out of the initial download", async () => {
  const policy = await import("../src/utils/mediaPriority.js");
  assert.deepEqual(policy.priorityVideoProps, { preload: "auto" });
  assert.deepEqual(policy.deferredVideoProps, { preload: "none" });
  assert.deepEqual(policy.deferredImageProps, { loading: "lazy", decoding: "async" });
});
