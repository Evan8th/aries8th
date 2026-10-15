import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("README explains how to preview, edit, build and check this portfolio", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  for (const phrase of ["npm install", "npm run dev", "npm run build", "npm test", "src/data/", "public/", "dist/", "隐私"]) {
    assert.ok(readme.includes(phrase), `Missing documentation: ${phrase}`);
  }
});

test("contribution instructions retain verification and copyright guidance", async () => {
  const contributing = await readFile(new URL("../CONTRIBUTING.md", import.meta.url), "utf8");
  assert.match(contributing, /npm run verify/);
  assert.match(contributing, /个人/);
  assert.match(contributing, /版权/);
});
