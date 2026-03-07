/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://baltar.ca',
  generateRobotsTxt: true,
  // Exclude admin, auth, and coming-soon routes
  exclude: [
    '/admin',
    '/admin/*',
    '/login',
    '/signup',
    '/media/consumer-pulse/signin',
    '/media/consumer-pulse/signup',
    '/technologies/toronto-media-inc/client-portal',
    '/coming-soon',
    '/about-comingsoon',
    '/careers-comingsoon',
    '/cre8ive-studio-comingsoon',
    '/baltar-finance-comingsoon',
    '/zeitgeist-media-comingsoon',
    '/technologies/toronto-media-inc/coming-soon',
    '/hospitality/savour-and-sip/coming-soon',
    '/finance/transac/coming-soon',
    '/fashion/le-mode-co/coming-soon',
    '/media/consumer-pulse/coming-soon',
    '/privacy-policy',
    '/terms-of-service',
    '/cookies',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/login',
          '/signup',
          '/media/consumer-pulse/signin',
          '/media/consumer-pulse/signup',
          '/technologies/toronto-media-inc/client-portal',
        ],
      },
    ],
  },
};
