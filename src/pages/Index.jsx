import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, BookOpen, Zap, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">LinguaLink AI</h1>
        <p className="text-xl text-center text-gray-600 mt-2">Breaking Down Language Barriers in Education</p>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Empowering Millions Through Accessible Education</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            LinguaLink AI provides real-time translation of educational content into local languages,
            empowering marginalized populations in emerging markets to access knowledge and quality education
            in key sectors like technology, agriculture, health, and commerce.
          </p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Learn More</Button>
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