
import React from 'react';

const Statistics = () => {
  const stats = [
    { number: '50,000+', label: 'Students Learning' },
    { number: '95%', label: 'Success Rate' },
    { number: '1M+', label: 'Questions Answered' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-[#3F2768] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-xl text-[#D7DBDD]">
            Join thousands of successful learners who have achieved their goals with ExamAscend
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-[#D7DBDD] text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
