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
    { type: 'image', content: "https://example.com/balanced-diet-overview.jpg" },
    { type: 'text', content: "Fruits and vegetables provide essential vitamins, minerals, and fiber. Aim for a colorful plate!" },
    { type: 'image', content: "https://example.com/colorful-plate.jpg" },
    { type: 'text', content: "Whole grains offer energy and fiber. Choose brown rice, whole wheat bread, and oats over refined grains." },
    { type: 'text', content: "Proteins are crucial for building and repairing tissues. Include lean meats, fish, beans, or tofu in your meals." },
    { type: 'image', content: "https://example.com/protein-sources.jpg" },
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
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F5F5F5] p-8"
    >
      <Card className="max-w-md mx-auto bg-white shadow-xl">
        <CardHeader className="bg-[#0088CC] text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <Send className="mr-2" /> LinguaLink AI on Telegram
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-[#E7EBF0] p-4 h-[500px] overflow-y-auto" ref={chatRef}>
            {currentStep === 0 ? (
              <div className="bg-white rounded-lg shadow p-3 mb-2">
                <p className="mb-4">Hello, select your preferred language:</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-[#0088CC] hover:bg-[#006699] text-white">
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              healthContent.slice(0, currentStep).map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="bg-white p-3 rounded-lg shadow">
                    {item.type === 'text' ? (
                      <p>{item.content}</p>
                    ) : (
                      <img src={item.content} alt="Health content" className="w-full rounded-lg" />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This is a demo of how LinguaLink AI translates content on Telegram. In a real scenario, all content would be instantly translated to {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default Telegram;
