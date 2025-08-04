/** @type {import('next-sitemap').IConfig} */
export const siteUrl = 'https://brandandbrandz.com';
export const generateRobotsTxt = true;
export const changefreq = 'monthly';
export const priority = 0.7;
export const sitemapSize = 5000;
export const exclude = [];
export const robotsTxtOptions = {
  policies: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
};
export async function additionalPaths(config) {
  return [
    await config.transform(config, '/about'),
    await config.transform(config, '/service'),
    await config.transform(config, '/team'),
    await config.transform(config, '/client'),
    await config.transform(config, '/contact'),
  ];
}
