import { buildMetadata } from '@/lib/seo';
import LoginSection from './PageContent';

export const metadata = buildMetadata({
  title: 'Sign In — Consumer Pulse',
  description: 'Sign in to your Consumer Pulse account.',
  path: '/media/consumer-pulse/signin',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <LoginSection {...props} />;
}
