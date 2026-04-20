import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["double-server-number"],
  env: {
    PORT: "3010",
  },
};

export default nextConfig;
