import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users, Laptop, Smartphone, MessageCircle, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { NavBar } from '../components/NavBar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  const navigate = useNavigate();

  const handleTranslateClick = () => {
    navigate('/signup-login');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244]"
    >
      <header className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">LinguaLink AI</h1>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-[#003366] transition-all duration-300">About Us</Button>
          <Button variant="ghost" className="text-white hover:bg-[#003366] transition-all duration-300">Partner with Us</Button>
          <Link to="/signup-login">
            <Button className="bg-[#FF6B00] text-white hover:bg-[#FF8C00] transition-all duration-300">Signup/Login</Button>
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
            className="mt-8 bg-[#FF6B00] text-white text-2xl font-extrabold py-6 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#FF8C00] shadow-lg animate-[slow-pulse_3s_ease-in-out_infinite]"
          >
            TRANSLATE NOW
          </Button>
        </motion.section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Our Impact Across Sectors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-[#003366] text-white cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl">Education & Skills Development</CardTitle>
                    </CardHeader>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Empowering learners with access to quality education in their native languages, fostering skill development and knowledge acquisition.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-[#003366] text-white cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl">Agriculture</CardTitle>
                    </CardHeader>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Enabling farmers producing 80%+ of food in emerging markets to access market information & education on sustainable practices, boosting yield and food security.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-[#003366] text-white cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl">Healthcare</CardTitle>
                    </CardHeader>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Upskilling frontline health workers like Birth Attendants, helping reduce mortality rates during childbirths through accessible training.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-[#003366] text-white cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl">Business & Commerce</CardTitle>
                    </CardHeader>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Empowering SMEs and informal sector players with premium business education in local languages, reducing business failure rates.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Why choose LinguaLink AI</h3>
          <p className="text-xl text-center text-gray-300 mb-8">
            We enable users to access translated contents in their native languages and most familiar learning environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/signup-login">
              <Button className="w-full h-full flex flex-col items-center justify-center bg-[#003366] hover:bg-[#004080] text-white p-6 group">
                <Laptop className="h-12 w-12 mb-4 group-hover:text-[#FF6B00] transition-colors duration-300" />
                <span>Translate via web</span>
              </Button>
            </Link>
            <Link to="/signup-login">
              <Button className="w-full h-full flex flex-col items-center justify-center bg-[#003366] hover:bg-[#004080] text-white p-6 group">
                <Smartphone className="h-12 w-12 mb-4 group-hover:text-[#FF6B00] transition-colors duration-300" />
                <span>Translate on mobile</span>
              </Button>
            </Link>
            <Link to="/signup-login">
              <Button className="w-full h-full flex flex-col items-center justify-center bg-[#003366] hover:bg-[#004080] text-white p-6 group">
                <MessageCircle className="h-12 w-12 mb-4 group-hover:text-[#FF6B00] transition-colors duration-300" />
                <span>Translate on WhatsApp</span>
              </Button>
            </Link>
            <Link to="/signup-login">
              <Button className="w-full h-full flex flex-col items-center justify-center bg-[#003366] hover:bg-[#004080] text-white p-6 group">
                <Send className="h-12 w-12 mb-4 group-hover:text-[#FF6B00] transition-colors duration-300" />
                <span>Translate on Telegram</span>
              </Button>
            </Link>
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