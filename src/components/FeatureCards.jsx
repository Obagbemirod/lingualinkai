import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users } from 'lucide-react';

export const FeatureCards = () => {
  const features = [
    { icon: <Globe className="h-8 w-8 text-blue-500" />, title: "Global Reach", description: "Translate content into 30+ languages" },
    { icon: <BookOpen className="h-8 w-8 text-green-500" />, title: "Educational Focus", description: "Specialized in educational content translation" },
    { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Real-time Translation", description: "Instant translation for live communication" },
    { icon: <Users className="h-8 w-8 text-purple-500" />, title: "Community Impact", description: "Empowering millions with accessible knowledge" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {features.map((feature, index) => (
        <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-lg">
          <CardContent className="flex flex-col items-center p-6">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{feature.title}</h3>
            <p className="text-center text-gray-300">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};