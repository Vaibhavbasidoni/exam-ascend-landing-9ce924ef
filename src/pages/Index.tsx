
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import MobileApp from '@/components/MobileApp';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => setShowMobile(!showMobile)}
          className="bg-[#3F2768] hover:bg-[#2F1D58] text-white"
        >
          {showMobile ? 'Show Landing Page' : 'Show Mobile App'}
        </Button>
      </div>

      {showMobile ? (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
          <MobileApp />
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Features />
          <Statistics />
          <Testimonials />
          <HowItWorks />
          <Pricing />
          
          {/* Footer */}
          <footer className="bg-[#3F2768] text-white py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">ExamAscend</h3>
                  <p className="text-[#D7DBDD]">
                    Elevate your exam preparation with our comprehensive learning platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Product</h4>
                  <ul className="space-y-2 text-[#D7DBDD]">
                    <li>Practice Tests</li>
                    <li>Study Materials</li>
                    <li>Progress Tracking</li>
                    <li>Analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Support</h4>
                  <ul className="space-y-2 text-[#D7DBDD]">
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Community</li>
                    <li>Tutorials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Company</h4>
                  <ul className="space-y-2 text-[#D7DBDD]">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-[#D7DBDD] border-opacity-20 mt-8 pt-8 text-center text-[#D7DBDD]">
                <p>&copy; 2024 ExamAscend. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
