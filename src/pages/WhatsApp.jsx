import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ChevronLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const categories = ["Entrepreneurship", "Health", "Agribusiness", "Technology", "Education"];
const languages = ["English", "French", "Hausa", "Yoruba", "Igbo", "Swahili", "Berber", "Oromo", "Amharic", "Afrikaans"];

const WhatsApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);
  const navigate = useNavigate();

  const content = {
    Health: {
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
    },
    Entrepreneurship: {
      English: [
        { type: 'bot', content: "Welcome to our entrepreneurship course! Let's learn about starting a business. Press 1 to begin." },
        { type: 'user', content: "1" },
        { type: 'bot', content: "Great! Step 1: Identify your business idea. Type 'NEXT' when you're ready to proceed." },
        { type: 'user', content: "NEXT" },
        { type: 'bot', content: "Step 2: Conduct market research. Type 'CONTINUE' for the next step." },
        { type: 'user', content: "CONTINUE" },
        { type: 'bot', content: "Step 3: Create a business plan. Type 'MORE' to learn about business plans." },
        { type: 'user', content: "MORE" },
        { type: 'bot', content: "A business plan outlines your goals, strategies, and financial projections. Type 'NEXT' to continue." },
        { type: 'user', content: "NEXT" },
        { type: 'bot', content: "Step 4: Secure funding. Type 'OPTIONS' to learn about funding options." },
        { type: 'user', content: "OPTIONS" },
        { type: 'bot', content: "Funding options include loans, investors, and crowdfunding. Type 'FINISH' for the final step." },
        { type: 'user', content: "FINISH" },
        { type: 'bot', content: "Step 5: Launch your business! Type 'QUIZ' for a quick review." },
        { type: 'user', content: "QUIZ" },
        { type: 'bot', content: "Quiz: What should you create before seeking funding? A) Website B) Business Plan C) Product" },
        { type: 'user', content: "B" },
        { type: 'bot', content: "Correct! A business plan is crucial for securing funding. Type 'END' to finish the lesson." },
        { type: 'user', content: "END" },
        { type: 'bot', content: "Congratulations on completing the entrepreneurship basics! Good luck with your business venture!" },
      ],
    },
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (selectedCategory && selectedLanguage && content[selectedCategory] && content[selectedCategory][selectedLanguage]) {
      const timer = setInterval(() => {
        setCurrentStep((prevStep) => {
          if (prevStep < content[selectedCategory][selectedLanguage].length - 1) {
            return prevStep + 1;
          } else {
            clearInterval(timer);
            return prevStep;
          }
        });
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 1500);
      return () => clearInterval(timer);
    }
  }, [selectedCategory, selectedLanguage]);

  const handleBack = () => {
    if (selectedLanguage) {
      setSelectedLanguage(null);
      setCurrentStep(0);
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
      className="min-h-screen bg-[#ECE5DD] p-4"
    >
      <Button variant="outline" onClick={handleBack} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" />
        {selectedLanguage ? 'Back to Languages' : selectedCategory ? 'Back to Categories' : 'Home'}
      </Button>
      <Card className="max-w-sm mx-auto bg-[#E4DDD5] shadow-xl overflow-hidden">
        <CardHeader className="bg-[#075E54] text-white">
          <CardTitle className="text-xl font-bold flex items-center">
            <MessageCircle className="mr-2" /> LinguaLink AI on WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-[#E2DDD5] p-4 h-[500px] overflow-y-auto" ref={chatRef}>
            <div className="relative z-10">
              {!selectedCategory && (
                <div className="bg-white rounded-lg shadow p-3 mb-2">
                  <p className="mb-4">Select a category:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <Button key={category} onClick={() => handleCategorySelect(category)} className="bg-[#25D366] hover:bg-[#128C7E] text-white">
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
                      <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                        {lang}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              {selectedCategory && selectedLanguage && content[selectedCategory] && content[selectedCategory][selectedLanguage] && (
                content[selectedCategory][selectedLanguage].slice(0, currentStep + 1).map((item, index) => (
                  <div key={index} className={`mb-2 ${item.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg ${item.type === 'user' ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This demo simulates LinguaLink AI translations on WhatsApp for {selectedCategory || 'your chosen category'} in {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default WhatsApp;
