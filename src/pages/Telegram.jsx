import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from 'lucide-react';
import { motion } from "framer-motion";

const Telegram = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-8"
    >
      <Card className="max-w-2xl mx-auto bg-white bg-opacity-90 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600 flex items-center">
            <Send className="mr-2" /> Chat with LinguaLink AI on Telegram
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">
            To start chatting with LinguaLink AI on Telegram, follow these simple steps:
          </p>
          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>Open your Telegram app</li>
            <li>Search for "@LinguaLinkAIBot" in the search bar</li>
            <li>Click on the bot to open a chat</li>
            <li>Send "Hello" to start the conversation</li>
          </ol>
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://t.me/LinguaLinkAIBot', '_blank')}
          >
            Chat with LinguaLink AI on Telegram
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Telegram;