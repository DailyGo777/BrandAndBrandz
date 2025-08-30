const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|ttf|woff|woff2|eot|otf|js|css)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(html)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;