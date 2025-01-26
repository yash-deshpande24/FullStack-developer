import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
    allowedHosts: ["jhgww7-5173.csb.app"],
  },
  plugins: [react()],
});
