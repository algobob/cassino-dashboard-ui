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
      '/api': 'https://cassino-online-api-production.up.railway.app',
      // '/ingested': 'http://127.0.0.1:5000'
      '/ingested': 'https://cassino-database-manager-production.up.railway.app'
     },
     cors: false
  }
});
