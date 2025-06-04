
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Medical Student',
      content: 'ExamAscend helped me pass my MCAT with flying colors. The practice tests were incredibly realistic and the analytics helped me focus on my weak areas.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Engineering Student', 
      content: 'The best study platform I\'ve ever used. The personalized learning paths and comprehensive materials made all the difference in my preparation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Student',
      content: 'I improved my test scores by 30% using ExamAscend. The community support and expert guidance were invaluable during my preparation.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#3F2768] mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real students who achieved success with ExamAscend
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-[#3F2768]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
