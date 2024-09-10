import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users, Laptop, Smartphone, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { NavBar } from '../components/NavBar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700"
    >
      <NavBar />

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          {...fadeInUp}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">LinguaLink AI</h1>
          <p className="text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
            Breaking Down Language Barriers in Education
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/translate">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300">
                Start Translating Now
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        <motion.section 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Why choose LinguaLink AI</h2>
          <p className="text-xl text-center text-blue-200 mb-8">
            We enable users to access translated contents in their native languages and most familiar learning environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/translate">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full h-full flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <Laptop className="h-12 w-12 mb-4" />
                  <span>Translate via web</span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/translate">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full h-full flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <Smartphone className="h-12 w-12 mb-4" />
                  <span>Translate on mobile</span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/whatsapp">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full h-full flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <MessageCircle className="h-12 w-12 mb-4" />
                  <span>Translate on WhatsApp</span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/telegram">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full h-full flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <Send className="h-12 w-12 mb-4" />
                  <span>Translate on Telegram</span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.section>

        <motion.section 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Impact Across Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Card className="bg-blue-800 text-white cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <BookOpen className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Education & Skills Development</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="w-64 p-4 bg-blue-900 text-white">
                  <p>Empowering learners with access to quality education in their native languages, fostering skill development and knowledge acquisition.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Card className="bg-blue-800 text-white cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <Globe className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Agriculture</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="w-64 p-4 bg-blue-900 text-white">
                  <p>Enabling farmers producing 80%+ of food in emerging markets to access market information & education on sustainable practices, boosting yield and food security.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Card className="bg-blue-800 text-white cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <Users className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="w-64 p-4 bg-blue-900 text-white">
                  <p>Upskilling frontline health workers like Birth Attendants, helping reduce mortality rates during childbirths through accessible training.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Card className="bg-blue-800 text-white cursor-pointer h-full">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <Zap className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Business & Commerce</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="w-64 p-4 bg-blue-900 text-white">
                  <p>Empowering SMEs and informal sector players with premium business education in local languages, reducing business failure rates.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;