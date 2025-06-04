
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-[#D7DBDD]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#3F2768]">ExamAscend</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#3F2768] transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-[#3F2768] transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-[#3F2768] transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-[#3F2768] transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-[#3F2768]">
              Sign In
            </Button>
            <Button className="bg-[#3F2768] hover:bg-[#2F1D58] text-white">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
