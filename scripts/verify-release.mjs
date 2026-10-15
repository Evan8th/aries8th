import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { hasGitRepository } from "./git-context.mjs";

function run(command, args, env = process.env) {
  execFileSync(command, args, { stdio: "inherit", env });
}

// Invoke npm through Node so Windows does not need to execute npm.cmd directly.
if (!process.env.npm_execpath) {
  throw new Error("Run this check with npm run release:check.");
}
run(process.execPath, [process.env.npm_execpath, "test"]);
run(process.execPath, [process.env.npm_execpath, "run", "build"]);
run(process.execPath, ["scripts/privacy-check.mjs", "."]);
run(process.execPath, ["scripts/privacy-history-check.mjs"]);
run(process.execPath, ["scripts/privacy-check.mjs", "dist"], {
  ...process.env,
  PRIVATE_DENYLIST_FILE: "",
});
if (hasGitRepository) {
  run("git", ["diff", "--check"]);

  const status = execFileSync("git", ["status", "--porcelain"], {
    encoding: "utf8",
  }).trim();
  if (status) {
    throw new Error(`Working tree is not clean:\n${status}`);
  }

  const tracked = execFileSync("git", ["ls-files", "-z"])
    .toString()
    .split("\0")
    .filter(Boolean);

  for (const file of tracked) {
    const buffer = readFileSync(file);
    const isBinary = buffer.subarray(0, 8000).includes(0);
    if (isBinary && !file.startsWith("public/")) {
      throw new Error(`Tracked binary outside public assets: ${file}`);
    }
  }
} else {
  console.log("Git working-tree checks skipped: this local project has no Git repository.");
}

console.log("Release verification passed.");
