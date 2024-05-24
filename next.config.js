/** @type {import('next').NextConfig} */ 
const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true,   
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development", 
    },
  };
  
  const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
      image: "/static/images/fallback.png",
      document: "/offline",  
      font: '/static/font/fallback.woff2' 
    },
    workboxOptions: {
      disableDevLogs: true,
    },  
  });
 
  module.exports = withPWA(nextConfig);