
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus, BookOpen, BarChart3, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account and tell us about your learning goals and subjects.'
    },
    {
      icon: BookOpen,
      title: 'Start Learning',
      description: 'Access personalized study materials and begin taking practice tests.'
    },
    {
      icon: BarChart3,
      title: 'Track Progress',
      description: 'Monitor your performance with detailed analytics and insights.'
    },
    {
      icon: Trophy,
      title: 'Achieve Success',
      description: 'Reach your goals with confidence and ace your exams!'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3F2768] mb-4">
            How ExamAscend Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to transform your exam preparation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg text-center relative">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-[#3F2768] rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="w-16 h-16 bg-[#3F2768] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-[#3F2768]" />
                </div>
                <h3 className="text-xl font-semibold text-[#3F2768] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
