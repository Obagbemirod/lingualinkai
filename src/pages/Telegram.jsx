import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from 'lucide-react';
import { motion } from "framer-motion";

const Telegram = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const languages = ["English", "French", "Swahili", "Arabic"];
  const healthContent = [
    "Welcome to our health education program on Telegram. Today, we'll learn about the importance of a balanced diet.",
    "A balanced diet includes a variety of foods from all food groups: fruits, vegetables, grains, proteins, and dairy.",
    "Fruits and vegetables provide essential vitamins, minerals, and fiber. Aim for a colorful plate!",
    "Whole grains offer energy and fiber. Choose brown rice, whole wheat bread, and oats over refined grains.",
    "Proteins are crucial for building and repairing tissues. Include lean meats, fish, beans, or tofu in your meals.",
    "Dairy products are rich in calcium and vitamin D. If you're lactose intolerant, try fortified plant-based alternatives.",
    "Remember, moderation is key. Enjoy a variety of foods and stay hydrated. A balanced diet leads to better health!"
  ];

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (currentStep < healthContent.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
          <div className="bg-gray-100 rounded-lg p-4 mb-4" style={{ height: '400px', overflowY: 'auto' }}>
            {currentStep === 0 ? (
              <div>
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
              <div>
                <p className="mb-4">{healthContent[currentStep - 1]}</p>
                {currentStep < healthContent.length - 1 && (
                  <Button onClick={handleNext} className="mt-4 bg-blue-500 hover:bg-blue-600">Next</Button>
                )}
                {currentStep > 1 && (
                  <Button onClick={handlePrevious} className="mt-4 ml-2 bg-gray-500 hover:bg-gray-600">Previous</Button>
                )}
              </div>
            )}
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