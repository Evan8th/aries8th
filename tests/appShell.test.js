import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { siteInfo } from "../src/data/siteConfig.js";

test("shell metadata identifies the portfolio and components read identity from data", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  const footer = await readFile(new URL("../src/components/SiteFooter.jsx", import.meta.url), "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.equal(title, `${siteInfo.heroName} · Personal Portfolio`);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(footer, /siteInfo/);
  const contactPattern = new RegExp(["mail", "to"].join("") + ":[^\"']+|" + ["t", "el"].join("") + ":\\+?\\d+");
  assert.doesNotMatch(`${html}\n${footer}`, contactPattern);
});

test("hero typing restarts after React strict-mode effect cleanup", async () => {
  const hero = await readFile(
    new URL("../src/components/Hero.jsx", import.meta.url),
    "utf8"
  );
  assert.match(hero, /typingStartedRef\.current\s*=\s*false/);
});
