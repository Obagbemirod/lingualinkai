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
  "Introduction to AI",
  "Web Development Fundamentals",
  "Data Science Basics",
  "Mobile App Development",
  "Cybersecurity Essentials",
  "Cloud Computing",
  "Blockchain Technology",
  "Machine Learning Fundamentals",
  "Digital Marketing",
  "UX/UI Design Principles"
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
      className="min-h-screen bg-gradient-to-b from-purple-400 to-indigo-600 p-8"
    >
      <h1 className="text-4xl font-bold text-white text-center mb-8">LinguaLink AI Learning Management System</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="bg-white bg-opacity-90 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-600 flex items-center">
                  <BookOpen className="mr-2" /> {course}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(value) => handleLanguageChange(index, value)}>
                  <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang, langIndex) => (
                      <SelectItem key={langIndex} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded transition-all duration-300"
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