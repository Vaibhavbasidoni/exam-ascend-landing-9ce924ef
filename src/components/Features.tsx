
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, BarChart3, Target, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Study Materials',
      description: 'Access thousands of practice questions, study guides, and interactive content across multiple subjects.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track your progress with detailed analytics and insights to identify strengths and areas for improvement.'
    },
    {
      icon: Target,
      title: 'Personalized Learning',
      description: 'AI-powered recommendations adapt to your learning style and help you focus on what matters most.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with fellow learners, share knowledge, and get support from our active community.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3F2768] mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines the best study tools and resources to help you achieve your academic goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3F2768] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#3F2768] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
