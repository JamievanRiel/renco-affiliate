import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/renco-affiliate/', // Exacte naam van je repo met slashes
});
