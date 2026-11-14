import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  async redirects() {
    return [
      // Old bot links
      { source: "/bots/tourney", destination: "/bots/quotient-prime", permanent: true },
      { source: "/bots/ultra-music", destination: "/bots/sonic", permanent: true },
      // The status page showed unverified numbers and was removed
      { source: "/status", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
