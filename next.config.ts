import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the Emergent preview domain in dev so HMR and client chunks load.
  allowedDevOrigins: [
    "ba74791f-b638-4880-ad62-9e097816b78f.preview.emergentagent.com",
    "ba74791f-b638-4880-ad62-9e097816b78f.cluster-5.preview.emergentcf.cloud",
    "*.preview.emergentagent.com",
    "*.preview.emergentcf.cloud",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com",
      },
    ],
  },
};

export default nextConfig;
