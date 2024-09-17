import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ChevronLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const categories = ["Health", "Entrepreneurship"];
const languages = ["English", "French", "Swahili"];

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
    French: [
      { type: 'bot', content: "Bienvenue dans notre programme d'éducation à la santé ! Apprenons le lavage des mains. Appuyez sur 1 pour continuer." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Parfait ! Étape 1 : Mouillez-vous les mains avec de l'eau propre. Tapez 'SUIVANT' pour continuer." },
      { type: 'user', content: "SUIVANT" },
      { type: 'bot', content: "Étape 2 : Appliquez du savon et faites mousser. Tapez 'CONTINUER' pour l'étape suivante." },
      { type: 'user', content: "CONTINUER" },
      { type: 'bot', content: "Étape 3 : Frottez-vous les mains pendant au moins 20 secondes. Tapez 'SUITE' pour continuer." },
      { type: 'user', content: "SUITE" },
      { type: 'bot', content: "Étape 4 : Rincez-vous soigneusement les mains. Tapez 'TERMINER' pour la dernière étape." },
      { type: 'user', content: "TERMINER" },
      { type: 'bot', content: "Étape 5 : Séchez-vous les mains avec une serviette propre. Bravo ! Vous avez appris à bien vous laver les mains. Tapez 'QUIZ' pour un test rapide." },
      { type: 'user', content: "QUIZ" },
      { type: 'bot', content: "Quiz : Combien de temps devez-vous vous frotter les mains ? A) 5 secondes B) 10 secondes C) 20 secondes" },
      { type: 'user', content: "C" },
      { type: 'bot', content: "Correct ! N'oubliez pas de vous laver régulièrement les mains pour rester en bonne santé. Tapez 'FIN' pour terminer." },
      { type: 'user', content: "FIN" },
      { type: 'bot', content: "Merci d'avoir appris avec nous ! Restez en bonne santé !" },
    ],
    Swahili: [
      { type: 'bot', content: "Karibu katika programu yetu ya elimu ya afya! Tujifunze kuhusu kunawa mikono vizuri. Bonyeza 1 kuendelea." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Vizuri! Hatua ya 1: Lowesha mikono yako kwa maji safi. Andika 'ENDELEA' kuendelea." },
      { type: 'user', content: "ENDELEA" },
      { type: 'bot', content: "Hatua ya 2: Weka sabuni na piga povu vizuri. Andika 'ENDELEA' kwa hatua inayofuata." },
      { type: 'user', content: "ENDELEA" },
      { type: 'bot', content: "Hatua ya 3: Sugua mikono kwa sekunde 20 au zaidi. Andika 'ENDELEA' kuendelea." },
      { type: 'user', content: "ENDELEA" },
      { type: 'bot', content: "Hatua ya 4: Suuza mikono vizuri. Andika 'MALIZA' kwa hatua ya mwisho." },
      { type: 'user', content: "MALIZA" },
      { type: 'bot', content: "Hatua ya 5: Kausha mikono kwa kitambaa safi. Hongera! Umejifunza kunawa mikono vizuri. Andika 'JARIBIO' kwa mtihani mfupi." },
      { type: 'user', content: "JARIBIO" },
      { type: 'bot', content: "Jaribio: Unapaswa kusugua mikono yako kwa muda gani? A) Sekunde 5 B) Sekunde 10 C) Sekunde 20" },
      { type: 'user', content: "C" },
      { type: 'bot', content: "Sahihi! Kumbuka kunawa mikono mara kwa mara ili kudumisha afya. Andika 'MWISHO' kumaliza." },
      { type: 'user', content: "MWISHO" },
      { type: 'bot', content: "Asante kwa kujifunza nasi! Dumisha afya yako!" },
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
    French: [
      { type: 'bot', content: "Bienvenue dans notre cours d'entrepreneuriat ! Apprenons à démarrer une entreprise. Appuyez sur 1 pour commencer." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Excellent ! Étape 1 : Identifiez votre idée d'entreprise. Tapez 'SUIVANT' quand vous êtes prêt à continuer." },
      { type: 'user', content: "SUIVANT" },
      { type: 'bot', content: "Étape 2 : Effectuez une étude de marché. Tapez 'CONTINUER' pour l'étape suivante." },
      { type: 'user', content: "CONTINUER" },
      { type: 'bot', content: "Étape 3 : Créez un plan d'affaires. Tapez 'PLUS' pour en savoir plus sur les plans d'affaires." },
      { type: 'user', content: "PLUS" },
      { type: 'bot', content: "Un plan d'affaires décrit vos objectifs, stratégies et projections financières. Tapez 'SUIVANT' pour continuer." },
      { type: 'user', content: "SUIVANT" },
      { type: 'bot', content: "Étape 4 : Obtenez un financement. Tapez 'OPTIONS' pour connaître les options de financement." },
      { type: 'user', content: "OPTIONS" },
      { type: 'bot', content: "Les options de financement incluent les prêts, les investisseurs et le financement participatif. Tapez 'TERMINER' pour la dernière étape." },
      { type: 'user', content: "TERMINER" },
      { type: 'bot', content: "Étape 5 : Lancez votre entreprise ! Tapez 'QUIZ' pour une révision rapide." },
      { type: 'user', content: "QUIZ" },
      { type: 'bot', content: "Quiz : Que devez-vous créer avant de chercher un financement ? A) Site web B) Plan d'affaires C) Produit" },
      { type: 'user', content: "B" },
      { type: 'bot', content: "Correct ! Un plan d'affaires est crucial pour obtenir un financement. Tapez 'FIN' pour terminer la leçon." },
      { type: 'user', content: "FIN" },
      { type: 'bot', content: "Félicitations pour avoir terminé les bases de l'entrepreneuriat ! Bonne chance pour votre projet d'entreprise !" },
    ],
    Swahili: [
      { type: 'bot', content: "Karibu katika kozi yetu ya ujasiriamali! Tujifunze kuhusu kuanzisha biashara. Bonyeza 1 kuanza." },
      { type: 'user', content: "1" },
      { type: 'bot', content: "Vizuri! Hatua ya 1: Tambua wazo lako la biashara. Andika 'ENDELEA' unapokuwa tayari kuendelea." },
      { type: 'user', content: "ENDELEA" },
      { type: 'bot', content: "Hatua ya 2: Fanya utafiti wa soko. Andika 'ENDELEA' kwa hatua inayofuata." },
      { type: 'user', content: "ENDELEA" },
      { type: 'bot', content: "Hatua ya 3: Tengeneza mpango wa biashara. Andika 'ZAIDI' kujifunza zaidi kuhusu mipango ya biashara." },
      { type: 'user', content: "ZAIDI" },
      { type: 'bot', content: "Mpango wa biashara unaelezea malengo yako, mikakati, na matarajio ya kifedha. Andika 'ENDELEA' kuendelea." },
      { type: 'user', content: "ENDELEA" },
      { type: 'bot', content: "Hatua ya 4: Pata ufadhili. Andika 'CHAGUO' kujifunza kuhusu chaguo za ufadhili." },
      { type: 'user', content: "CHAGUO" },
      { type: 'bot', content: "Chaguo za ufadhili ni pamoja na mikopo, wawekezaji, na uchangiaji wa umma. Andika 'MALIZA' kwa hatua ya mwisho." },
      { type: 'user', content: "MALIZA" },
      { type: 'bot', content: "Hatua ya 5: Zindua biashara yako! Andika 'JARIBIO' kwa mapitio ya haraka." },
      { type: 'user', content: "JARIBIO" },
      { type: 'bot', content: "Jaribio: Unapaswa kutengeneza nini kabla ya kutafuta ufadhili? A) Tovuti B) Mpango wa Biashara C) Bidhaa" },
      { type: 'user', content: "B" },
      { type: 'bot', content: "Sahihi! Mpango wa biashara ni muhimu sana kwa kupata ufadhili. Andika 'MWISHO' kumaliza somo." },
      { type: 'user', content: "MWISHO" },
      { type: 'bot', content: "Hongera kwa kukamilisha msingi wa ujasiriamali! Kila la heri katika mradi wako wa biashara!" },
    ],
  },
};

const WhatsApp = () => {
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
          {selectedCategory && selectedLanguage && (
            <form onSubmit={handleUserInput} className="p-4 bg-white">
              <div className="flex">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#128C7E]"
                />
                <button
                  type="submit"
                  className="bg-[#25D366] text-white p-2 rounded-r-md hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#128C7E]"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This demo simulates LinguaLink AI translations on WhatsApp for {selectedCategory || 'your chosen category'} in {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default WhatsApp;
