import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Laptop, Smartphone, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ImpactSectors = () => {
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
                <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 flex items-center">
                  <BookOpen className="mr-2 text-green-400" /> {sector.title}
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
  );
};

export const TranslationMethods = () => {
  const translationMethods = [
    { icon: <Laptop className="h-8 w-8" />, text: "Translate via web", link: "/translate" },
    { icon: <Smartphone className="h-8 w-8" />, text: "Translate on mobile", link: "/translate" },
    { icon: <MessageCircle className="h-8 w-8" />, text: "Translate on WhatsApp", link: "/whatsapp" },
    { icon: <Send className="h-8 w-8" />, text: "Translate on Telegram", link: "/telegram" },
  ];

  return (
    <motion.section 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">Why Choose LinguaLink AI?</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        We enable users to access translated contents in their native languages and most familiar learning environments.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {translationMethods.map((method, index) => (
          <Link key={index} to={method.link}>
            <Button
              className="w-full h-24 bg-[#003366] hover:bg-[#004080] text-white flex flex-col items-center justify-center transition-all duration-300"
            >
              {method.icon}
              <span className="mt-2 text-sm">{method.text}</span>
            </Button>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};