import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 这里是项目的基础配置,一般不需要改动。
export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  optimizeDeps: {
    force: true,
  },
});
