import { buildMetadata } from '@/lib/seo';
import EventsPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Events — Savour & Sip',
  description: 'Discover upcoming Savour & Sip events and special experiences.',
  path: '/hospitality/savour-and-sip/events',
});

export default function Page(props) {
  return <EventsPage {...props} />;
}
