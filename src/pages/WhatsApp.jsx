import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";

const WhatsApp = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 p-8"
    >
      <Card className="max-w-2xl mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-600 flex items-center">
            <MessageCircle className="mr-2" /> Chat with LinguaLink AI on WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">
            To start chatting with LinguaLink AI on WhatsApp, follow these simple steps:
          </p>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>Open your WhatsApp app</li>
            <li>Add the number +2348180454438 to your contacts</li>
            <li>Start a new chat with this contact</li>
            <li>Send "Hello" to begin the conversation</li>
          </ol>
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/2348180454438', '_blank')}
          >
            Chat with LinguaLink AI on WhatsApp
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WhatsApp;