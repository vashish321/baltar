export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  },

  services: {
    trueCostIndex: "/truecostindex",
    consumerPulse: "/news",
    transac: "/transac",
    savourSip: "/savourandsip",
  },

  features: {
    enablePayments: true,
    enableNewsAutomation: true,
    enableAnalytics: true,
  },

  platform: {
    name: "Baltar",
    region: "Canada",
  }
};