import { unstable_reactRouterRSC as reactRouterRSC } from "@react-router/dev/vite";
import rsc from "@vitejs/plugin-rsc";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3030,
  },
  plugins: [reactRouterRSC(), rsc()],
  resolve: {
    tsconfigPaths: true,
  },
});
