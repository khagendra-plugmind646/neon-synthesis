
import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCw, Cpu, BrainCircuit } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const calculateTransform = (depth: number) => {
    const moveX = (mousePosition.x - 0.5) * depth;
    const moveY = (mousePosition.y - 0.5) * depth;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen mesh-gradient-bg flex flex-col justify-center items-center overflow-hidden pt-16"
    >
      {/* Animated Circles Background */}
      <div 
        className="circle-glow absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-avixara-neon-blue/30"
        style={{ transform: calculateTransform(-20) }}
      ></div>
      <div 
        className="circle-glow absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-avixara-neon-purple/30"
        style={{ transform: calculateTransform(-30) }}
      ></div>
      
      {/* 3D Floating Elements */}
      <div 
        className="absolute -top-10 right-10 lg:right-1/4 transform rotate-12 opacity-70"
        style={{ transform: `rotate(12deg) ${calculateTransform(-10)}` }}
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-avixara-neon-blue/20 to-transparent border border-avixara-neon-blue/30 rounded-xl backdrop-blur-sm flex justify-center items-center animate-float">
          <RotateCw className="text-avixara-neon-blue w-16 h-16 animate-pulse-glow" />
        </div>
      </div>
      
      <div 
        className="absolute bottom-20 left-10 lg:left-1/4 transform -rotate-12 opacity-70"
        style={{ transform: `rotate(-12deg) ${calculateTransform(-15)}` }}
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-avixara-neon-purple/20 to-transparent border border-avixara-neon-purple/30 rounded-xl backdrop-blur-sm flex justify-center items-center animate-float animation-delay-1000">
          <Cpu className="text-avixara-neon-purple w-16 h-16 animate-pulse-glow" />
        </div>
      </div>
      
      <div 
        className="absolute top-1/2 -translate-y-1/2 translate-x-1/3 right-0 transform rotate-6 opacity-70 hidden lg:block"
        style={{ transform: `rotate(6deg) ${calculateTransform(-20)}` }}
      >
        <div className="relative w-40 h-40 bg-gradient-to-br from-avixara-highlight/20 to-transparent border border-avixara-highlight/30 rounded-xl backdrop-blur-sm flex justify-center items-center animate-float animation-delay-2000">
          <BrainCircuit className="text-avixara-highlight w-20 h-20 animate-pulse-glow" />
        </div>
      </div>

      {/* Content */}
      <div 
        className="container px-4 py-12 flex flex-col items-center text-center z-10"
        style={{ transform: calculateTransform(-5) }}
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Next-Gen AI Solutions</span>
            <br />
            <span className="text-white">For The Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Avixara AI delivers cutting-edge chatbots, voice assistants, and automation solutions powered by the latest in artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-avixara-neon-blue hover:bg-avixara-neon-blue/80 text-black font-medium py-6 px-8 text-lg group">
              Explore Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 py-6 px-8 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/50 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
