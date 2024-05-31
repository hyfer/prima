import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
    ],
  },
});
