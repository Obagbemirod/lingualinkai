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
    { type: 'video', content: "https://example.com/handwashing-step1.mp4" },
    { type: 'text', content: "Step 2: Lather your hands by rubbing them together with the soap. Be sure to lather the backs of your hands, between your fingers, and under your nails." },
    { type: 'video', content: "https://example.com/handwashing-step2.mp4" },
    { type: 'text', content: "Step 3: Scrub your hands for at least 20 seconds. Need a timer? Hum the 'Happy Birthday' song from beginning to end twice." },
    { type: 'text', content: "Step 4: Rinse your hands well under clean, running water." },
    { type: 'video', content: "https://example.com/handwashing-step4.mp4" },
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
      }, 3000); // Adjust timing as needed
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-8"
    >
      <Card className="max-w-md mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-600 flex items-center">
            <MessageCircle className="mr-2" /> LinguaLink AI on WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-lg p-4 mb-4 relative" style={{ height: '500px', overflowY: 'auto' }}>
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none"></div>
            <div ref={chatRef} className="space-y-4">
              {currentStep === 0 ? (
                <div className="bg-white p-3 rounded-lg shadow">
                  <p className="mb-4">Hello, select your preferred language:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-green-500 hover:bg-green-600">
                        {lang}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                healthContent.slice(0, currentStep).map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow">
                    {item.type === 'text' ? (
                      <p>{item.content}</p>
                    ) : (
                      <video src={item.content} controls className="w-full rounded" />
                    )}
                  </div>
                ))
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This is a demo of how LinguaLink AI translates content on WhatsApp. In a real scenario, all content would be instantly translated to {selectedLanguage || 'your chosen language'}.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WhatsApp;