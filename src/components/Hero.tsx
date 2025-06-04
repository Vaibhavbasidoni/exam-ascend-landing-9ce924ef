
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#3F2768] to-[#5A3D7A] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your Exam Preparation
            </h1>
            <p className="text-xl text-[#D7DBDD] mb-8 leading-relaxed">
              Master your exams with our comprehensive learning platform. Practice tests, study materials, and progress tracking all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-[#3F2768] hover:bg-gray-100 text-lg px-8 py-3">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#3F2768] text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-[#3F2768]">
                <h3 className="text-2xl font-bold mb-4">Practice Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Mathematics</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#3F2768] h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Science</span>
                    <span className="font-bold">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#3F2768] h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
