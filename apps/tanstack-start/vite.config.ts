import viteReact from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    devtools(),
    tanstackStart({
      srcDirectory: "src",
      rsc: {
        enabled: true,
      },
    }),
    rsc(),
    viteReact(),
    nitro(),
  ],
});
