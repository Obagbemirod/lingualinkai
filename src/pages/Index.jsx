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
      className="min-h-screen bg-[#002244]"
    >
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">LinguaLink AI</h1>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-[#003366] transition-all duration-300">About Us</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white text-[#002244] hover:bg-gray-200 transition-all duration-300">Services <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service, index) => (
                  <DropdownMenuItem key={index}>{service}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white text-[#002244] hover:bg-gray-200 transition-all duration-300">Languages <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((language, index) => (
                  <DropdownMenuItem key={index}>{language}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-white text-[#002244] hover:bg-gray-200 transition-all duration-300">Integrate <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link to="/telegram">Telegram</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/whatsapp">WhatsApp</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to="/lms">LMS</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-white hover:bg-[#003366] transition-all duration-300">Partner with Us</Button>
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
          <h2 className="text-4xl font-bold mb-6 text-white">Empowering Millions Through Accessible Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            LinguaLink AI provides real-time translation of educational content into local languages,
            empowering marginalized populations in emerging markets to access knowledge and quality education
            in key sectors like technology, agriculture, health, and commerce.
          </p>
          <Link to="/translate">
            <Button className="mt-8 bg-[#FF6B00] text-white text-2xl font-extrabold py-6 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#FF8C00] shadow-lg">
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
            { icon: <Globe className="h-12 w-12 text-white" />, title: "Global Reach", description: "Serving emerging markets worldwide" },
            { icon: <BookOpen className="h-12 w-12 text-white" />, title: "Multi-Sector Education", description: "Technology, agriculture, health, and commerce" },
            { icon: <Zap className="h-12 w-12 text-white" />, title: "Real-Time Translation", description: "Instant access to knowledge in local languages" },
            { icon: <Users className="h-12 w-12 text-white" />, title: "Inclusive Growth", description: "Empowering marginalized populations" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-[#003366] shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl text-white">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
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
          <h2 className="text-4xl font-bold mb-6 text-white">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactSectors.map((sector, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-[#003366] shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                      {sector.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative overflow-hidden h-40">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#002244] bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
          <h2 className="text-4xl font-bold mb-6 text-white">Why Choose LinguaLink AI?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform seamlessly integrates with multiple platforms (web, mobile, WhatsApp, Telegram),
            enabling users to access translated educational content in their native languages and most
            familiar learning environments. We're not just translating content; we're bridging critical
            knowledge gaps and driving inclusive growth.
          </p>
        </motion.section>
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