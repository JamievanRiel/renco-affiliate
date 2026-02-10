import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Door './' te gebruiken, werken de paden overal, 
  // ongeacht of je in een submap staat op GitHub.
  base: './', 
});
