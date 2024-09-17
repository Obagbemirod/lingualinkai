import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ChevronLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const categories = ["Entrepreneurship", "Health", "Agribusiness", "Technology", "Education"];
const languages = ["English", "Hausa", "Yoruba", "Igbo", "Swahili", "Berber", "Oromo", "Amharic", "Afrikaans"];

const content = {
  Entrepreneurship: {
    English: [
      { type: 'bot', content: "Welcome to our entrepreneurship course! Let's learn about starting a business." },
      { type: 'bot', content: "Step 1: Identify your business idea." },
      { type: 'bot', content: "Step 2: Conduct market research." },
      { type: 'bot', content: "Step 3: Create a business plan." },
      { type: 'bot', content: "Congratulations on completing the entrepreneurship basics! Good luck with your business venture!" },
    ],
    Yoruba: [
      { type: 'bot', content: "E kaabo si eko iṣowo wa! Ẹ jẹ ki a kọ ẹkọ nipa bibo iṣẹ bẹrẹ." },
      { type: 'bot', content: "Igbesẹ 1: Ṣe idanimọ ero iṣowo rẹ." },
      { type: 'bot', content: "Igbesẹ 2: Ṣe iwadii oja." },
      { type: 'bot', content: "Igbesẹ 3: Ṣẹda eto iṣowo." },
      { type: 'bot', content: "O ku oriire fun pipe awọn ipilẹ iṣowo! Orire fun iṣowo rẹ!" },
    ],
    Hausa: [
      { type: 'bot', content: "Barka da zuwa ga darasin kasuwanci! Bari mu koya game da farawa da sana'a." },
      { type: 'bot', content: "Matakin 1: Gano tunanin kasuwancin ku." },
      { type: 'bot', content: "Matakin 2: Yi binciken kasuwa." },
      { type: 'bot', content: "Matakin 3: Ƙirƙiri shirin kasuwanci." },
      { type: 'bot', content: "Taya murna da kammala tushen kasuwanci! Nasara ga kasuwancin ku!" },
    ],
    // Add translations for other languages here
  },
  Health: {
    English: [
      { type: 'bot', content: "Welcome to our health education program! Let's learn about proper handwashing." },
      { type: 'bot', content: "Step 1: Wet your hands with clean water." },
      { type: 'bot', content: "Step 2: Apply soap and lather well." },
      { type: 'bot', content: "Step 3: Scrub hands for at least 20 seconds." },
      { type: 'bot', content: "Excellent! Remember to wash your hands regularly to stay healthy." },
    ],
    Swahili: [
      { type: 'bot', content: "Karibu katika programu yetu ya elimu ya afya! Tujifunze kuhusu kunawa mikono vizuri." },
      { type: 'bot', content: "Hatua ya 1: Lowesha mikono yako kwa maji safi." },
      { type: 'bot', content: "Hatua ya 2: Weka sabuni na piga povu vizuri." },
      { type: 'bot', content: "Hatua ya 3: Sugua mikono kwa sekunde 20 au zaidi." },
      { type: 'bot', content: "Vizuri sana! Kumbuka kunawa mikono mara kwa mara ili kudumisha afya." },
    ],
    Igbo: [
      { type: 'bot', content: "Nno na mmemme ọzụzụ ahụike anyị! Ka anyị mụta banyere ịsa aka nke ọma." },
      { type: 'bot', content: "Nzọụkwụ 1: Mee ka aka gị dị mmiri site na mmiri dị ọcha." },
      { type: 'bot', content: "Nzọụkwụ 2: Tinye ncha ma sachaa nke ọma." },
      { type: 'bot', content: "Nzọụkwụ 3: Kpochaa aka ruo opekata mpe sekọnd 20." },
      { type: 'bot', content: "Ọ dị mma! Cheta ịsa aka gị oge niile iji nọgide na ahụike." },
    ],
    // Add translations for other languages here
  },
  // Add content for Agribusiness, Technology, and Education categories
};

const WhatsApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
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

  useEffect(() => {
    let timer;
    if (selectedCategory && selectedLanguage && currentStep < content[selectedCategory][selectedLanguage].length) {
      timer = setTimeout(() => {
        setCurrentStep(prevStep => prevStep + 1);
      }, 2000); // Adjust the delay as needed
    }
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedLanguage, currentStep]);

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
                content[selectedCategory][selectedLanguage].slice(0, currentStep).map((item, index) => (
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
