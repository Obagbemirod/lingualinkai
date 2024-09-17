import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Smartphone, ChevronLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';

const categories = ["Entrepreneurship", "Health", "Agribusiness", "Technology", "Education"];
const languages = ["English", "French", "Hausa", "Yoruba", "Igbo", "Swahili", "Berber", "Oromo", "Amharic", "Afrikaans"];

const Telegram = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);
  const navigate = useNavigate();

  const healthContent = {
    English: [
      { type: 'bot', content: "Welcome to our health education program! Let's learn about proper handwashing. Press 1 to continue." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Great! Step 1: Wet your hands with clean water. Type 'NEXT' to proceed." },
      { type: 'user', content: "NEXT" },
      { type: 'bot', content: "Step 2: Apply soap and lather well. Type 'CONTINUE' for the next step." },
      { type: 'user', content: "CONTINUE" },
      { type: 'bot', content: "Step 3: Scrub hands for at least 20 seconds. Type 'GO ON' to proceed." },
      { type: 'user', content: "GO ON" },
      { type: 'bot', content: "Step 4: Rinse hands thoroughly. Type 'FINISH' for the final step." },
      { type: 'user', content: "FINISH" },
      { type: 'bot', content: "Step 5: Dry hands with a clean towel. Great job! You've learned proper handwashing. Type 'QUIZ' for a quick test." },
      { type: 'user', content: "QUIZ" },
      { type: 'bot', content: "Quiz: How long should you scrub your hands? A) 5 seconds B) 10 seconds C) 20 seconds" },
      { type: 'user', content: "C" },
      { type: 'bot', content: "Correct! Remember to wash your hands regularly to stay healthy. Type 'END' to finish." },
      { type: 'user', content: "END" },
      { type: 'bot', content: "Thank you for learning with us! Stay healthy!" },
    ],
    // Add translations for other languages here
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (currentStep > 0 && currentStep < healthContent[selectedLanguage].length) {
      const timer = setTimeout(() => {
        setCurrentStep(prevStep => prevStep + 1);
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, selectedLanguage]);

  const handleBack = () => {
    if (selectedLanguage) {
      setSelectedLanguage(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F5F5F5] p-4"
    >
      <Button variant="outline" onClick={handleBack} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" />
        {selectedLanguage ? 'Back to Languages' : selectedCategory ? 'Back to Categories' : 'Home'}
      </Button>
      <Card className="max-w-sm mx-auto bg-white shadow-xl overflow-hidden">
        <CardHeader className="bg-[#0088CC] text-white">
          <CardTitle className="text-xl font-bold flex items-center">
            <Send className="mr-2" /> LinguaLink AI on Telegram
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-[#E7EBF0] p-4 h-[500px] overflow-y-auto" ref={chatRef}>
            <Smartphone className="w-full h-full text-gray-300 absolute top-0 left-0 pointer-events-none" />
            <div className="relative z-10">
              {!selectedCategory && (
                <div className="bg-white rounded-lg shadow p-3 mb-2">
                  <p className="mb-4">Select a category:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <Button key={category} onClick={() => handleCategorySelect(category)} className="bg-[#0088CC] hover:bg-[#006699] text-white">
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {selectedCategory && !selectedLanguage && (
                <div className="bg-white rounded-lg shadow p-3 mb-2">
                  <p className="mb-4">Select your language:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-[#0088CC] hover:bg-[#006699] text-white">
                        {lang}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {selectedLanguage && healthContent[selectedLanguage].slice(0, currentStep).map((item, index) => (
                <div key={index} className={`mb-2 ${item.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg ${item.type === 'user' ? 'bg-[#E3F2FD]' : 'bg-white'}`}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This demo simulates LinguaLink AI translations on Telegram for {selectedCategory || 'your chosen category'} in {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default Telegram;
