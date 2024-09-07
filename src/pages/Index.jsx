import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const services = ["Education", "Technology", "Agriculture", "Health", "Commerce"];
  const languages = ["Swahili", "Yoruba", "Amharic", "Zulu", "Hausa", "Igbo", "Xhosa", "Afrikaans", "Twi", "Somali"];
  const integrations = ["Telegram", "WhatsApp", "LMS"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"
    >
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">LinguaLink AI</h1>
          <nav className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">Services <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service, index) => (
                  <DropdownMenuItem key={index}>{service}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300">Languages <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((language, index) => (
                  <DropdownMenuItem key={index}>{language}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300">About Us</Button>
            <Button variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300">Partner with Us</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300">Integrate <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link to="/telegram">Telegram</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/whatsapp">WhatsApp</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/lms">LMS</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <p className="text-2xl text-center text-white mt-6">Breaking Down Language Barriers in Education</p>
      </header>

      <main className="container mx-auto px-4">
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Empowering Millions Through Accessible Education</h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            LinguaLink AI provides real-time translation of educational content into local languages,
            empowering marginalized populations in emerging markets to access knowledge and quality education
            in key sectors like technology, agriculture, health, and commerce.
          </p>
          <Link to="/translate">
            <Button className="mt-8 bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-pink-500 hover:to-yellow-400 text-white text-2xl font-extrabold py-6 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              TRANSLATE NOW
            </Button>
          </Link>
        </motion.section>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: <Globe className="h-12 w-12 text-yellow-400" />, title: "Global Reach", description: "Serving emerging markets worldwide" },
            { icon: <BookOpen className="h-12 w-12 text-green-400" />, title: "Multi-Sector Education", description: "Technology, agriculture, health, and commerce" },
            { icon: <Zap className="h-12 w-12 text-pink-400" />, title: "Real-Time Translation", description: "Instant access to knowledge in local languages" },
            { icon: <Users className="h-12 w-12 text-purple-400" />, title: "Inclusive Growth", description: "Empowering marginalized populations" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-gradient-to-br from-white to-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    {feature.icon}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Our Impact</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            LinguaLink AI is addressing a substantial market need within the $101.94 billion global digital
            language learning market. By breaking down language barriers, we're tackling challenges like
            food scarcity, high mortality rates, business failures, and unemployment in emerging markets.
          </p>
        </motion.section>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Why Choose LinguaLink AI?</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our platform seamlessly integrates with multiple platforms (web, mobile, WhatsApp, Telegram),
            enabling users to access translated educational content in their native languages and most
            familiar learning environments. We're not just translating content; we're bridging critical
            knowledge gaps and driving inclusive growth.
          </p>
        </motion.section>
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;