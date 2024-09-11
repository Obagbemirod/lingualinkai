import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";

const WhatsApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const languages = ["English", "French", "Swahili", "Arabic"];
  const healthContent = [
    "Hello! Welcome to our health education program. Let's learn about proper handwashing techniques.",
    "Step 1: Wet your hands with clean, running water (warm or cold), turn off the tap, and apply soap.",
    "Step 2: Lather your hands by rubbing them together with the soap. Be sure to lather the backs of your hands, between your fingers, and under your nails.",
    "Step 3: Scrub your hands for at least 20 seconds. Need a timer? Hum the 'Happy Birthday' song from beginning to end twice.",
    "Step 4: Rinse your hands well under clean, running water.",
    "Step 5: Dry your hands using a clean towel or air dry them.",
    "Great job! You've learned the proper handwashing technique. This simple act can prevent many diseases. Stay healthy!"
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
      className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-8"
    >
      <Card className="max-w-md mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-600 flex items-center">
            <MessageCircle className="mr-2" /> LinguaLink AI on WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-lg p-4 mb-4" style={{ height: '400px', overflowY: 'auto' }}>
            {currentStep === 0 ? (
              <div>
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
              <div>
                <p className="mb-4">{healthContent[currentStep - 1]}</p>
                {currentStep < healthContent.length - 1 && (
                  <Button onClick={handleNext} className="mt-4 bg-green-500 hover:bg-green-600">Next</Button>
                )}
                {currentStep > 1 && (
                  <Button onClick={handlePrevious} className="mt-4 ml-2 bg-gray-500 hover:bg-gray-600">Previous</Button>
                )}
              </div>
            )}
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