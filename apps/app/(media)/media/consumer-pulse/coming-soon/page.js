import ComingSoonSection from '@/components/ConsumerPulseComponent/ComingSoonComponent/ComingSoonSection';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Consumer Pulse — Coming Soon',
  description: 'Consumer Pulse is launching soon.',
  path: '/media/consumer-pulse/coming-soon',
  robots: 'noindex, nofollow',
});


export default function ComingSoonPage() {
  return (
    <ComingSoonSection />
  );
}
