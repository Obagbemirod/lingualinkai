import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244] p-8"
    >
      <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#002244]">About LinguaLink AI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">
            LinguaLink AI is a pioneering platform dedicated to breaking down language barriers in education and empowering millions through accessible, translated content. Our mission is to provide real-time translation of educational materials into local languages, enabling marginalized populations in emerging markets to access quality education across key sectors.
          </p>
          <h3 className="text-xl font-bold mb-4">Our Vision</h3>
          <p className="mb-6">
            We envision a world where language is no longer a barrier to education, economic opportunity, and personal growth. By leveraging cutting-edge AI technology, we aim to create a global community where knowledge flows freely across linguistic boundaries.
          </p>
          <h3 className="text-xl font-bold mb-4">Our Impact</h3>
          <p className="mb-6">
            LinguaLink AI is making significant strides in various sectors:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Education: Empowering individuals with skills development in their native languages.</li>
            <li>Agriculture: Providing farmers with crucial information on sustainable practices and market trends.</li>
            <li>Business & Commerce: Supporting SMEs with localized business education to reduce failure rates.</li>
            <li>Health: Upskilling frontline health workers to improve community health outcomes.</li>
          </ul>
          <p>
            Join us in our mission to create a more inclusive, educated, and connected world through the power of language technology.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default About;