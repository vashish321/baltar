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
  title: 'Baltar Inc — One Company. Limitless Services.',
  description:
    'Baltar Inc is a modern multi-vertical ecosystem operating across technology, hospitality, consulting, finance, fashion, and media.',
  alternates: { canonical: 'https://baltar.ca' },
  openGraph: {
    title: 'Baltar Inc — One Company. Limitless Services.',
    description:
      'A modern multi-vertical ecosystem operating across technology, hospitality, consulting, finance, fashion, and media.',
    url: 'https://baltar.ca',
    siteName: 'Baltar Inc',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baltar Inc — One Company. Limitless Services.',
    description:
      'A modern multi-vertical ecosystem operating across technology, hospitality, consulting, finance, fashion, and media.',
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
