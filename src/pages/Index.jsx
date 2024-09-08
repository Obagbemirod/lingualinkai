import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users, ChevronDown, Laptop, Smartphone, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavBar } from '../components/NavBar';

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244]"
    >
      <NavBar />

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

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Our Impact Across Sectors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Education', 'Agriculture', 'Healthcare', 'Commerce'].map((sector, index) => (
              <Card key={index} className="bg-[#003366] text-white">
                <CardHeader>
                  <CardTitle className="text-xl">{sector}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Transforming {sector.toLowerCase()} through accessible, translated content.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Translation Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Web Translation', icon: <Laptop className="h-8 w-8 mb-4" /> },
              { title: 'Mobile App', icon: <Smartphone className="h-8 w-8 mb-4" /> },
              { title: 'Chat Integration', icon: <MessageCircle className="h-8 w-8 mb-4" /> }
            ].map((method, index) => (
              <Card key={index} className="bg-[#003366] text-white text-center">
                <CardContent className="pt-6">
                  {method.icon}
                  <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
                  <p>Seamless translation across platforms</p>
                </CardContent>
              </Card>
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