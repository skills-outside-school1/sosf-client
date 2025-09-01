/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any hostname
        port: "",
        pathname: "/**", // Allow images from any path
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Add this to handle SVGs as React components
    });

    return config;
  },
};

export default nextConfig;
