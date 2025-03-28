
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetStarted = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const services = [
    { id: 'chatbot', name: 'AI Chatbots', description: 'Smart conversational agents for your website or app' },
    { id: 'voice', name: 'Voice Assistants', description: 'Advanced voice-enabled AI for seamless interactions' },
    { id: 'automation', name: 'Smart Automation', description: 'Streamline your business processes with AI' },
  ];
  
  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNextStep = () => {
    if (formStep === 0 && !selectedService) {
      toast({
        title: "Please select a service",
        description: "You need to select a service to proceed",
        variant: "destructive",
      });
      return;
    }
    
    setFormStep(prev => prev + 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(2); // Success step
      
      toast({
        title: "Request received!",
        description: "Our team will contact you shortly.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="getStarted" className="min-h-screen mesh-gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Get Started with Avixara AI
          </h2>
          <p className="text-gray-300 text-lg">
            Transform your business with our cutting-edge AI solutions. Let's build the future together.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto glass-panel rounded-xl p-1">
          <div className="bg-black/60 rounded-lg p-6 md:p-8">
            {/* Progress indicator */}
            <div className="flex justify-between mb-8">
              {[0, 1, 2].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      formStep >= step 
                        ? 'bg-avixara-neon-blue text-black' 
                        : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {formStep > step ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step + 1
                    )}
                  </div>
                  <span className={`mt-2 text-sm ${formStep >= step ? 'text-white' : 'text-white/50'}`}>
                    {step === 0 ? 'Select Service' : step === 1 ? 'Your Details' : 'Confirmation'}
                  </span>
                </div>
              ))}
            </div>
            
            {formStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">Select a Service</h3>
                
                <RadioGroup value={selectedService || ""} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`
                        relative rounded-lg p-4 cursor-pointer transition-all duration-300
                        ${selectedService === service.id 
                          ? 'bg-avixara-neon-blue/20 border border-avixara-neon-blue' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'}
                      `}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <RadioGroupItem 
                        value={service.id} 
                        id={service.id} 
                        className="absolute right-4 top-4"
                      />
                      <Label htmlFor={service.id} className="block cursor-pointer">
                        <div className="font-medium text-white mb-1">{service.name}</div>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                <div className="pt-4 text-right">
                  <Button 
                    onClick={handleNextStep} 
                    className="bg-avixara-neon-blue hover:bg-avixara-neon-blue/80 text-black"
                  >
                    Next Step <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            )}
            
            {formStep === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">Your Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-white/10 border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="bg-white/10 border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      required
                      className="bg-white/10 border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="requirements" className="text-white">Project Requirements</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements"
                      className="bg-white/10 border-white/10 text-white min-h-24"
                    />
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button 
                    type="button"
                    onClick={() => setFormStep(0)} 
                    variant="outline"
                    className="border-white/10 bg-transparent hover:bg-white/5"
                  >
                    Back
                  </Button>
                  
                  <Button 
                    type="submit"
                    className="bg-avixara-neon-blue hover:bg-avixara-neon-blue/80 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </div> : 
                      "Submit Request"
                    }
                  </Button>
                </div>
              </form>
            )}
            
            {formStep === 2 && (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-avixara-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-avixara-neon-blue" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">Request Submitted!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your interest in Avixara AI. Our team will review your request and contact you within 24-48 hours.
                </p>
                
                <Button 
                  onClick={() => {
                    setFormStep(0);
                    setSelectedService(null);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      requirements: '',
                    });
                  }}
                  variant="outline"
                  className="border-avixara-neon-blue text-avixara-neon-blue hover:bg-avixara-neon-blue/10"
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
