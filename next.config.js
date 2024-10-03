// Import next-pwa for PWA configuration
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: "sw.js",
  fallbacks: {
    document: "/offline",
  },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/, 
      handler: "NetworkFirst", 
      options: {
        cacheName: "html-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:ts|tsx|css)$/, 
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 24 * 60 * 60,
        },
      },
    },
  ],
});
  
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", 
  },
};
 
module.exports = withPWA(nextConfig);

  