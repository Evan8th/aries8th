import { existsSync } from "node:fs";

// Downloaded project folders have no Git metadata. A worktree's .git file
// and a regular repository's .git directory both enable repository checks.
export const hasGitRepository = existsSync(new URL("../.git", import.meta.url));
