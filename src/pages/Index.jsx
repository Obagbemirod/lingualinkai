import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users, Laptop, Smartphone, MessageCircle, Send, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const navigate = useNavigate();
  const [expandedSector, setExpandedSector] = useState(null);

  const handleTranslateClick = () => {
    navigate('/signup-login', { state: { redirectTo: '/translate' } });
  };

  const handleIconClick = (path) => {
    navigate(path);
  };

  const toggleSector = (sector) => {
    setExpandedSector(expandedSector === sector ? null : sector);
  };

  const sectors = [
    {
      title: "Education & Skills Development",
      content: "Empowering learners with access to quality education in their native languages, fostering skill development and knowledge acquisition."
    },
    {
      title: "Agriculture",
      content: "Enabling farmers producing 80%+ of food in emerging markets to access market information & education on sustainable practices, boosting yield and food security."
    },
    {
      title: "Healthcare",
      content: "Upskilling frontline health workers like Birth Attendants, helping reduce mortality rates during childbirths through accessible training."
    },
    {
      title: "Business & Commerce",
      content: "Empowering SMEs and informal sector players with premium business education in local languages, reducing business failure rates."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244]"
    >
      <header className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-red-500">
          LinguaLink AI
        </h1>
        <nav className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white text-black hover:bg-gray-100">About Us <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem className="text-black"><Link to="/services">Services</Link></DropdownMenuItem>
              <DropdownMenuItem className="text-black"><Link to="/where-we-work">Where we Work</Link></DropdownMenuItem>
              <DropdownMenuItem className="text-black"><Link to="/contact">Contact</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white text-black hover:bg-gray-100">Languages <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              {["Arabic", "French", "Swahili", "Hausa", "Igbo", "Yoruba", "Berber", "Oromo", "Portuguese", "Amharic"].map((lang) => (
                <DropdownMenuItem key={lang} className="text-black"><Link to={`/language/${lang.toLowerCase()}`}>{lang}</Link></DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white text-black hover:bg-gray-100">Integrate <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem className="text-black"><Link to="/telegram">Telegram</Link></DropdownMenuItem>
              <DropdownMenuItem className="text-black"><Link to="/whatsapp">WhatsApp</Link></DropdownMenuItem>
              <DropdownMenuItem className="text-black"><Link to="/lms">LMS</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
            <Link to="/partner">Partner with Us</Link>
          </Button>
          <Link to="/signup-login">
            <Button className="bg-[#FF6B00] text-white hover:bg-[#FF8C00] transition-all duration-300">Login</Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Empowering Millions Through Accessible Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            LinguaLink AI provides real-time translation of educational content into local languages,
            empowering marginalized populations in emerging markets to access knowledge and quality education
            in key sectors like technology, agriculture, health, and commerce.
          </p>
          <Button 
            onClick={handleTranslateClick}
            className="mt-8 bg-[#FF6B00] text-white text-2xl font-extrabold py-6 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#FF8C00] shadow-lg"
          >
            TRANSLATE NOW
          </Button>
        </motion.section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Our Impact Across Sectors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="bg-[#003366] text-white cursor-pointer" onClick={() => toggleSector(index)}>
                <CardHeader>
                  <CardTitle className="text-xl flex justify-between items-center">
                    {sector.title}
                    {expandedSector === index ? <ChevronDown className="h-4 w-4 transform rotate-180" /> : <ChevronDown className="h-4 w-4" />}
                  </CardTitle>
                </CardHeader>
                {expandedSector === index && (
                  <CardContent>
                    <p>{sector.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Why choose LinguaLink AI</h3>
          <p className="text-xl text-center text-gray-300 mb-8">
            We enable users to access translated contents in their native languages and most familiar learning environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: <Laptop className="h-12 w-12 mb-4" />, text: "Translate via web", path: "/translate" },
              { icon: <Smartphone className="h-12 w-12 mb-4" />, text: "Translate on mobile", path: "/translate" },
              { icon: <MessageCircle className="h-12 w-12 mb-4" />, text: "Translate on WhatsApp", path: "/whatsapp" },
              { icon: <Send className="h-12 w-12 mb-4" />, text: "Translate on Telegram", path: "/telegram" },
              { icon: <BookOpen className="h-12 w-12 mb-4" />, text: "Translate via LMS", path: "/signup-login" }
            ].map(({ icon, text, path }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} className="w-full h-full">
                <Button
                  className="w-full h-full flex flex-col items-center justify-center bg-[#003366] hover:bg-[#004080] text-white p-6 group"
                  onClick={() => handleIconClick(path)}
                >
                  {React.cloneElement(icon, { className: `${icon.props.className} group-hover:text-[#FF6B00] transition-colors duration-300` })}
                  <span>{text}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#001833] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;