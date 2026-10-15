import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { siteInfo, sections } from "../src/data/siteConfig.js";
import { profile } from "../src/data/profileData.js";
import { contactInfo } from "../src/data/contactData.js";
import { ipProjects } from "../src/data/ipProjects.js";
import { brandProjects } from "../src/data/brandProjects.js";
import { aigcVideos } from "../src/data/aigcVideoData.js";

test("portfolio identity and contact entries contain usable content", () => {
  for (const value of [siteInfo.nameEn, siteInfo.nameCn, siteInfo.heroGreeting, siteInfo.heroName, profile.nameEn]) {
    assert.equal(typeof value, "string");
    assert.ok(value.trim().length > 0);
  }
  assert.ok(Array.isArray(contactInfo.downloads));
  assert.ok(contactInfo.links.length > 0);
  for (const entry of [...contactInfo.links, ...contactInfo.downloads]) {
    assert.ok(entry.label?.trim());
    assert.ok(entry.href?.trim());
    const url = new URL(entry.href, "https://example.com");
    assert.ok(["http", "https", "mailto", "tel"].includes(url.protocol.slice(0, -1)));
  }
});

test("enabled sections match the portfolio navigation and collections have unique ids", () => {
  assert.deepEqual(sections.filter(({ enabled }) => enabled).map(({ id, labelCn }) => [id, labelCn]), [
    ["hero", "首页"], ["about", "工作经历"], ["ip", "品牌视觉"],
    ["media", "视频编辑"], ["brand", "游戏策划"], ["contact", "期待合作"],
  ]);
  assert.equal(new Set(sections.map(({ id }) => id)).size, sections.length);
  for (const collection of [ipProjects, brandProjects, aigcVideos]) {
    assert.ok(collection.length > 0);
    assert.equal(new Set(collection.map(({ id }) => id)).size, collection.length);
  }
});

test("portfolio media paths resolve to existing public assets", async () => {
  const json = JSON.stringify({ siteInfo, profile, ipProjects, brandProjects, aigcVideos });
  const paths = [...json.matchAll(/"(\/[^"?]+\.(?:svg|png|jpe?g|webp|webm|mp4|mov|pdf))(?:\?[^"\s]*)?"/gi)].map((match) => match[1]);
  assert.ok(paths.length > 0);
  const publicRoot = new URL("../public/", import.meta.url);
  for (const value of new Set(paths)) {
    const asset = new URL(`.${value}`, publicRoot);
    assert.ok(asset.href.startsWith(publicRoot.href), `Asset must stay inside public/: ${value}`);
    await access(asset);
  }
});
