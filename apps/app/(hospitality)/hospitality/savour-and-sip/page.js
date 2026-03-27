import PageLoader from '@/components/SavourAndSip/PageAnimationComponent/PageAnimation';
import HeroSection from '@/components/SavourAndSip/HeroSectionComponent/HeroSection';
import QuickOverviewBanner from '@/components/SavourAndSip/QuickOverviewComponent/QuickOverviewBanner';
import AboutTeaser from '@/components/SavourAndSip/AboutTeaserComponent/AboutTeaser';
import WhoWeServe from '@/components/SavourAndSip/WhoWeServeComponent/WhoWeServe';
import TestimonialSlider from '@/components/SavourAndSip/TestimonialComponent/TestimonialSlider';
import CTAFooterBar from '@/components/SavourAndSip/CTAFooterComponent/CTAFooterBar';
import Footer from '@/components/SavourAndSip/FooterComponent/Footer';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Savour & Sip — Luxury Catering & Event Hospitality | Toronto, GTA',
  description: 'Savour & Sip provides luxury catering, curated bar programs, and full-service event hospitality across Toronto and the GTA. Corporate events, private dining, weddings, and brand activations.',
  path: '/hospitality/savour-and-sip',
});


export default function SavourSipPage() {
  return <>
       <PageLoader />
       <HeroSection />
       <QuickOverviewBanner />
       <AboutTeaser />
       <WhoWeServe />
       <TestimonialSlider />
       <CTAFooterBar />
       <Footer/>
        </>
}
