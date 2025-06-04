
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Access to basic practice tests',
        'Limited study materials',
        'Basic progress tracking',
        'Community forum access'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Unlimited practice tests',
        'Complete study material library',
        'Advanced analytics',
        'Personalized learning paths',
        'Priority support',
        'Mobile app access'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Premium',
      price: '$39',
      period: 'per month',
      features: [
        'Everything in Pro',
        'One-on-one tutoring sessions',
        'Custom study plans',
        'Exam prediction algorithms',
        'White-glove support',
        'Early access to new features'
      ],
      cta: 'Go Premium',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3F2768] mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'border-[#3F2768] border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#3F2768] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#3F2768] mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-[#3F2768] mb-1">{plan.price}</div>
                  <div className="text-gray-500">{plan.period}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-[#3F2768] hover:bg-[#2F1D58] text-white' : 'bg-gray-100 hover:bg-gray-200 text-[#3F2768]'}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
