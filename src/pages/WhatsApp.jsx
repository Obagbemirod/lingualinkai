import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Droplet, Smile, AlertCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';

const WhatsApp = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef(null);
  const navigate = useNavigate();

  const languages = ["English", "French", "Hausa", "Yoruba", "Igbo", "Swahili", "Berber", "Oromo", "Amharic", "Afrikaans"];
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
    Hausa: [
      { type: 'text', content: "Sannu! Barka da zuwa ga shirin ilimin lafiyarmu. Bari mu koya dabarun wanke hannu yadda ya kamata." },
      { type: 'text', content: "Matakin 1: Jika hannuwanku da ruwan da yake gudana (mai zafi ko sanyi), kashe famfo, sa sabulu." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Matakin 2: Shafa sabulu a hannuwanku ta hanyar goga su tare. Tabbatar kun shafa sabulu a bayan hannuwanku, tsakanin yatsunku, da karkashin farcenku." },
      { type: 'text', content: "Matakin 3: Goga hannuwanku na tsawon dakika 20 ko fiye. Kuna bukata na lokaci? Rera wakar 'Happy Birthday' sau biyu daga farko zuwa karshe." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Matakin 4: Wanke hannuwanku sosai a karkashin ruwan da yake gudana." },
      { type: 'text', content: "Matakin 5: Goge hannuwanku da tawul mai tsabta ko barsu su bushe a iska." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Madalla! Kun koya dabarun wanke hannu yadda ya kamata. Wannan aiki mai sauki na iya hana cututtuka da yawa. Ku kula da lafiyarku!" },
    ],
    Yoruba: [
      { type: 'text', content: "Pẹlẹ o! E kaabo si eto ẹkọ ilera wa. Ẹ jẹ ki a kọ ọ ni awọn ọna ti o tọ lati fọ ọwọ." },
      { type: 'text', content: "Igbesẹ 1: Fi omi tó ńṣàn (tútù tàbí gbígbóná) rin ọwọ rẹ, pa robinet ná, ki o si fi ọṣẹ si ọwọ rẹ." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Igbesẹ 2: Fi ọṣẹ ọwọ rẹ pọ nipa fifọ wọn papọ. Rii daju pe o fi ọṣẹ si ẹhin ọwọ rẹ, laarin ika rẹ, ati labẹ eekanna rẹ." },
      { type: 'text', content: "Igbesẹ 3: Fọ ọwọ rẹ fun iṣẹju 20 si i. Nilo aṣiko? Kọrin 'Happy Birthday' lẹẹmeji lati ibẹrẹ si opin." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Igbesẹ 4: San ọwọ rẹ daradara labẹ omi tó ńṣàn." },
      { type: 'text', content: "Igbesẹ 5: Fi towel mímọ́ nu ọwọ rẹ tabi jẹ ki wọn gbẹ funra wọn." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Iṣẹ to dara! O ti kọ ọna ti o tọ lati fọ ọwọ. Iṣe kekere yii le dena ọpọlọpọ arun. E maa tọju ara yin o!" },
    ],
    Igbo: [
      { type: 'text', content: "Ndewo! Nnọọ na mmemme ọzụzụ ahụike anyị. Ka anyị mụta usoro ziri ezi iji sachaa aka." },
      { type: 'text', content: "Nzọụkwụ 1: Mee ka aka gị dị mmiri site na mmiri na-agba agba (dị ọkụ ma ọ bụ jụụ), mechie ogwe mmiri ahụ, tinye ncha." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Nzọụkwụ 2: Kpakọrịta aka gị ọnụ jiri ncha ahụ. Jide n'aka na ị tinyere ncha n'azụ aka gị, n'etiti mkpisi aka gị, na n'okpuru ákwà aka gị." },
      { type: 'text', content: "Nzọụkwụ 3: Kpakọrịta aka gị ruo opekata mpe sekọnd 20. Chọrọ ihe mgbake oge? Bụọ abụ 'Happy Birthday' ugboro abụọ site na mmalite ruo ọgwụgwụ." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Nzọụkwụ 4: Kwọọ aka gị nke ọma n'okpuru mmiri na-agba agba dị ọcha." },
      { type: 'text', content: "Nzọụkwụ 5: Ji akwa dị ọcha kpọchapu aka gị ma ọ bụ hapụ ya ka ọ kpọọ n'elu." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Ọrụ ọma! Ị mụtala usoro ziri ezi iji sachaa aka. Omume dị mfe a nwere ike igbochi ọtụtụ ọrịa. Nọgide na-elekọta ahụ ike gị!" },
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
    Berber: [
      { type: 'text', content: "Azul! Anṣuf yis ɣer useɣwen nneɣ n uselmed n tdawsa. Ejj-aneɣ ad nesselmad tiytiwin n usired ifassen s wudem igerrzen." },
      { type: 'text', content: "Amecwaṛ 1: Sired ifassen inek s waman izdigen iḥemmlen (yeḥman neɣ isemmaḍen), ḥbes aman, sers ṣṣabun." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Amecwaṛ 2: Frec ifassen inek s ṣṣabun. Ḍmen belli tferced ṣṣabun ɣef weɛrur n ifassen inek, jar iḍuḍan inek, d seddaw icenfiṛen inek." },
      { type: 'text', content: "Amecwaṛ 3: Frec ifassen inek i 20 n tsinin neɣ ugar. Teḥwajed akudar? Ɣennej taɣuct n 'Amulli Ameggaz' sin n tikkal seg tazwara ar tagara." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Amecwaṛ 4: Sired ifassen inek akken iwata seddaw waman izdigen iḥemmlen." },
      { type: 'text', content: "Amecwaṛ 5: Ẓemm ifassen inek s yict n teḥnuct tamezdagt neɣ ejj-iten ad qquren i yiman-nsen." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Axeddim yelhan! Tlemded tiytiwin igerrzen n usired n ifassen. Tigawt-a tafessast tezmer ad tessiggez aṭas n waṭṭanen. Qqim di tdawsa!" },
    ],
    Oromo: [
      { type: 'text', content: "Akkam! Sagantaa barnoota fayyaa keenyatti baga nagaan dhuftan. Mala harka dhiqannaa sirrii haa barannuu." },
      { type: 'text', content: "Tartiiba 1: Harka keessan bishaan qulqulluu (ho'aa ykn qorraa) jalatti jigsaa, ujummoo bishanii cufsaa, saamunaa itti naqaa." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Tartiiba 2: Harka keessan saamunaan walitti sukkuumaa. Dugda harkaa, quba jidduu fi quba jala saamunaan dhiqachuu keessan mirkaneeffadhaa." },
      { type: 'text', content: "Tartiiba 3: Harka keessan sekondii 20 ol sukkuumaa. Sa'aatii barbaadduu? Sirba 'Dhalootaaf Eebbaa' lama jalqabaa hanga dhumaatti sirbi." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Tartiiba 4: Harka keessan bishaan qulqulluu jalatti sirriitti dhiqadhaa." },
      { type: 'text', content: "Tartiiba 5: Harka keessan huccuu qulqulluun gogaa ykn ofiin akka goguu dhiisaa." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Hojii gaarii! Mala harka dhiqannaa sirrii barattaniittu. Gocha salphaa kun dhukkuba hedduu ittisuuf ni danda'a. Fayyaa keessan eeggadhaa!" },
    ],
    Amharic: [
      { type: 'text', content: "ሰላም! ወደ የጤና ትምህርት ፕሮግራማችን እንኳን ደህና መጡ። ትክክለኛውን የእጅ መታጠቢያ ዘዴ እንማር።" },
      { type: 'text', content: "ደረጃ 1፡ እጆችዎን በንጹህ ፈሳሽ ውሃ (ሞቃት ወይም ቀዝቃዛ) ያርطቡ፣ ቧንቧውን ይዝጉ እና ሳሙና ይጨምሩ።" },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "ደረጃ 2፡ እጆችዎን በሳሙና በማሸት አብረው ይቀቅሉ። የእጅዎን ጀርባ፣ የጣቶችዎን መካከል እና ከጥፍርዎ በታች ሳሙና መቀባትዎን ያረጋግጡ።" },
      { type: 'text', content: "ደረጃ 3፡ እጆችዎን ለ20 ሰከንዶች ያህል ይቀቅሉ። የጊዜ ቆጣሪ ይፈልጋሉ? የ'ልደት እንኳን ደስ ያለህ' ዘፈን ሁለት ጊዜ ከመጀመሪያ እስከ መጨረሻ ይዘምሩ።" },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "ደረጃ 4፡ እጆችዎን በንጹህ ፈሳሽ ውሃ ስር በደንብ ያጥቡ።" },
      { type: 'text', content: "ደረጃ 5፡ እጆችዎን በንጹህ ፎጣ ይጠቡ ወይም በአየር ላይ እንዲደርቁ ይተዉ።" },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "ጥሩ ስራ! ትክክለኛውን የእጅ መታጠቢያ ዘዴ ተምረዋል። ይህ ቀላል ድርጊት ብዙ በሽታዎችን ሊከላከል ይችላል። ጤናማ ሆነው ይቆዩ!" },
    ],
    Afrikaans: [
      { type: 'text', content: "Hallo! Welkom by ons gesondheidopvoedingsprogram. Kom ons leer oor die regte handwastegnieke." },
      { type: 'text', content: "Stap 1: Maak jou hande nat met skoon, lopende water (warm of koud), draai die kraan toe, en gebruik seep." },
      { type: 'icon', content: <Droplet className="w-8 h-8 text-blue-500" /> },
      { type: 'text', content: "Stap 2: Skuim jou hande op deur hulle saam met die seep te vryf. Maak seker jy seep die agterkant van jou hande, tussen jou vingers, en onder jou naels." },
      { type: 'text', content: "Stap 3: Skrop jou hande vir ten minste 20 sekondes. Het jy 'n tydhouer nodig? Neurie die 'Veels Geluk'-liedjie twee keer van begin tot einde." },
      { type: 'icon', content: <Smile className="w-8 h-8 text-yellow-500" /> },
      { type: 'text', content: "Stap 4: Spoel jou hande goed af onder skoon, lopende water." },
      { type: 'text', content: "Stap 5: Droog jou hande af met 'n skoon handdoek of laat hulle in die lug droog word." },
      { type: 'icon', content: <AlertCircle className="w-8 h-8 text-green-500" /> },
      { type: 'text', content: "Goeie werk! Jy het die regte handwastegniek geleer. Hierdie eenvoudige handeling kan baie siektes voorkom. Bly gesond!" },
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
    if (selectedLanguage) {
      setSelectedLanguage(null);
      setCurrentStep(0);
    } else {
      navigate('/');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#ECE5DD] p-8"
    >
      <div className="flex justify-between mb-4">
        <Button variant="outline" onClick={handleBack}>
          {selectedLanguage ? 'Back' : 'Home'}
        </Button>
        {selectedLanguage && (
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
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
