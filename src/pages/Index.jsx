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

  const impactSectors = [
    {
      title: "Education",
      content: "Empowering individuals with skills development and access to quality education in local languages."
    },
    {
      title: "Agriculture",
      content: "Enabling farmers to access market information and education on sustainable practices, leading to higher yield and food security."
    },
    {
      title: "Business & Commerce",
      content: "Empowering SMEs and informal sector players with premium business education in local languages, reducing business failure rates."
    },
    {
      title: "Health",
      content: "Upskilling frontline health workers like Birth Attendants, helping to reduce mortality rates during childbirths."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23E0E0E0' stroke-width='1'%3E%3Cpath d='M25 25h150v150H25z'/%3E%3Cpath d='M50 50l100 100M150 50L50 150'/%3E%3Ccircle cx='100' cy='100' r='50'/%3E%3Cpath d='M100 25v150M25 100h150'/%3E%3Cpath d='M25 25l150 150M175 25L25 175'/%3E%3C/g%3E%3Cg fill='%23CCCCCC'%3E%3Ccircle cx='37.5' cy='37.5' r='5'/%3E%3Ccircle cx='162.5' cy='37.5' r='5'/%3E%3Ccircle cx='37.5' cy='162.5' r='5'/%3E%3Ccircle cx='162.5' cy='162.5' r='5'/%3E%3C/g%3E%3Cg fill='%23999999'%3E%3Crect x='85' y='15' width='30' height='30' rx='5'/%3E%3Crect x='15' y='85' width='30' height='30' rx='5'/%3E%3Crect x='155' y='85' width='30' height='30' rx='5'/%3E%3Crect x='85' y='155' width='30' height='30' rx='5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600">LinguaLink AI</h1>
          <nav className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">Services <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service, index) => (
                  <DropdownMenuItem key={index}>{service}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">Languages <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((language, index) => (
                  <DropdownMenuItem key={index}>{language}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-blue-600 hover:bg-blue-100 transition-all duration-300">About Us</Button>
            <Button variant="ghost" className="text-blue-600 hover:bg-blue-100 transition-all duration-300">Partner with Us</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-blue-600 hover:bg-blue-100 transition-all duration-300">Integrate <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link to="/telegram">Telegram</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/whatsapp">WhatsApp</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/lms">LMS</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <p className="text-2xl text-center text-blue-600 mt-6">Breaking Down Language Barriers in Education</p>
      </header>

      <main className="container mx-auto px-4">
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Empowering Millions Through Accessible Education</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            LinguaLink AI provides real-time translation of educational content into local languages,
            empowering marginalized populations in emerging markets to access knowledge and quality education
            in key sectors like technology, agriculture, health, and commerce.
          </p>
          <Link to="/translate">
            <Button className="mt-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white text-2xl font-extrabold py-6 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
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
            { icon: <Globe className="h-12 w-12 text-blue-500" />, title: "Global Reach", description: "Serving emerging markets worldwide" },
            { icon: <BookOpen className="h-12 w-12 text-green-500" />, title: "Multi-Sector Education", description: "Technology, agriculture, health, and commerce" },
            { icon: <Zap className="h-12 w-12 text-yellow-500" />, title: "Real-Time Translation", description: "Instant access to knowledge in local languages" },
            { icon: <Users className="h-12 w-12 text-red-500" />, title: "Inclusive Growth", description: "Empowering marginalized populations" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    {feature.icon}
                    <span className="text-gray-800">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
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
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactSectors.map((sector, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-600">
                      {sector.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative overflow-hidden h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-center p-4">{sector.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Why Choose LinguaLink AI?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our platform seamlessly integrates with multiple platforms (web, mobile, WhatsApp, Telegram),
            enabling users to access translated educational content in their native languages and most
            familiar learning environments. We're not just translating content; we're bridging critical
            knowledge gaps and driving inclusive growth.
          </p>
        </motion.section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;