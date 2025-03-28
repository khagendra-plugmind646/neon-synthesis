
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Mic, 
  Cog, 
  Brain, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`service-card h-full glass-panel p-6 relative overflow-hidden group ${
        isHovered ? 'shadow-lg' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} blur-xl`}></div>
      </div>
      
      <div className="relative z-10">
        <div 
          className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${color} transform group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <Button 
          variant="ghost" 
          className="px-0 text-avixara-neon-blue hover:text-avixara-neon-blue/80 hover:bg-transparent group"
        >
          Learn more 
          <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
        </Button>
      </div>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <MessageSquare className="text-avixara-neon-blue w-7 h-7" />,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that understand context and provide personalized responses.",
      color: "from-avixara-neon-blue/20 to-transparent"
    },
    {
      icon: <Mic className="text-avixara-neon-purple w-7 h-7" />,
      title: "Voice Assistants",
      description: "Advanced voice recognition technology with natural language understanding capabilities.",
      color: "from-avixara-neon-purple/20 to-transparent"
    },
    {
      icon: <Cog className="text-avixara-highlight w-7 h-7" />,
      title: "Smart Automation",
      description: "Streamline business processes with intelligent workflow automation and predictive actions.",
      color: "from-avixara-highlight/20 to-transparent"
    },
    {
      icon: <Brain className="text-avixara-neon-cyan w-7 h-7" />,
      title: "Machine Learning",
      description: "Custom ML models designed to solve specific business challenges and improve over time.",
      color: "from-avixara-neon-cyan/20 to-transparent"
    },
    {
      icon: <BarChart3 className="text-green-400 w-7 h-7" />,
      title: "Predictive Analytics",
      description: "Harness the power of data to forecast trends and make informed business decisions.",
      color: "from-green-400/20 to-transparent"
    },
    {
      icon: <ShieldCheck className="text-yellow-400 w-7 h-7" />,
      title: "Secure AI Solutions",
      description: "Enterprise-grade security with privacy-preserving AI technology for sensitive data.",
      color: "from-yellow-400/20 to-transparent"
    }
  ];

  return (
    <section id="services" className="min-h-screen mesh-gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            AI-Powered Services
          </h2>
          <p className="text-gray-300 text-lg">
            Discover our comprehensive suite of AI solutions designed to transform your business operations and customer experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
