/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Cloudinary (primary media CDN)
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Stripe hosted images
      { protocol: 'https', hostname: 'files.stripe.com' },
      // GitHub avatars / raw content (used in portfolio/case studies)
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      // Unsplash (placeholder imagery)
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  async rewrites() {
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://baltar-inc-1.onrender.com';
    return [
      {
        source: '/api/:path*',
        destination: `${apiBase}/api/:path*`,
      },
    ];
  },

  async redirects() {
    return [
      // ── Technologies: Toronto Media Inc ──────────────────────────────────
      { source: '/frontend-web-design',              destination: '/technologies/toronto-media-inc',                permanent: true },
      { source: '/frontend-web-design/about',        destination: '/technologies/toronto-media-inc/about',          permanent: true },
      { source: '/frontend-web-design/services',     destination: '/technologies/toronto-media-inc/services',       permanent: true },
      { source: '/frontend-web-design/portfolio',    destination: '/technologies/toronto-media-inc/portfolio',      permanent: true },
      { source: '/frontend-web-design/pricing',      destination: '/technologies/toronto-media-inc/pricing',        permanent: true },
      { source: '/frontend-web-design/faq',          destination: '/technologies/toronto-media-inc/faq',            permanent: true },
      { source: '/frontend-web-design/client-portal',destination: '/technologies/toronto-media-inc/client-portal', permanent: true },
      { source: '/frontend-web-design-contact-us',   destination: '/technologies/toronto-media-inc/contact',        permanent: true },
      { source: '/frontend-web-design-comingsoon',   destination: '/technologies/toronto-media-inc/coming-soon',   permanent: true },

      // ── Hospitality: Savour & Sip ─────────────────────────────────────────
      { source: '/sip-and-savour',                   destination: '/hospitality/savour-and-sip',          permanent: true },
      { source: '/sip-and-savour/about',             destination: '/hospitality/savour-and-sip/about',    permanent: true },
      { source: '/sip-and-savour/services',          destination: '/hospitality/savour-and-sip/services', permanent: true },
      { source: '/sip-and-savour/events',            destination: '/hospitality/savour-and-sip/events',   permanent: true },
      { source: '/sip-and-savour/menu',              destination: '/hospitality/savour-and-sip/menu',     permanent: true },
      { source: '/sip-and-savour/pricing',           destination: '/hospitality/savour-and-sip/pricing',  permanent: true },
      { source: '/savour-and-sip-coming-soon',       destination: '/hospitality/savour-and-sip/coming-soon', permanent: true },

      // ── Consulting: Baltar Engineering ───────────────────────────────────
      { source: '/archon-engineering-comingsoon',    destination: '/consulting/baltar-engineering',       permanent: true },

      // ── Finance: Transac ─────────────────────────────────────────────────
      { source: '/transac',                          destination: '/finance/transac',             permanent: true },
      { source: '/transac-coming-soon',              destination: '/finance/transac/coming-soon', permanent: true },

      // ── Fashion: Le Mode Co ──────────────────────────────────────────────
      { source: '/le-mode-co',                       destination: '/fashion/le-mode-co',                  permanent: true },
      { source: '/le-mode-co-contact-us',            destination: '/fashion/le-mode-co/contact',          permanent: true },
      { source: '/le-mode-co-subscribe',             destination: '/fashion/le-mode-co/subscribe',        permanent: true },
      { source: '/le-mode-co-comingsoon',            destination: '/fashion/le-mode-co/coming-soon',      permanent: true },

      // ── Fashion: VR ──────────────────────────────────────────────────────
      { source: '/vr',                               destination: '/fashion/vr',                 permanent: true },

      // ── Media: Consumer Pulse ────────────────────────────────────────────
      { source: '/consumer-pulse',                   destination: '/media/consumer-pulse',                permanent: true },
      { source: '/consumer-pulse-analytics',         destination: '/media/consumer-pulse/analytics',      permanent: true },
      { source: '/consumer-pulse-polling',           destination: '/media/consumer-pulse/polling',        permanent: true },
      { source: '/consumer-pulse-surveys',           destination: '/media/consumer-pulse/surveys',        permanent: true },
      { source: '/consumer-pulse-signin',            destination: '/media/consumer-pulse/signin',         permanent: true },
      { source: '/consumer-pulse-signup',            destination: '/media/consumer-pulse/signup',         permanent: true },
      { source: '/consumer-pulse-comingsoon',        destination: '/media/consumer-pulse/coming-soon',    permanent: true },
    ];
  },
};

export default nextConfig;
