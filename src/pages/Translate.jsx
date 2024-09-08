import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileType, Link } from 'lucide-react';

const Translate = () => {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const languages = ["English", "French", "Spanish", "German", "Italian", "Portuguese", "Russian", "Chinese", "Japanese", "Korean", "Arabic", "Hindi", "Bengali", "Urdu", "Swahili", "Yoruba", "Amharic", "Zulu", "Hausa", "Igbo", "Xhosa", "Afrikaans", "Twi", "Somali", "Oromo", "Fulani", "Akan", "Wolof", "Lingala", "Kinyarwanda"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-100 to-green-100 p-8">
      <header className="container mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-600">LinguaLink AI Translator</h1>
        <nav>
          <Button variant="outline" className="mr-4">Home</Button>
          <Button variant="outline">About</Button>
        </nav>
      </header>

      <main className="container mx-auto">
        <Card className="mb-8 bg-white bg-opacity-80 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-700">Translate Over 30 Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Select onValueChange={setSourceLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Detect Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea className="mt-2" placeholder="Enter text to translate" rows={5} />
              </div>
              <div className="flex-1">
                <Select onValueChange={setTargetLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Target Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang.toLowerCase()}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea className="mt-2" placeholder="Your translation shows here" rows={5} readOnly />
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Translate</Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white bg-opacity-80 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-blue-600">
                <FileType className="mr-2" /> Translate Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Upload .mp4, .mp3, .avi, and more</p>
              <Button className="w-full flex items-center justify-center">
                <Upload className="mr-2" /> Upload File
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-80 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-green-600">
                <Link className="mr-2" /> Translate URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter URL to translate" className="mb-4" />
              <Button className="w-full">Translate URL</Button>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-80 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-orange-600">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>30+ supported languages</li>
                <li>Real-time translation</li>
                <li>File and URL support</li>
                <li>AI-powered accuracy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="container mx-auto mt-12 text-center text-gray-600">
        <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Translate;