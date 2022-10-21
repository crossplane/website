/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://www.crossplane.io/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
