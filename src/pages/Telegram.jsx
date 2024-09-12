import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

const Telegram = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);

  const languages = ["English", "French", "Swahili", "Arabic"];
  const healthContent = [
    { type: 'text', content: "Welcome to our health education program on Telegram. Today, we'll learn about the importance of a balanced diet." },
    { type: 'text', content: "A balanced diet includes a variety of foods from all food groups: fruits, vegetables, grains, proteins, and dairy." },
    { type: 'video', content: "https://example.com/balanced-diet-overview.mp4" },
    { type: 'text', content: "Fruits and vegetables provide essential vitamins, minerals, and fiber. Aim for a colorful plate!" },
    { type: 'image', content: "https://example.com/colorful-plate.jpg" },
    { type: 'text', content: "Whole grains offer energy and fiber. Choose brown rice, whole wheat bread, and oats over refined grains." },
    { type: 'text', content: "Proteins are crucial for building and repairing tissues. Include lean meats, fish, beans, or tofu in your meals." },
    { type: 'video', content: "https://example.com/protein-sources.mp4" },
    { type: 'text', content: "Dairy products are rich in calcium and vitamin D. If you're lactose intolerant, try fortified plant-based alternatives." },
    { type: 'text', content: "Remember, moderation is key. Enjoy a variety of foods and stay hydrated. A balanced diet leads to better health!" },
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
      className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-8"
    >
      <Card className="max-w-md mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600 flex items-center">
            <Send className="mr-2" /> LinguaLink AI on Telegram
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
                      <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-blue-500 hover:bg-blue-600">
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
                    ) : item.type === 'video' ? (
                      <video src={item.content} controls className="w-full rounded" />
                    ) : (
                      <img src={item.content} alt="Health content" className="w-full rounded" />
                    )}
                  </div>
                ))
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This is a demo of how LinguaLink AI translates content on Telegram. In a real scenario, all content would be instantly translated to {selectedLanguage || 'your chosen language'}.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Telegram;