import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Link, Mic, Volume2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaFilePdf, FaFileWord, FaFilePowerpoint, FaFileExcel, FaFileVideo, FaFileAudio } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiLinkedin, SiEdx } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Translate = () => {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const fileInputRef = useRef(null);
  const languages = ["English", "French", "Spanish", "German", "Italian", "Portuguese", "Russian", "Chinese", "Japanese", "Korean", "Arabic", "Hindi", "Bengali", "Urdu", "Swahili", "Yoruba", "Amharic", "Zulu", "Hausa", "Igbo", "Xhosa", "Afrikaans", "Twi", "Somali", "Oromo", "Fulani", "Akan", "Wolof", "Lingala", "Kinyarwanda"];

  const handleFileUpload = (fileType) => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#003366] via-[#004080] to-[#005599] p-8">
      <header className="container mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">LinguaLink AI Translator</h1>
        <nav>
          <RouterLink to="/">
            <Button variant="outline" className="mr-4 text-white border-white hover:bg-[#004080]">Home</Button>
          </RouterLink>
          <RouterLink to="/about">
            <Button variant="outline" className="text-white border-white hover:bg-[#004080]">About</Button>
          </RouterLink>
        </nav>
      </header>

      <main className="container mx-auto">
        <Card className="mb-8 bg-[#002244] bg-opacity-80 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Translate Over 30 Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Select onValueChange={setSourceLanguage}>
                  <SelectTrigger className="bg-[#003366] text-white">
                    <SelectValue placeholder="Detect Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea className="mt-2 bg-[#004080] text-white placeholder-gray-300" placeholder="Enter text to translate" rows={5} />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="absolute bottom-2 left-2 text-white hover:bg-[#003366]">
                        <Mic className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Hold to Record</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex-1 relative">
                <Select onValueChange={setTargetLanguage}>
                  <SelectTrigger className="bg-[#003366] text-white">
                    <SelectValue placeholder="Select Target Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea className="mt-2 bg-[#004080] text-white placeholder-gray-300" placeholder="Your translation shows here" rows={5} readOnly />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="absolute bottom-2 right-2 text-white hover:bg-[#003366]">
                        <Volume2 className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to Listen</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <Button className="w-full bg-[#FF6B00] hover:bg-[#FF8C00] text-white">Translate</Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#002244] bg-opacity-80 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-white">
                <Upload className="mr-2" /> Translate Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-300">Upload files in various formats:</p>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} multiple />
                {[
                  { Icon: FaFilePdf, color: '#FF0000' },
                  { Icon: FaFileWord, color: '#2B579A' },
                  { Icon: FaFilePowerpoint, color: '#D24726' },
                  { Icon: FaFileExcel, color: '#217346' },
                  { Icon: FaFileVideo, color: '#FF6550' },
                  { Icon: FaFileAudio, color: '#FFD700' }
                ].map(({ Icon, color }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => handleFileUpload(Icon.name)}
                  >
                    <Icon className="text-3xl cursor-pointer" style={{ color }} />
                  </motion.div>
                ))}
              </div>
              <Button className="w-full flex items-center justify-center bg-[#003366] hover:bg-[#004080] text-white">
                <Upload className="mr-2" /> Translate File
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#002244] bg-opacity-80 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-white">
                <Link className="mr-2" /> Translate URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter URL to translate" className="mb-4 bg-[#003366] text-white placeholder-gray-300" />
              <div className="flex justify-center gap-4 mb-4">
                {[
                  { Icon: FaYoutube, color: '#FF0000', url: 'https://www.youtube.com/' },
                  { Icon: SiUdemy, color: '#A435F0', url: 'https://www.udemy.com/' },
                  { Icon: SiCoursera, color: '#0056D2', url: 'https://www.coursera.org/' },
                  { Icon: SiLinkedin, color: '#0A66C2', url: 'https://www.linkedin.com/' },
                  { Icon: SiEdx, color: '#02262B', url: 'https://www.edx.org/' }
                ].map(({ Icon, color, url }, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => window.open(url, '_blank')}
                  >
                    <Icon className="text-3xl cursor-pointer" style={{ color }} />
                  </motion.div>
                ))}
              </div>
              <Button className="w-full bg-[#003366] hover:bg-[#004080] text-white">Translate URL</Button>
            </CardContent>
          </Card>

          <Card className="bg-[#002244] bg-opacity-80 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-white">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300">
                <li>30+ supported languages</li>
                <li>Real-time translation</li>
                <li>File and URL support</li>
                <li>AI-powered accuracy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="container mx-auto mt-12 text-center text-gray-300">
        <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Translate;