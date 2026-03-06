import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sirf HTML pages no-cache — taaki phone har visit pe fresh HTML (sahi CSS links) le; assets cache ho sakte hain
  async headers() {
    return [
      { source: "/", headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }] },
      { source: "/login", headers: [{ key: "Cache-Control", value: "no-store, must-revalidate" }] },
    ];
  },
};

export default nextConfig;
