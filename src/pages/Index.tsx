
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ChatDemo from '@/components/ChatDemo';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';
import '../App.css';

const Index = () => {
  // For the first load, smooth scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ChatDemo />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
