
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    
    toast({
      title: "Subscription successful!",
      description: `You've been added to our newsletter with ${email}`,
    });
    
    form.reset();
  };
  
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Avixara AI</h3>
            <p className="text-gray-400">
              Pioneering the future of artificial intelligence with innovative solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-avixara-neon-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-avixara-neon-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-avixara-neon-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-avixara-neon-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-avixara-neon-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Chatbots</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voice Assistants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates on AI innovations.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <Input 
                name="email"
                type="email" 
                placeholder="Your email address" 
                required
                className="bg-white/10 border-white/10 text-white focus:border-avixara-neon-blue"
              />
              <Button type="submit" className="ml-2 bg-avixara-neon-blue hover:bg-avixara-neon-blue/80 text-black">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Avixara AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
