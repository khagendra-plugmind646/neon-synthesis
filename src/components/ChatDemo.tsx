
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, RefreshCw } from "lucide-react";

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatDemo = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Avixara AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      const responses = [
        "I can help with that! Our AI solutions are designed to address exactly this kind of challenge.",
        "That's a great question. Avixara's technology can be customized to fit your specific needs.",
        "Interesting! We've implemented similar solutions for other clients with great success.",
        "Our AI models are trained on diverse datasets to ensure they work effectively across various scenarios.",
        "I'd be happy to connect you with one of our specialists who can provide more detailed information about this."
      ];
      
      const botMessage: Message = {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const resetChat = () => {
    setMessages([
      {
        text: "Hi there! I'm Avixara AI assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <section id="demo" className="min-h-screen mesh-gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Experience Our AI In Action
          </h2>
          <p className="text-gray-300 text-lg">
            Try our interactive demo to see how Avixara AI can transform your business communications.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border border-avixara-neon-blue/30 rounded-md animate-float hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border border-avixara-neon-purple/30 rounded-md animate-float animation-delay-1000 hidden md:block"></div>
          
          <div className="chatbox-container bg-black/60 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10">
            {/* Chat header */}
            <div className="bg-black/50 px-4 py-3 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center">
                <Bot className="text-avixara-neon-blue mr-2" />
                <span className="font-medium text-white">Avixara Assistant</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={resetChat}
                className="text-gray-400 hover:text-white"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Chat messages */}
            <div className="h-96 overflow-y-auto p-4 scrollbar-none">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`
                        max-w-[80%] px-4 py-3 rounded-xl
                        ${message.sender === 'user' 
                          ? 'bg-avixara-neon-blue/20 text-white ml-auto' 
                          : 'bg-white/10 text-white'}
                      `}
                    >
                      <div className="flex items-center mb-1">
                        {message.sender === 'bot' ? (
                          <Bot className="text-avixara-neon-blue h-4 w-4 mr-1" />
                        ) : (
                          <User className="text-avixara-neon-blue h-4 w-4 mr-1" />
                        )}
                        <span className="text-xs text-gray-400">
                          {message.sender === 'user' ? 'You' : 'Avixara AI'}
                        </span>
                      </div>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white px-4 py-3 rounded-xl">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-avixara-neon-blue animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-avixara-neon-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-avixara-neon-blue animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Chat input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our AI solutions..."
                  className="bg-white/10 border-white/10 text-white"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === '' || isLoading}
                  className="ml-2 bg-avixara-neon-blue hover:bg-avixara-neon-blue/80 text-black"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-gray-500 text-center">
                Try asking about our chatbots, voice assistants, or automation solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
