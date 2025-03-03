/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['*/_meta'],
  output: 'export',
};
