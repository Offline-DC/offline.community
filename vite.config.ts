import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import type { ViteDevServer } from "vite";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  publicDir: "public",
  plugins: [
    react(),
    {
      name: "api-server",
      configureServer(server: ViteDevServer) {
        server.middlewares.use("/api/schedule", async (_req, res) => {
          try {
            const { fetchScheduleData } = await import("./src/api/googleSheets");
            const data = await fetchScheduleData();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          } catch (error) {
            console.error("Error fetching schedule data:", error);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to fetch schedule data" }));
          }
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
      },
    },
  },
  server: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
});
