// @ts-nocheck
/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    siteUrl: "https://portafolio-casarez.vercel.app",
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
  };
  
export default nextConfig;
  