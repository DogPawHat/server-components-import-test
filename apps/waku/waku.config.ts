// ./waku.config.ts
import { defineConfig } from "waku/config";

export default defineConfig({
  vite: {
    server: {
      port: 3020,
    },
  },
});
