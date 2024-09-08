import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const problems = [
  {
    sector: "Education",
    problem: "Language barriers limit access to quality education for millions.",
    data: "UNESCO reports that 40% of the global population does not have access to education in a language they speak or understand."
  },
  {
    sector: "Agriculture",
    problem: "Farmers struggle to access crucial information due to language barriers.",
    data: "The FAO estimates that language barriers contribute to a 20-30% loss in agricultural productivity in developing countries."
  },
  {
    sector: "Healthcare",
    problem: "Language barriers lead to misdiagnosis and inadequate healthcare.",
    data: "WHO reports that language barriers are responsible for up to 25% of medical errors in multilingual communities."
  },
  {
    sector: "Business & Commerce",
    problem: "Language barriers hinder international trade and local business growth.",
    data: "The World Economic Forum states that companies lose an average of 2% of their revenue due to language barriers in international business."
  }
];

const ProblemsWeSolve = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#002244] text-white p-8"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Problems We Solve</h1>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {problems.map((problem, index) => (
              <CarouselItem key={index}>
                <Card className="bg-[#003366]">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{problem.sector}</h2>
                    <p className="text-xl mb-4">{problem.problem}</p>
                    <p className="text-lg italic">{problem.data}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.div>
  );
};

export default ProblemsWeSolve;