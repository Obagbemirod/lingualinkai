import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavBar = () => {
  const services = ["Education", "Technology", "Agriculture", "Health", "Commerce"];
  const languages = ["Swahili", "Yoruba", "Amharic", "Zulu", "Hausa", "Igbo", "Xhosa", "Afrikaans", "Twi", "Somali"];

  return (
    <header className="container mx-auto py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">LinguaLink AI</h1>
        <nav className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-[#003366] transition-all duration-300">About Us <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link to="/about">About Us</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/problems-we-solve">Problems We Solve</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
  );
};