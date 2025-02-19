import Image from "next/image";
import Herosection from '@/app/components/hero-section'
import SubHerosection from '@/app/components/sub-hero-section';
import Clubsection from '@/app/components/club-section';
import Footer from '@/app/components/footer'
import HeroDetailsection from '@/app/components/hero-detail-section'
import HeroDescriptionSection from '@/app/components/hero-description-section'
export default function Home() {
  return (
    <div>
      <Herosection/>
      <SubHerosection/>
      <Clubsection/>
      <HeroDetailsection/>
      <HeroDescriptionSection/>
      <Footer/>
    </div>
  );
}
