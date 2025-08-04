/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brandandbrandz.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: "./out",
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/about'),
      await config.transform(config, '/service'),
      await config.transform(config, '/team'),
      await config.transform(config, '/client'),
      await config.transform(config, '/contact'),
    ];
  },
};
