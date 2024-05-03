/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.jm3eia.com",
      "women-shop-shopify-t21s-kklm7oc03-engsalamanaief.vercel.app",
    ],
    formats: ["image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "media.jm3eia.com",
    //     port: "",
    //     pathname: "*",
    //   },
    // ],
  },
};

module.exports = nextConfig;
