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
      use: 'ignore-loader'
    });
    config.module.rules.push({
      test: /scripts/,
      use: 'ignore-loader'
    });
    return config;
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
