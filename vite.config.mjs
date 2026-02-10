import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/renco-affiliate/', // Zorg dat dit EXACT je repository naam is
});
