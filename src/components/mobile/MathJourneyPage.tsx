import React, { useState } from 'react';
import { ArrowLeft, SkipForward, GraduationCap, Target, Home, TrendingUp, Book, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MathJourneyPageProps {
  onNavigate: (page: string) => void;
}

const MathJourneyPage = ({ onNavigate }: MathJourneyPageProps) => {
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  
  const chapters = [
    { id: 1, title: 'Basic Arithmetic', completed: true, level: 1 },
    { id: 2, title: 'Fractions & Decimals', completed: true, level: 2 },
    { id: 3, title: 'Algebra Basics', completed: true, level: 3 },
    { id: 4, title: 'Linear Equations', completed: false, level: 4, current: true },
    { id: 5, title: 'Quadratic Equations', completed: false, level: 5 },
    { id: 6, title: 'Geometry Fundamentals', completed: false, level: 6 },
    { id: 7, title: 'Trigonometry', completed: false, level: 7 },
    { id: 8, title: 'Calculus Intro', completed: false, level: 8 }
  ];

  const handleChapterClick = (chapter: any) => {
    if (chapter.completed || chapter.current) {
      onNavigate('quiz');
    }
  };

  return (
    <div className="w-[375px] h-[812px] bg-white mx-auto border border-gray-200 relative overflow-hidden">
      {/* Status Bar */}
      <div className="h-11 bg-white flex justify-between items-center px-6 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 bg-white border-b border-[#D7DBDD]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Mathematics Journey</h1>
              <p className="text-sm text-gray-600">Chapter 4 of 8</p>
            </div>
          </div>
          <Button 
            onClick={() => setShowJumpMenu(!showJumpMenu)}
            className="bg-[#3F2768] hover:bg-[#2F1D58] text-white text-sm px-3 py-2"
          >
            <SkipForward className="w-4 h-4 mr-1" />
            Jump
          </Button>
        </div>
      </div>

      {/* Jump Menu Overlay */}
      {showJumpMenu && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 m-6 max-h-96 overflow-y-auto w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Jump to Chapter</h3>
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    handleChapterClick(chapter);
                    setShowJumpMenu(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    chapter.completed 
                      ? 'bg-[#3F2768] text-white border-[#3F2768]' 
                      : chapter.current 
                      ? 'bg-blue-50 border-blue-200 text-blue-800'
                      : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!chapter.completed && !chapter.current}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{chapter.title}</span>
                    <span className="text-sm">Level {chapter.level}</span>
                  </div>
                </button>
              ))}
            </div>
            <Button 
              onClick={() => setShowJumpMenu(false)}
              variant="outline"
              className="w-full mt-4"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Journey Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#3F2768] mb-2">Your Learning Journey</h2>
          <p className="text-gray-600">Progress through each level to master mathematics</p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6 bg-gradient-to-r from-[#3F2768] to-[#5A3D7A] text-white">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Overall Progress</h3>
                <p className="text-sm opacity-90">3 of 8 chapters completed</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">37.5%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journey Path */}
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className="relative">
              {/* Connection Line */}
              {index < chapters.length - 1 && (
                <div className={`absolute left-6 top-12 w-0.5 h-8 ${
                  chapter.completed ? 'bg-[#3F2768]' : 'bg-gray-300'
                }`}></div>
              )}
              
              <Card 
                className={`cursor-pointer transition-all ${
                  chapter.completed 
                    ? 'bg-[#3F2768] text-white border-[#3F2768] shadow-lg' 
                    : chapter.current 
                    ? 'bg-blue-50 border-blue-200 shadow-md hover:shadow-lg'
                    : 'bg-gray-100 border-gray-200 opacity-60'
                }`}
                onClick={() => handleChapterClick(chapter)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      chapter.completed 
                        ? 'bg-white text-[#3F2768]' 
                        : chapter.current 
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}>
                      {chapter.level}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        chapter.completed 
                          ? 'text-white' 
                          : chapter.current 
                          ? 'text-blue-800'
                          : 'text-gray-500'
                      }`}>
                        {chapter.title}
                      </h3>
                      <p className={`text-sm ${
                        chapter.completed 
                          ? 'text-white opacity-90' 
                          : chapter.current 
                          ? 'text-blue-600'
                          : 'text-gray-400'
                      }`}>
                        {chapter.completed ? 'Completed' : chapter.current ? 'Current Chapter' : 'Locked'}
                      </p>
                    </div>
                    {chapter.completed && (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[#3F2768] text-sm">✓</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher/Guru Icon */}
      <div className="absolute bottom-20 left-6 z-30">
        <div className="w-12 h-12 bg-[#3F2768] rounded-full flex items-center justify-center shadow-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#D7DBDD]">
        <div className="flex justify-around py-2">
          {[
            { icon: Home, label: 'Home', active: false, action: () => onNavigate('home') },
            { icon: Target, label: 'Practice', active: false, action: () => onNavigate('practice') },
            { icon: TrendingUp, label: 'Progress', active: false, action: () => onNavigate('progress') },
            { icon: Book, label: 'Library', active: false, action: () => onNavigate('library') },
            { icon: User, label: 'Profile', active: false, action: () => onNavigate('profile') }
          ].map((tab, index) => (
            <button
              key={index}
              onClick={tab.action}
              className={`flex flex-col items-center py-2 px-3 transition-colors ${
                tab.active ? 'text-[#3F2768]' : 'text-gray-400'
              }`}
            >
              <div className={`p-1 rounded-lg ${tab.active ? 'bg-[#3F2768] bg-opacity-10' : ''}`}>
                <tab.icon className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathJourneyPage;
