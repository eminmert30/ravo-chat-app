/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    // RovoChatApp ve scripts dizinlerini build'den hariç tut
    config.module.rules.push({
      test: /RovoChatApp/,
      use: "ignore-loader",
    });
    config.module.rules.push({
      test: /scripts/,
      use: "ignore-loader",
    });
    return config;
  },
  // Static file serving için rewrites
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "/api/serve-upload/:path*",
      },
    ];
  },
  // CORS headers for uploads
  async headers() {
    return [
      {
        source: "/uploads/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
    ],
  },
  // experimental: {
  //   serverActions: true,
  // },
  // api: {
  //   bodyParser: {
  //     sizeLimit: "10mb",
  //   },
  //   responseLimit: "10mb",
  // },
};

module.exports = nextConfig;
