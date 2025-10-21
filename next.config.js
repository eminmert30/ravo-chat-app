/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  // output: "standalone", // Express server kullanıyoruz
  images: {
    domains: ["localhost", "ravo-chat-app.onrender.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "ravo-chat-app.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
  // Server Actions are available by default in Next.js 14
};

module.exports = nextConfig;
