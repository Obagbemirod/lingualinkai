import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">LinguaLink AI</h1>
          <nav className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Services <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service, index) => (
                  <DropdownMenuItem key={index}>{service}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Languages <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((language, index) => (
                  <DropdownMenuItem key={index}>{language}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">About Us</Button>
            <Button variant="ghost">Partner with Us</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Integrate <ChevronDown className="ml-2 h-4 w-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {integrations.map((integration, index) => (
                  <DropdownMenuItem key={index}>{integration}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <p className="text-xl text-center text-gray-600 mt-4">Breaking Down Language Barriers in Education</p>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Empowering Millions Through Accessible Education</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            LinguaLink AI provides real-time translation of educational content into local languages,
            empowering marginalized populations in emerging markets to access knowledge and quality education
            in key sectors like technology, agriculture, health, and commerce.
          </p>
          <Link to="/translate">
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              TRANSLATE NOW
            </Button>
          </Link>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <Globe className="h-8 w-8 text-blue-500" />, title: "Global Reach", description: "Serving emerging markets worldwide" },
            { icon: <BookOpen className="h-8 w-8 text-green-500" />, title: "Multi-Sector Education", description: "Technology, agriculture, health, and commerce" },
            { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Real-Time Translation", description: "Instant access to knowledge in local languages" },
            { icon: <Users className="h-8 w-8 text-purple-500" />, title: "Inclusive Growth", description: "Empowering marginalized populations" },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            LinguaLink AI is addressing a substantial market need within the $101.94 billion global digital
            language learning market. By breaking down language barriers, we're tackling challenges like
            food scarcity, high mortality rates, business failures, and unemployment in emerging markets.
          </p>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose LinguaLink AI?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform seamlessly integrates with multiple platforms (web, mobile, WhatsApp, Telegram),
            enabling users to access translated educational content in their native languages and most
            familiar learning environments. We're not just translating content; we're bridging critical
            knowledge gaps and driving inclusive growth.
          </p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 LinguaLink AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;