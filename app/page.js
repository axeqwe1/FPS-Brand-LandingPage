'use client'

import Image from "next/image";
import Herosection from '@/app/components/hero-section'
import SubHerosection from '@/app/components/sub-hero-section';
import Clubsection from '@/app/components/club-section';
import Footer from '@/app/components/footer'
import HeroDetailsection from '@/app/components/hero-detail-section'
import HeroDescriptionSection from '@/app/components/hero-description-section'
import Navbar from "@/app/components/navbar"
import { useRef } from "react";

export default function Home() {
  const clubRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    if (section === "club") ref = clubRef;
    if (section === "about") ref = aboutRef;
    if (section === "contact") ref = contactRef;
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection}/>
      <Herosection/>
      <SubHerosection/>
      <Clubsection ref={clubRef}/>
      <HeroDetailsection/>
      <HeroDescriptionSection ref={aboutRef}/>
      <Footer ref={contactRef}/>
    </div>
  );
}
