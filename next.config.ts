import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Use false se for um redirecionamento temporário
      },
    ];
  },
};

export default nextConfig;
