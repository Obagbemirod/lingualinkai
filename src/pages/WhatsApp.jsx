import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Droplet, Smile, AlertCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const WhatsApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);

  const languages = ["English", "French", "Swahili", "Arabic"];
  const healthContent = {
    English: [
      { type: 'text', content: "Hello! Welcome to our health education program. Let's learn about proper handwashing techniques." },
      { type: 'text', content: "Step 1: Wet your hands with clean, running water (warm or cold), turn off the tap, and apply soap." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Step 2: Lather your hands by rubbing them together with the soap. Be sure to lather the backs of your hands, between your fingers, and under your nails." },
      { type: 'text', content: "Step 3: Scrub your hands for at least 20 seconds. Need a timer? Hum the 'Happy Birthday' song from beginning to end twice." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Step 4: Rinse your hands well under clean, running water." },
      { type: 'text', content: "Step 5: Dry your hands using a clean towel or air dry them." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Great job! You've learned the proper handwashing technique. This simple act can prevent many diseases. Stay healthy!" },
    ],
    French: [
      { type: 'text', content: "Bonjour ! Bienvenue dans notre programme d'éducation à la santé. Apprenons les techniques de lavage des mains." },
      { type: 'text', content: "Étape 1 : Mouillez-vous les mains avec de l'eau propre (chaude ou froide), fermez le robinet et appliquez du savon." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Étape 2 : Frottez-vous les mains en les frottant ensemble avec le savon. Assurez-vous de bien frotter le dos des mains, entre les doigts et sous les ongles." },
      { type: 'text', content: "Étape 3 : Frottez-vous les mains pendant au moins 20 secondes. Besoin d'un minuteur ? Chantez 'Joyeux Anniversaire' deux fois." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Étape 4 : Rincez-vous bien les mains à l'eau courante propre." },
      { type: 'text', content: "Étape 5 : Séchez-vous les mains avec une serviette propre ou laissez-les sécher à l'air libre." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Excellent travail ! Vous avez appris la technique appropriée de lavage des mains. Ce simple geste peut prévenir de nombreuses maladies. Restez en bonne santé !" },
    ],
    Swahili: [
      { type: 'text', content: "Hujambo! Karibu katika programu yetu ya elimu ya afya. Hebu tujifunze mbinu sahihi za kunawa mikono." },
      { type: 'text', content: "Hatua ya 1: Lowesha mikono yako kwa maji safi yanayotiririka (ya joto au baridi), zima mfereji, na weka sabuni." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Hatua ya 2: Paka sabuni mikono yako kwa kuyasugua pamoja. Hakikisha umepaka sabuni nyuma ya mikono yako, kati ya vidole, na chini ya kucha." },
      { type: 'text', content: "Hatua ya 3: Sugua mikono yako kwa sekunde 20 au zaidi. Unahitaji kipima muda? Imba wimbo wa 'Hongera' mara mbili kutoka mwanzo hadi mwisho." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Hatua ya 4: Suuza mikono yako vizuri chini ya maji safi yanayotiririka." },
      { type: 'text', content: "Hatua ya 5: Kausha mikono yako kwa kutumia taulo safi au yaacha yakauke yenyewe." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Kazi nzuri! Umejifunza mbinu sahihi ya kunawa mikono. Kitendo hiki rahisi kinaweza kuzuia magonjwa mengi. Kaa na afya njema!" },
    ],
    Arabic: [
      { type: 'text', content: "مرحبًا! أهلاً بك في برنامجنا التعليمي الصحي. دعنا نتعلم تقنيات غسل اليدين الصحيحة." },
      { type: 'text', content: "الخطوة 1: بلل يديك بالماء النظيف الجاري (الدافئ أو البارد)، أغلق الصنبور، وضع الصابون." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "الخطوة 2: قم بتصبين يديك عن طريق فركهما معًا بالصابون. تأكد من تصبين ظهر يديك، وبين أصابعك، وتحت أظافرك." },
      { type: 'text', content: "الخطوة 3: افرك يديك لمدة 20 ثانية على الأقل. تحتاج إلى مؤقت؟ قم بترديد أغنية 'عيد ميلاد سعيد' من البداية إلى النهاية مرتين." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "الخطوة 4: اشطف يديك جيدًا تحت الماء النظيف الجاري." },
      { type: 'text', content: "الخطوة 5: جفف يديك باستخدام منشفة نظيفة أو اتركهما ليجفا في الهواء." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "عمل رائع! لقد تعلمت تقنية غسل اليدين الصحيحة. هذا الفعل البسيط يمكن أن يمنع العديد من الأمراض. حافظ على صحتك!" },
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

  const handleBack = () => {
    setSelectedLanguage(null);
    setCurrentStep(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#ECE5DD] p-8"
    >
      <div className="flex justify-between mb-4">
        <Link to="/">
          <Button variant="outline">Home</Button>
        </Link>
        {selectedLanguage && (
          <Button variant="outline" onClick={handleBack}>Back</Button>
        )}
      </div>
      <Card className="max-w-md mx-auto bg-[#E4DDD5] shadow-xl">
        <CardHeader className="bg-[#075E54] text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <MessageCircle className="mr-2" /> LinguaLink AI on WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-[#E2DDD5] p-4 h-[500px] overflow-y-auto" ref={chatRef}>
            {currentStep === 0 ? (
              <div className="bg-white rounded-lg shadow p-3 mb-2">
                <p className="mb-4">Hello, select your preferred language:</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <Button key={lang} onClick={() => handleLanguageSelect(lang)} className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              healthContent[selectedLanguage].slice(0, currentStep).map((item, index) => (
                <div key={index} className={`mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg ${index % 2 === 0 ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
                    {item.type === 'text' && <p>{item.content}</p>}
                    {item.type === 'icon' && item.content}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-600 mt-4 text-center">
        This is a demo of how LinguaLink AI translates content on WhatsApp. In a real scenario, all content would be instantly translated to {selectedLanguage || 'your chosen language'}.
      </p>
    </motion.div>
  );
};

export default WhatsApp;
