import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.startsWith('apexchart') // (return true)
        }
      }
    }
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
  ,
  server: {
    proxy: {
      '/api': {
        target: 'https://djabet-api-production.up.railway.app',
        secure: false,
        changeOrigin: true,
      },
      '/sse': {
        target: 'https://djabet-repository-api-production.up.railway.app',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sse/, '/api/double/sse'),
      },
      '/rolls': {
        target: 'https://djabet-repository-api-production.up.railway.app',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rolls/, '/api/double'),
      },
    }
  }
});
