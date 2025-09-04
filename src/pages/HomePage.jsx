import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Testimonials from '@/components/Testimonials';
import DonateSection from '@/components/DonateSection';
import Contact from '@/components/Contact';
import PageTransition from '@/components/PageTransition';

const HomePage = () => {
  const logoUrl = 'https://horizons-cdn.hostinger.com/2bd608ca-1826-4fa8-947d-e9cc2eae5f69/a397c500be93cfb8a09d2a75a5bda983.png';

  return (
    <PageTransition>
      <Helmet>
        <title>SAMKAKSHA FOUNDATION - Empowering Communities Through Education & Support</title>
        <meta name="description" content="SAMKAKSHA FOUNDATION is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development programs." />
        <meta property="og:title" content="SAMKAKSHA FOUNDATION - Empowering Communities Through Education & Support" />
        <meta property="og:description" content="Join us in making a difference. Support our mission to provide education, healthcare, and opportunities to underserved communities." />
        <meta property="og:image" content={logoUrl} />
      </Helmet>
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Testimonials />
      <DonateSection />
      <Contact />
    </PageTransition>
  );
};

export default HomePage;