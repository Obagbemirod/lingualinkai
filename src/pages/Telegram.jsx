import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Apple, Carrot, Bread, Egg, Milk } from 'lucide-react';
import { motion } from "framer-motion";

const Telegram = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);

  const languages = ["English", "French", "Swahili", "Arabic"];
  const healthContent = {
    English: [
      { type: 'text', content: "Welcome to our health education program on Telegram. Today, we'll learn about the importance of a balanced diet." },
      { type: 'text', content: "A balanced diet includes a variety of foods from all food groups: fruits, vegetables, grains, proteins, and dairy." },
      { type: 'icon', content: <Apple className="w-8 h-8 text-red-500" /> },
      { type: 'text', content: "Fruits and vegetables provide essential vitamins, minerals, and fiber. Aim for a colorful plate!" },
      { type: 'icon', content: <Carrot className="w-8 h-8 text-orange-500" /> },
      { type: 'text', content: "Whole grains offer energy and fiber. Choose brown rice, whole wheat bread, and oats over refined grains." },
      { type: 'icon', content: <Bread className="w-8 h-8 text-yellow-700" /> },
      { type: 'text', content: "Proteins are crucial for building and repairing tissues. Include lean meats, fish, beans, or tofu in your meals." },
      { type: 'icon', content: <Egg className="w-8 h-8 text-yellow-200" /> },
      { type: 'text', content: "Dairy products are rich in calcium and vitamin D. If you're lactose intolerant, try fortified plant-based alternatives." },
      { type: 'icon', content: <Milk className="w-8 h-8 text-blue-100" /> },
      { type: 'text', content: "Remember, moderation is key. Enjoy a variety of foods and stay hydrated. A balanced diet leads to better health!" },
      { type: 'infographic', content: "https://example.com/balanced-diet-infographic.jpg" },
    ],
    French: [
      { type: 'text', content: "Bienvenue dans notre programme d'éducation à la santé sur Telegram. Aujourd'hui, nous allons apprendre l'importance d'une alimentation équilibrée." },
      { type: 'text', content: "Une alimentation équilibrée comprend une variété d'aliments de tous les groupes alimentaires : fruits, légumes, céréales, protéines et produits laitiers." },
      { type: 'icon', content: <Apple className="w-8 h-8 text-red-500" /> },
      { type: 'text', content: "Les fruits et légumes fournissent des vitamines, des minéraux et des fibres essentiels. Visez une assiette colorée !" },
      { type: 'icon', content: <Carrot className="w-8 h-8 text-orange-500" /> },
      { type: 'text', content: "Les céréales complètes offrent de l'énergie et des fibres. Choisissez le riz brun, le pain complet et l'avoine plutôt que les céréales raffinées." },
      { type: 'icon', content: <Bread className="w-8 h-8 text-yellow-700" /> },
      { type: 'text', content: "Les protéines sont cruciales pour construire et réparer les tissus. Incluez des viandes maigres, du poisson, des haricots ou du tofu dans vos repas." },
      { type: 'icon', content: <Egg className="w-8 h-8 text-yellow-200" /> },
      { type: 'text', content: "Les produits laitiers sont riches en calcium et en vitamine D. Si vous êtes intolérant au lactose, essayez des alternatives végétales fortifiées." },
      { type: 'icon', content: <Milk className="w-8 h-8 text-blue-100" /> },
      { type: 'text', content: "N'oubliez pas, la modération est la clé. Profitez d'une variété d'aliments et restez hydraté. Une alimentation équilibrée conduit à une meilleure santé !" },
      { type: 'infographic', content: "https://example.com/balanced-diet-infographic.jpg" },
    ],
    Swahili: [
      { type: 'text', content: "Karibu katika programu yetu ya elimu ya afya kwenye Telegram. Leo, tutajifunza umuhimu wa lishe yenye uwiano." },
      { type: 'text', content: "Lishe yenye uwiano inajumuisha vyakula mbalimbali kutoka katika vikundi vyote vya chakula: matunda, mboga, nafaka, protini, na maziwa." },
      { type: 'icon', content: <Apple className="w-8 h-8 text-red-500" /> },
      { type: 'text', content: "Matunda na mboga hutoa vitamini muhimu, madini, na nyuzinyuzi. Lenga sahani yenye rangi nyingi!" },
      { type: 'icon', content: <Carrot className="w-8 h-8 text-orange-500" /> },
      { type: 'text', content: "Nafaka kamili hutoa nishati na nyuzinyuzi. Chagua mchele wa kahawia, mkate wa ngano kamili, na oats badala ya nafaka zilizosafishwa." },
      { type: 'icon', content: <Bread className="w-8 h-8 text-yellow-700" /> },
      { type: 'text', content: "Protini ni muhimu kwa kujenga na kukarabati tishu. Jumuisha nyama nyembamba, samaki, maharagwe, au tofu katika milo yako." },
      { type: 'icon', content: <Egg className="w-8 h-8 text-yellow-200" /> },
      { type: 'text', content: "Bidhaa za maziwa ni tajiri kwa kalsiamu na vitamini D. Ikiwa huwezi kuvumilia laktosi, jaribu mbadala wa mimea iliyoimarishwa." },
      { type: 'icon', content: <Milk className="w-8 h-8 text-blue-100" /> },
      { type: 'text', content: "Kumbuka, kiasi ni muhimu. Furahia vyakula mbalimbali na unywe maji ya kutosha. Lishe yenye uwiano husababisha afya bora!" },
      { type: 'infographic', content: "https://example.com/balanced-diet-infographic.jpg" },
    ],
    Arabic: [
      { type: 'text', content: "مرحبًا بك في برنامجنا التعليمي الصحي على تيليجرام. اليوم، سنتعلم عن أهمية النظام الغذائي المتوازن." },
      { type: 'text', content: "يشمل النظام الغذائي المتوازن مجموعة متنوعة من الأطعمة من جميع المجموعات الغذائية: الفواكه والخضروات والحبوب والبروتينات ومنتجات الألبان." },
      { type: 'icon', content: <Apple className="w-8 h-8 text-red-500" /> },
      { type: 'text', content: "توفر الفواكه والخضروات الفيتامينات والمعادن والألياف الأساسية. اهدف إلى طبق ملون!" },
      { type: 'icon', content: <Carrot className="w-8 h-8 text-orange-500" /> },
      { type: 'text', content: "توفر الحبوب الكاملة الطاقة والألياف. اختر الأرز البني والخبز الأسمر والشوفان بدلاً من الحبوب المكررة." },
      { type: 'icon', content: <Bread className="w-8 h-8 text-yellow-700" /> },
      { type: 'text', content: "البروتينات ضرورية لبناء الأنسجة وإصلاحها. قم بتضمين اللحوم الخالية من الدهون والأسماك والفاصوليا أو التوفو في وجباتك." },
      { type: 'icon', content: <Egg className="w-8 h-8 text-yellow-200" /> },
      { type: 'text', content: "منتجات الألبان غنية بالكالسيوم وفيتامين د. إذا كنت تعاني من عدم تحمل اللاكتوز، جرب البدائل النباتية المدعمة." },
      { type: 'icon', content: <Milk className="w-8 h-8 text-blue-100" /> },
      { type: 'text', content: "تذكر، الاعتدال هو المفتاح. استمتع بمجموعة متنوعة من الأطعمة وحافظ على ترطيب جسمك. النظام الغذائي المتوازن يؤدي إلى صحة أفضل!" },
      { type: 'infographic', content: "https://example.com/balanced-diet-infographic.jpg" },
    ],
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setCurrentStep(1);
  };

  useEffect(() => {
    if (currentStep > 0 && currentStep < healthContent[selectedLanguage].length) {
      const timer = setTimeout(() => {
        setCurrentStep(prevStep => prevStep + 1);
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, selectedLanguage]);

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
              healthContent[selectedLanguage].slice(0, currentStep).map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="bg-white p-3 rounded-lg shadow">
                    {item.type === 'text' && <p>{item.content}</p>}
                    {item.type === 'icon' && <div className="flex justify-center">{item.content}</div>}
                    {item.type === 'infographic' && <img src={item.content} alt="Balanced diet infographic" className="w-full rounded-lg" />}
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
