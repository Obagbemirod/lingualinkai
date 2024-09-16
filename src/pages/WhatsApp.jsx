import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

const WhatsApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);

  const languages = ["English", "French", "Swahili", "Arabic"];
  const healthContent = [
    { type: 'text', content: "Hello! Welcome to our health education program. Let's learn about proper handwashing techniques." },
    { type: 'text', content: "Step 1: Wet your hands with clean, running water (warm or cold), turn off the tap, and apply soap." },
    { type: 'image', content: "https://example.com/handwashing-step1.jpg" },
    { type: 'text', content: "Step 2: Lather your hands by rubbing them together with the soap. Be sure to lather the backs of your hands, between your fingers, and under your nails." },
    { type: 'image', content: "https://example.com/handwashing-step2.jpg" },
    { type: 'text', content: "Step 3: Scrub your hands for at least 20 seconds. Need a timer? Hum the 'Happy Birthday' song from beginning to end twice." },
    { type: 'text', content: "Step 4: Rinse your hands well under clean, running water." },
    { type: 'image', content: "https://example.com/handwashing-step4.jpg" },
    { type: 'text', content: "Step 5: Dry your hands using a clean towel or air dry them." },
    { type: 'text', content: "Great job! You've learned the proper handwashing technique. This simple act can prevent many diseases. Stay healthy!" },
  ];

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCurrentStep(1);
  };

  useEffect(() => {
    if (currentStep > 0 && currentStep < healthContent.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prevStep => prevStep + 1);
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#ECE5DD] p-8"
    >
      <Card className="max-w-md mx-auto bg-white shadow-xl">
        <CardHeader className="bg-[#075E54] text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <MessageCircle className="mr-2" /> LinguaLink AI on WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-[#E2DDD5] p-4 h-[500px] overflow-y-auto" ref={chatRef}>
            {currentStep === 0 ? (
              <div className="bg-white rounded-lg shadow p-3 mb-2">
                <p className="mb-4">Hello, select your preferred language:</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              healthContent.slice(0, currentStep).map((item, index) => (
                <div key={index} className={`mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg ${index % 2 === 0 ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                    {item.type === 'text' ? (
                      <p>{item.content}</p>
                    ) : (
                      <img src={item.content} alt="Handwashing step" className="w-full rounded-lg" />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This is a demo of how LinguaLink AI translates content on WhatsApp. In a real scenario, all content would be instantly translated to {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default WhatsApp;
