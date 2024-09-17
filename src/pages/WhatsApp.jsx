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
      { type: 'bot', content: "Welcome to our entrepreneurship course! I'm the LinguaLink AI bot. Let's learn about starting a business." },
      { type: 'user', content: "Great! I'm excited to learn." },
      { type: 'bot', content: "Excellent! Let's start with the basics. What do you think is the first step in starting a business?" },
      { type: 'user', content: "I think it's coming up with a good business idea." },
      { type: 'bot', content: "That's correct! Step 1 is identifying your business idea. It's crucial to find a problem you can solve or a need you can fill in the market." },
      { type: 'user', content: "That makes sense. What's the next step?" },
      { type: 'bot', content: "Great question! Step 2 is conducting market research. This helps you understand your potential customers, competitors, and the overall market landscape." },
      { type: 'user', content: "How do I conduct market research?" },
      { type: 'bot', content: "There are several ways to conduct market research:\n1. Surveys and questionnaires\n2. Focus groups\n3. Analyzing competitors\n4. Studying industry trends\nWhich method interests you the most?" },
      { type: 'user', content: "I think surveys sound interesting. How do I create effective surveys?" },
      { type: 'bot', content: "Excellent choice! Here are some tips for creating effective surveys:\n1. Keep questions clear and concise\n2. Use a mix of multiple choice and open-ended questions\n3. Test your survey before sending it out\n4. Offer an incentive for completion\nWould you like to see a sample survey question?" },
      { type: 'user', content: "Yes, please show me a sample question." },
      { type: 'bot', content: "Here's a sample question:\n'On a scale of 1-5, how likely are you to use a mobile app for grocery shopping?'\n1 - Very unlikely\n2 - Unlikely\n3 - Neutral\n4 - Likely\n5 - Very likely\nThis question helps gauge interest in a potential mobile grocery app." },
      { type: 'user', content: "That's helpful. What comes after market research?" },
      { type: 'bot', content: "After market research, Step 3 is creating a business plan. This document outlines your business strategy, financial projections, and operational details." },
      { type: 'user', content: "What should I include in my business plan?" },
      { type: 'bot', content: "A comprehensive business plan typically includes:\n1. Executive summary\n2. Company description\n3. Market analysis\n4. Organization and management\n5. Service or product line\n6. Marketing and sales strategy\n7. Funding request\n8. Financial projections\nWhich section would you like to explore further?" },
      { type: 'user', content: "Let's talk about the marketing and sales strategy." },
      { type: 'bot', content: "Great choice! The marketing and sales strategy outlines how you'll attract and retain customers. Key components include:\n1. Target market identification\n2. Unique selling proposition (USP)\n3. Pricing strategy\n4. Promotion and advertising plans\n5. Sales process and cycle\nWhich aspect interests you most?" },
      { type: 'user', content: "I'd like to know more about creating a unique selling proposition." },
      { type: 'bot', content: "Excellent! A Unique Selling Proposition (USP) sets your business apart from competitors. To create a strong USP:\n1. Identify your target audience's needs\n2. Analyze your competitors' offerings\n3. Determine what makes your product/service unique\n4. Craft a clear, concise statement\nFor example, a USP could be: 'Organic, farm-to-table meals delivered to your door in 30 minutes or less.'" },
      { type: 'user', content: "That's really helpful. Is there anything else I should know about starting a business?" },
      { type: 'bot', content: "Absolutely! Here are a few more important points:\n1. Secure necessary funding\n2. Choose a business structure (e.g., LLC, corporation)\n3. Register your business and obtain licenses\n4. Set up accounting and financial systems\n5. Build a strong team or network of advisors\nRemember, starting a business is a journey. Stay persistent and keep learning!" },
      { type: 'user', content: "Thank you so much for all this information!" },
      { type: 'bot', content: "You're welcome! I'm glad I could help. Remember, LinguaLink AI is here to support your learning journey in your preferred language. Do you have any final questions about entrepreneurship?" },
      { type: 'user', content: "No, I think I'm good for now. This has been really informative." },
      { type: 'bot', content: "Wonderful! I'm happy to hear that. Don't forget, you can always come back to review this information or explore other topics like Health, Agribusiness, Technology, or Education. Good luck with your entrepreneurial journey!" },
    ],
    Yoruba: [
      { type: 'bot', content: "E kaabo si eko iṣowo wa! Emi ni roboti LinguaLink AI. Ẹ jẹ ki a kọ ẹkọ nipa bibo iṣẹ bẹrẹ." },
      { type: 'user', content: "O dara! Mo ń retí láti kọ́." },
      { type: 'bot', content: "O dara pupo! Ẹ jẹ ki a bẹrẹ pẹlu awọn ipilẹ. Kini o ro pe jẹ igbesẹ akọkọ ni bibẹrẹ iṣowo?" },
      { type: 'user', content: "Mo ro pe o jẹ wiwa ero iṣowo to dara." },
      { type: 'bot', content: "O ṣeun! Igbesẹ 1 ni ṣiṣe idanimọ ero iṣowo rẹ. O ṣe pataki lati wa iṣoro ti o le yanju tabi aini ti o le fún ni ọja." },
      { type: 'user', content: "Eyen ṣe itumọ. Kini igbesẹ tókàn?" },
      { type: 'bot', content: "Ibeere to dara! Igbesẹ 2 jẹ ṣiṣe iwadii ọja. Eyi n ran ọ lọwọ lati ni oye awọn oludokoowo rẹ ti o ṣeeṣe, awọn alatako, ati gbogbo ipo ọja." },
      { type: 'user', content: "Bawo ni mo ṣe le ṣe iwadii ọja?" },
      { type: 'bot', content: "Awọn ọna pupọ wa lati ṣe iwadii ọja:\n1. Awọn iwadii ati ibeere\n2. Awọn ẹgbẹ ifojusi\n3. Ṣiṣayẹwo awọn alatako\n4. Kikẹkọ awọn ipo iṣowo\nEwo ninu awọn ọna yii lo mu ọ lọkan julọ?" },
      { type: 'user', content: "Mo ro pe awọn iwadii dun. Bawo ni mo ṣe le ṣẹda awọn iwadii to munadoko?" },
      { type: 'bot', content: "Aṣayan to dara! Eyi ni awọn imọran fun ṣiṣẹda awọn iwadii to munadoko:\n1. Jẹ ki awọn ibeere rọrun ati kukuru\n2. Lo afiwe awọn ibeere aṣayan ati awọn ibeere gbangba\n3. Dan iwadii rẹ wo ṣaaju ki o to fi ranṣẹ\n4. Pese ere fun pipe\nṢe o fẹ ri apẹẹrẹ ibeere iwadii kan?" },
      { type: 'user', content: "Bẹẹni, jọwọ fi apẹẹrẹ ibeere kan han mi." },
      { type: 'bot', content: "Eyi ni apẹẹrẹ ibeere kan:\n'Lori iwọn 1-5, bawo ni o ṣe ṣeeṣe fun ọ lati lo apo ẹrọ fun rira nkan ounjẹ?'\n1 - Ko ṣeeṣe rara\n2 - Ko ṣeeṣe\n3 - Aaarin\n4 - O ṣeeṣe\n5 - O ṣeeṣe pupọ\nIbeere yii n ran ni lọwọ lati wọn ifẹ ninu apo ẹrọ rira nkan ounjẹ ti o ṣeeṣe." },
      { type: 'user', content: "Eyen ṣe iranlọwọ. Kini n bọ lẹyin iwadii ọja?" },
      { type: 'bot', content: "Lẹyin iwadii ọja, Igbesẹ 3 ni ṣiṣẹda eto iṣowo. Iwe yii ṣalaye eto iṣowo rẹ, awọn asọtẹlẹ owo, ati awọn alaye iṣẹ." },
      { type: 'user', content: "Kini mo yẹ lati fi sinu eto iṣowo mi?" },
      { type: 'bot', content: "Eto iṣowo to peye nigbagbogbo ni awọn nkan wọnyi:\n1. Akotan aṣoju\n2. Apejuwe ile-iṣẹ\n3. Itupale ọja\n4. Eto-ṣiṣe ati iṣakoso\n5. Ila ọja tabi iṣẹ\n6. Eto ipolowo ati tita\n7. Ibeere owo-idogo\n8. Awọn asọtẹlẹ owo\nEwo ninu awọn apakan yii lo fẹ ṣawari sii?" },
      { type: 'user', content: "Ẹ jẹ ki a sọrọ nipa eto ipolowo ati tita." },
      { type: 'bot', content: "Aṣayan to dara! Eto ipolowo ati tita ṣalaye bi o ṣe le fa ati mu awọn oludokoowo duro. Awọn ẹya pataki ni:\n1. Idanimọ ọja afojusi\n2. Ojutaye tita ọtọ (USP)\n3. Eto iye owo\n4. Awọn eto ipolowo ati iṣẹ-afihan\n5. Ilana tita ati ayika\nEwo ninu awọn ẹya yii lo mu ọ lọkan julọ?" },
      { type: 'user', content: "Mo fẹ mọ diẹ sii nipa ṣiṣẹda ojutaye tita ọtọ." },
      { type: 'bot', content: "O dara! Ojutaye Tita Ọtọ (USP) n ya iṣowo rẹ sọtọ lati ọdọ awọn alatako. Lati ṣẹda USP to lagbara:\n1. Ṣe idanimọ awọn aini awọn onibaara afojusi rẹ\n2. Ṣe itupalẹ ohun ti awọn alatako rẹ n pese\n3. Pinnu ohun ti o jẹ ki ọja/iṣẹ rẹ yatọ\n4. Ṣẹda gbolohun to rorun, to si kukuru\nFun apẹẹrẹ, USP le jẹ: 'Ounjẹ organiki, lati oko si tabili ti a fi ranṣẹ si enu-ọna rẹ laarin iṣẹju 30 tabi kere.'" },
      { type: 'user', content: "Eyen ṣe iranlọwọ gan. Ṣe ohunkohun mii wa ti mo yẹ lati mọ nipa bibẹrẹ iṣowo?" },
      { type: 'bot', content: "Dajudaju! Eyi ni diẹ ninu awọn ọrọ pataki mii:\n1. Ri owo-idogo to yẹ\n2. Yan eto iṣowo (fun apẹẹrẹ, LLC, ile-iṣẹ)\n3. Forukọsilẹ iṣowo rẹ ki o si gba awọn iwe-aṣẹ\n4. Ṣeto awọn eto iṣiro-owo ati owo\n5. Kọ ẹgbẹ to lagbara tabi nẹtiwọọki ti awọn amojan\nRanti, bibẹrẹ iṣowo jẹ irin-ajo. Ṣe onigboya ki o si tẹsiwaju lati kọ ẹkọ!" },
      { type: 'user', content: "O ṣeun pupọ fun gbogbo alaye yii!" },
      { type: 'bot', content: "O ṣeun! Mo dun pe mo le ṣe iranlọwọ. Ranti, LinguaLink AI wa nibi lati ṣe atilẹyin fun irin-ajo ẹkọ rẹ ni ede ti o fẹran. Ṣe o ni awọn ibeere ikẹhin nipa iṣowo?" },
      { type: 'user', content: "Rara, mo ro pe mo ti ni ọpọlọpọ alaye bayi. Eyi ti ṣe alaye to peye." },
      { type: 'bot', content: "O dara! Mo dun lati gbọ iyẹn. Maṣe gbagbe, o le pada wa nigbakugba lati tun wo alaye yii tabi ṣawari awọn ọrọ miran bii Ilera, Iṣowo-agbe, Imọ-ẹrọ, tabi Ẹkọ. Orire fun irin-ajo iṣowo rẹ!" },
    ],
    // Add translations for other languages here
  },
  // Add content for Health, Agribusiness, Technology, and Education categories
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
    if (selectedCategory && selectedLanguage && content[selectedCategory] && content[selectedCategory][selectedLanguage]) {
      const currentContent = content[selectedCategory][selectedLanguage];
      if (currentStep < currentContent.length) {
        timer = setTimeout(() => {
          setCurrentStep(prevStep => prevStep + 1);
        }, 2000); // Adjust the delay as needed
      }
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
