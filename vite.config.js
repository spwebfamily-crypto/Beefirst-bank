import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression, defineAlgorithm } from "vite-plugin-compression2";
import { constants } from "node:zlib";

export default defineConfig({
  plugins: [
    react(),
    compression({
      threshold: 10240,
      algorithms: [
        defineAlgorithm("gzip", { level: 9 }),
        defineAlgorithm("brotliCompress", {
          params: {
            [constants.BROTLI_PARAM_QUALITY]: 11
          }
        })
      ]
    })
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            id.includes("react-dom") ||
            id.includes("react-router-dom") ||
            /[\\/]react[\\/]/.test(id)
          ) {
            return "vendor-react";
          }

          if (id.includes("framer-motion")) {
            return "vendor-motion";
          }

          if (id.includes("lucide-react")) {
            return "vendor-icons";
          }

          if (id.includes("three") || id.includes("@react-three")) {
            return "vendor-3d";
          }

          return "vendor";
        }
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"]
  },
  server: {
    fs: {
      allow: [".."]
    }
  }
});
