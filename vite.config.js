import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/final-project-news-explorer/",
  plugins: [react()],
  server: {
    port: 4000,
    base: "/final-project-news-explorer/",
  },
});
