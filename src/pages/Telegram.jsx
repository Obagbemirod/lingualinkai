import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, ChevronLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const categories = ["Entrepreneurship", "Health", "Agribusiness", "Technology", "Education"];
const languages = ["English", "Hausa", "Yoruba", "Igbo", "Swahili", "Berber", "Oromo", "Amharic", "Afrikaans"];

const content = {
  Entrepreneurship: {
    English: [
      { type: 'bot', content: "Welcome to our entrepreneurship course! Let's learn about starting a business. Press 1 to begin." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Great! Step 1: Identify your business idea. Type 'NEXT' when you're ready to proceed." },
      { type: 'user', content: "NEXT" },
      { type: 'bot', content: "Step 2: Conduct market research. Type 'CONTINUE' for the next step." },
      { type: 'user', content: "CONTINUE" },
      { type: 'bot', content: "Step 3: Create a business plan. Type 'FINISH' to complete the lesson." },
      { type: 'user', content: "FINISH" },
      { type: 'bot', content: "Congratulations on completing the entrepreneurship basics! Good luck with your business venture!" },
    ],
    Igbo: [
      { type: 'bot', content: "Nno na klaasi azụmahịa anyị! Ka anyị mụta banyere ịmalite azụmahịa. Pịa 1 ịmalite." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Ọ dị mma! Nzọụkwụ 1: Chọpụta echiche azụmahịa gị. Dee 'OGA N'IHU' mgbe ị kwadoro ịga n'ihu." },
      { type: 'user', content: "OGA N'IHU" },
      { type: 'bot', content: "Nzọụkwụ 2: Mee nnyocha ahịa. Dee 'GABA N'IHU' maka nzọụkwụ ọzọ." },
      { type: 'user', content: "GABA N'IHU" },
      { type: 'bot', content: "Nzọụkwụ 3: Mepụta atụmatụ azụmahịa. Dee 'MECHIE' iji mechie ihe ọmụmụ." },
      { type: 'user', content: "MECHIE" },
      { type: 'bot', content: "Ekele na-agụcha ntọala azụmahịa! Obi ụtọ na mbọ azụmahịa gị!" },
    ],
    // Add translations for other languages here
  },
  Health: {
    English: [
      { type: 'bot', content: "Welcome to our health education program! Let's learn about proper handwashing. Press 1 to continue." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Great! Step 1: Wet your hands with clean water. Type 'NEXT' to proceed." },
      { type: 'user', content: "NEXT" },
      { type: 'bot', content: "Step 2: Apply soap and lather well. Type 'CONTINUE' for the next step." },
      { type: 'user', content: "CONTINUE" },
      { type: 'bot', content: "Step 3: Scrub hands for at least 20 seconds. Type 'FINISH' to complete the lesson." },
      { type: 'user', content: "FINISH" },
      { type: 'bot', content: "Excellent! Remember to wash your hands regularly to stay healthy." },
    ],
    Hausa: [
      { type: 'bot', content: "Barka da zuwa ga shirin ilimin lafiyarmu! Bari mu koya game da wankin hannu yadda ya kamata. Danna 1 don ci gaba." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Mai kyau! Matakin 1: Jikar da hannuwanku da ruwan tsabta. Rubuta 'NA GABA' don ci gaba." },
      { type: 'user', content: "NA GABA" },
      { type: 'bot', content: "Matakin 2: Saka sabulu kuma yi furfura sosai. Rubuta 'CI GABA' don matakin gaba." },
      { type: 'user', content: "CI GABA" },
      { type: 'bot', content: "Matakin 3: Goga hannuwa na tsawon dakiku 20 ko fiye. Rubuta 'KAMMALA' don kammala darasi." },
      { type: 'user', content: "KAMMALA" },
      { type: 'bot', content: "Mai kyau! Ka tuna wanke hannuwanka akai-akai don kare lafiyarka." },
    ],
    // Add translations for other languages here
  },
  // Add content for Agribusiness, Technology, and Education categories
};

const Telegram = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const chatRef = useRef(null);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedLanguage(null);
    setCurrentStep(0);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCurrentStep(0);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      const currentContent = content[selectedCategory][selectedLanguage];
      const nextBotMessage = currentContent[currentStep + 1];
      if (nextBotMessage && nextBotMessage.type === 'bot') {
        setCurrentStep(prevStep => prevStep + 2);
      }
      setUserInput('');
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [currentStep]);

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
              {selectedCategory && selectedLanguage && content[selectedCategory] && content[selectedCategory][selectedLanguage] && (
                content[selectedCategory][selectedLanguage].slice(0, currentStep + 1).map((item, index) => (
                  <div key={index} className={`mb-2 ${item.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg ${item.type === 'user' ? 'bg-[#E3F2FD]' : 'bg-white'}`}>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          {selectedCategory && selectedLanguage && (
            <form onSubmit={handleUserInput} className="p-4 bg-white">
              <div className="flex">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                />
                <button
                  type="submit"
                  className="bg-[#0088CC] text-white p-2 rounded-r-md hover:bg-[#006699] focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This demo simulates LinguaLink AI translations on Telegram for {selectedCategory || 'your chosen category'} in {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default Telegram;
