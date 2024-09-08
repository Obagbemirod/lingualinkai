import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Partner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244] p-8"
    >
      <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#002244]">Partner with LinguaLink AI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">
            Join us in our mission to break down language barriers and empower millions through accessible education. We welcome partnerships from various sectors to expand our reach and impact.
          </p>
          <h3 className="text-xl font-bold mb-4">Who Can Partner with Us?</h3>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Governments:</strong> Collaborate on national education initiatives and language accessibility programs.</li>
            <li><strong>NGOs:</strong> Work together to reach underserved communities and implement language-inclusive projects.</li>
            <li><strong>Institutions:</strong> Integrate our technology into your research or outreach programs.</li>
            <li><strong>Schools:</strong> Enhance your curriculum with multilingual resources and tools.</li>
          </ul>
          <h3 className="text-xl font-bold mb-4">Benefits of Partnering</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Access to cutting-edge language translation technology</li>
            <li>Customized solutions for your specific needs</li>
            <li>Expanded reach to diverse linguistic communities</li>
            <li>Contribution to global education and empowerment initiatives</li>
          </ul>
          <p className="mb-6">
            Whether you're a government agency looking to implement nationwide language programs, an NGO focused on community development, an educational institution seeking to broaden your impact, or a school aiming to provide more inclusive learning environments, we have partnership opportunities tailored for you.
          </p>
          <p>
            Let's work together to create a world where language is no longer a barrier to knowledge and opportunity. Contact us today to explore partnership possibilities.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Partner;