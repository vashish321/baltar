import { buildMetadata } from '@/lib/seo';
import PageContent from './PageContent';

export const metadata = buildMetadata({
  title: 'Savour & Sip — Luxury Catering & Event Hospitality | Toronto, GTA',
  description: 'Savour & Sip provides luxury catering, curated bar programs, and full-service event hospitality across Toronto and the GTA. Corporate events, private dining, weddings, and brand activations.',
  path: '/hospitality/savour-and-sip',
});

export default function SavourSipPage() {
  return <PageContent />;
}
