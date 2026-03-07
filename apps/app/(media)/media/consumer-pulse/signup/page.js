import { buildMetadata } from '@/lib/seo';
import SignupSection from './PageContent';

export const metadata = buildMetadata({
  title: 'Sign Up — Consumer Pulse',
  description: 'Create your Consumer Pulse account.',
  path: '/media/consumer-pulse/signup',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <SignupSection {...props} />;
}
