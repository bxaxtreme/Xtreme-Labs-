import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old bot links working after the rename
  async redirects() {
    return [
      { source: "/bots/tourney", destination: "/bots/quotient-prime", permanent: true },
      { source: "/bots/ultra-music", destination: "/bots/sonic", permanent: true },
    ];
  },
};

export default nextConfig;
