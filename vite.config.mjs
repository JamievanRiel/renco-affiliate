import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './', // Gebruik een relatief pad, dit werkt vaak zowel lokaal als op GitHub
});
