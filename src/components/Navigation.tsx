
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 backdrop-blur-xl bg-black/60 shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Avixara AI</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'demo', 'getStarted'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-avixara-neon-blue after:transition-all hover:after:w-full"
            >
              {item === 'home' ? 'Home' : 
               item === 'services' ? 'Services' : 
               item === 'demo' ? 'Demo' : 'Get Started'}
            </button>
          ))}
          <Button className="bg-transparent border border-avixara-neon-blue text-avixara-neon-blue hover:bg-avixara-neon-blue/10">
            Contact Us
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {['home', 'services', 'demo', 'getStarted'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item === 'home' ? 'Home' : 
                 item === 'services' ? 'Services' : 
                 item === 'demo' ? 'Demo' : 'Get Started'}
              </button>
            ))}
            <Button className="w-full bg-transparent border border-avixara-neon-blue text-avixara-neon-blue hover:bg-avixara-neon-blue/10">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
