import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, BookOpen } from 'lucide-react';
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  "Entrepreneurship Fundamentals",
  "Digital Marketing for Small Businesses",
  "Financial Management for Entrepreneurs",
  "Sustainable Agriculture Practices",
  "Organic Farming Techniques",
  "Agribusiness Management",
  "Public Health Essentials",
  "Nutrition and Wellness",
  "First Aid and Emergency Response",
  "Educational Technology Integration"
];

const languages = [
  "English",
  "French",
  "Spanish",
  "German",
  "Chinese",
  "Arabic",
  "Russian",
  "Portuguese",
  "Japanese",
  "Hindi"
];

const LMS = () => {
  const [selectedLanguages, setSelectedLanguages] = useState({});

  const handleLanguageChange = (courseIndex, language) => {
    setSelectedLanguages(prev => ({
      ...prev,
      [courseIndex]: language
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 p-8"
    >
      <h1 className="text-4xl font-bold text-white text-center mb-8">LinguaLink AI Learning Management System</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-gradient-to-br from-blue-700 to-blue-900 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 flex items-center">
                  <BookOpen className="mr-2 text-green-400" /> {course}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleLanguageChange(index, value)}>
                  <SelectTrigger className="w-full mb-4 bg-blue-600 text-white">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang, langIndex) => (
                      <SelectItem key={langIndex} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-red-500 hover:from-red-500 hover:to-green-500 text-white font-bold py-2 rounded transition-all duration-300"
                  disabled={!selectedLanguages[index]}
                >
                  {selectedLanguages[index] ? `Watch/Listen in ${selectedLanguages[index]}` : 'Select a language'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LMS;