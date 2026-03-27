import HeroSection from '@/components/HeroComponent/HeroSection';
import TechnologiesSection from '@/components/BaltarSections/TechnologiesSection';
import HospitalitySection from '@/components/BaltarSections/HospitalitySection';
import EngineeringSection from '@/components/BaltarSections/EngineeringSection';
import FinanceSection from '@/components/BaltarSections/FinanceSection';
import FashionSection from '@/components/BaltarSections/FashionSection';
import MediaSection from '@/components/BaltarSections/MediaSection';
import ContactSection from '@/components/BaltarSections/ContactSection';
import MetaFooter from '@/components/MetaStyleComponents/MetaFooter';

export const metadata = {
  title: 'Baltar Inc — One Company. Limitless Services. | Canada',
  description:
    'Baltar Inc is a Canadian multi-division firm delivering web design, hospitality, engineering, fintech, fashion, and media solutions. Serving startups, enterprises, and professionals across Canada.',
  keywords: 'Baltar Inc, Canadian business, web design Toronto, hospitality Canada, fintech Canada, fashion tech, media company Canada, multi-division firm',
  alternates: { canonical: 'https://baltar.ca' },
  openGraph: {
    title: 'Baltar Inc — One Company. Limitless Services.',
    description:
      'A Canadian multi-division firm operating across technology, hospitality, consulting, finance, fashion, and media. Built for startups, professionals, and enterprise clients.',
    url: 'https://baltar.ca',
    siteName: 'Baltar Inc',
    type: 'website',
    images: [{ url: 'https://baltar.ca/og-default.png', width: 1200, height: 630, alt: 'Baltar Inc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baltar Inc — One Company. Limitless Services.',
    description:
      'A Canadian multi-division firm operating across technology, hospitality, consulting, finance, fashion, and media.',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologiesSection />
      <HospitalitySection />
      <EngineeringSection />
      <FinanceSection />
      <FashionSection />
      <MediaSection />
      <ContactSection />
      <MetaFooter />
    </>
  );
}
