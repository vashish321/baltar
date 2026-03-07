import HeaderComponent from '@/components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import SurveySection from '@/components/ConsumerPulseComponent/SurveyComponent/SurveySection';
import Footer from '@/components/ConsumerPulseComponent/FooterComponent/Footer';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Surveys — Consumer Pulse',
  description: 'Take surveys and contribute to market research on Consumer Pulse.',
  path: '/media/consumer-pulse/surveys',
});


export default function SurveysPage() {
  return (
    <>
      <HeaderComponent />
      <SurveySection />
      <Footer />
    </>
  );
}
