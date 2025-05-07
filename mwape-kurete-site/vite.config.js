import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url"; // For aliases

export default defineConfig({
  plugins: [vue()],

  // Vercel-specific optimizations
  build: {
    outDir: "dist", // Vercel automatically detects 'dist' as the output
    assetsInlineLimit: 4096, // Files under 4kb will be inlined as base64
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit (in kB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching (optional but recommended)
          vue: ["vue", "vue-router"], // Group Vue-related dependencies
          lodash: ["lodash"], // Example: Group lodash separately
        },
      },
    },
  },

  // Ensure correct path resolution (especially for Vercel deployments)
  base: "/", // Use '/' for root domain, or '/repo-name/' if in subpath

  // Resolve aliases (optional but recommended for cleaner imports)
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~public": fileURLToPath(new URL("./public", import.meta.url)), // Easy public access
    },
  },

  // Ensure public assets are served correctly
  publicDir: "public", // Default, but explicit is good
});
