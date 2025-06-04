
import React, { useState } from 'react';
import { ArrowLeft, SkipForward, Target, Home, TrendingUp, Book, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MathJourneyPageProps {
  onNavigate: (page: string) => void;
}

const MathJourneyPage = ({ onNavigate }: MathJourneyPageProps) => {
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  
  const chapters = [
    { id: 1, title: 'Basic Arithmetic', completed: true, level: 1, color: 'from-pink-400 to-pink-600' },
    { id: 2, title: 'Fractions & Decimals', completed: true, level: 2, color: 'from-purple-400 to-purple-600' },
    { id: 3, title: 'Algebra Basics', completed: true, level: 3, color: 'from-blue-400 to-blue-600' },
    { id: 4, title: 'Linear Equations', completed: false, level: 4, current: true, color: 'from-green-400 to-green-600' },
    { id: 5, title: 'Quadratic Equations', completed: false, level: 5, color: 'from-yellow-400 to-yellow-600' },
    { id: 6, title: 'Geometry Fundamentals', completed: false, level: 6, color: 'from-red-400 to-red-600' },
    { id: 7, title: 'Trigonometry', completed: false, level: 7, color: 'from-indigo-400 to-indigo-600' },
    { id: 8, title: 'Calculus Intro', completed: false, level: 8, color: 'from-orange-400 to-orange-600' }
  ];

  const handleChapterClick = (chapter: any) => {
    if (chapter.completed || chapter.current) {
      onNavigate('quiz');
    }
  };

  return (
    <div className="w-[375px] h-[812px] bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 mx-auto border border-gray-200 relative overflow-hidden">
      {/* Status Bar */}
      <div className="h-11 bg-white/90 backdrop-blur-sm flex justify-between items-center px-6 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-white/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="p-2 hover:bg-white/50 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-purple-800">Math Adventure</h1>
              <p className="text-sm text-purple-600">Level 4 of 8</p>
            </div>
          </div>
          <Button 
            onClick={() => setShowJumpMenu(!showJumpMenu)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm px-3 py-2 rounded-full shadow-lg"
          >
            <SkipForward className="w-4 h-4 mr-1" />
            Jump
          </Button>
        </div>
      </div>

      {/* Jump Menu Overlay */}
      {showJumpMenu && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 m-6 max-h-96 overflow-y-auto w-full max-w-sm shadow-2xl">
            <h3 className="text-lg font-bold text-purple-800 mb-4">Jump to Level</h3>
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    handleChapterClick(chapter);
                    setShowJumpMenu(false);
                  }}
                  className={`w-full text-left p-3 rounded-xl border-2 transition-all transform hover:scale-105 ${
                    chapter.completed 
                      ? `bg-gradient-to-r ${chapter.color} text-white border-transparent shadow-lg` 
                      : chapter.current 
                      ? 'bg-gradient-to-r from-green-100 to-blue-100 border-green-300 text-green-800 shadow-md'
                      : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!chapter.completed && !chapter.current}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{chapter.title}</span>
                    <span className="text-sm font-bold">Lv. {chapter.level}</span>
                  </div>
                </button>
              ))}
            </div>
            <Button 
              onClick={() => setShowJumpMenu(false)}
              variant="outline"
              className="w-full mt-4 rounded-xl border-2 hover:bg-purple-50"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Journey Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-2 drop-shadow-sm">Your Math Quest</h2>
          <p className="text-purple-700 font-medium">Complete levels to unlock new adventures!</p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-xl rounded-2xl border-0">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Progress</h3>
                <p className="text-white/90 font-medium">3 of 8 levels completed</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold drop-shadow-sm">37.5%</div>
                <div className="text-sm text-white/90">Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Candy Crush Style Level Map */}
        <div className="relative">
          {/* Winding Path Background */}
          <svg className="absolute inset-0 w-full h-full" style={{ height: `${chapters.length * 120}px` }}>
            <path
              d={`M 60 60 Q 250 80 180 180 Q 100 280 220 360 Q 320 440 160 540 Q 50 620 240 720 Q 350 800 180 900 Q 80 980 280 1060`}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="8"
              fill="none"
              strokeDasharray="20,10"
              className="animate-pulse"
            />
          </svg>

          {/* Level Bubbles */}
          <div className="relative z-10 space-y-8 pt-4">
            {chapters.map((chapter, index) => {
              const isLeft = index % 2 === 0;
              const topPosition = index * 120;
              
              return (
                <div 
                  key={chapter.id} 
                  className={`absolute ${isLeft ? 'left-8' : 'right-8'} transition-all duration-300`}
                  style={{ top: `${topPosition}px` }}
                >
                  <div className="relative">
                    {/* Level Bubble */}
                    <button
                      onClick={() => handleChapterClick(chapter)}
                      disabled={!chapter.completed && !chapter.current}
                      className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 transform hover:scale-110 ${
                        chapter.completed 
                          ? `bg-gradient-to-br ${chapter.color} text-white border-4 border-white hover:shadow-2xl` 
                          : chapter.current 
                          ? 'bg-gradient-to-br from-green-400 to-blue-500 text-white border-4 border-white animate-pulse shadow-2xl'
                          : 'bg-gray-300 text-gray-500 border-4 border-gray-400 cursor-not-allowed opacity-60'
                      }`}
                    >
                      {chapter.completed ? '★' : chapter.level}
                    </button>
                    
                    {/* Level Info */}
                    <div className={`absolute top-24 ${isLeft ? 'left-0' : 'right-0'} w-32 text-center`}>
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50">
                        <p className="text-xs font-bold text-purple-800">{chapter.title}</p>
                        <p className="text-xs text-purple-600">
                          {chapter.completed ? 'Completed!' : chapter.current ? 'Current' : 'Locked'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cartoonish Character */}
      <div className="absolute bottom-20 left-6 z-30">
        <div className="relative">
          {/* Character Body */}
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
            {/* Character Face */}
            <div className="relative">
              {/* Eyes */}
              <div className="absolute -top-1 -left-2 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute -top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
              {/* Smile */}
              <div className="absolute top-1 -left-1 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
            </div>
          </div>
          {/* Hat */}
          <div className="absolute -top-2 -left-1 w-6 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-full border-2 border-white"></div>
          {/* Speech Bubble */}
          <div className="absolute -top-8 -right-12 bg-white rounded-lg p-2 shadow-lg border border-purple-200">
            <p className="text-xs font-bold text-purple-800">Let's go!</p>
            <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-white/50">
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
              className={`flex flex-col items-center py-2 px-3 transition-all transform hover:scale-105 ${
                tab.active ? 'text-purple-600' : 'text-gray-500'
              }`}
            >
              <div className={`p-1 rounded-lg ${tab.active ? 'bg-purple-100' : ''}`}>
                <tab.icon className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathJourneyPage;
