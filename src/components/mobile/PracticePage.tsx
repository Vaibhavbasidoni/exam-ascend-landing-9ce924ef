
import React from 'react';
import { ArrowLeft, Play, Clock, BookOpen, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PracticePageProps {
  onNavigate: (page: string) => void;
}

const PracticePage = ({ onNavigate }: PracticePageProps) => {
  const practiceOptions = [
    { title: 'Quick Quiz', description: '10 random questions', duration: '5-10 min', icon: '⚡', color: 'bg-blue-500' },
    { title: 'Subject Focus', description: 'Choose your subject', duration: '15-20 min', icon: '📚', color: 'bg-green-500' },
    { title: 'Mock Exam', description: 'Full practice test', duration: '60 min', icon: '🎯', color: 'bg-purple-500' },
    { title: 'Weak Areas', description: 'Focus on improvement', duration: '10-15 min', icon: '🔍', color: 'bg-orange-500' }
  ];

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
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Practice</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#3F2768] mb-2">Choose Your Practice</h2>
          <p className="text-gray-600">Select the type of practice session you want to start</p>
        </div>

        <div className="space-y-4">
          {practiceOptions.map((option, index) => (
            <Card 
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-l-[#3F2768]"
              onClick={() => onNavigate('quiz')}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center`}>
                    <span className="text-xl">{option.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{option.duration}</span>
                    </div>
                  </div>
                  <Play className="w-6 h-6 text-[#3F2768]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#3F2768] mb-4">Recent Practice</h3>
          <div className="space-y-3">
            {[
              { subject: 'Mathematics', score: '85%', date: '2 hours ago' },
              { subject: 'Science', score: '92%', date: 'Yesterday' },
              { subject: 'English', score: '78%', date: '2 days ago' }
            ].map((item, index) => (
              <Card key={index} className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.subject}</h4>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#3F2768]">{item.score}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#D7DBDD]">
        <div className="flex justify-around py-2">
          {[
            { icon: Target, label: 'Home', active: false, action: () => onNavigate('home') },
            { icon: Target, label: 'Practice', active: true, action: () => onNavigate('practice') },
            { icon: Target, label: 'Progress', active: false, action: () => onNavigate('progress') },
            { icon: BookOpen, label: 'Library', active: false, action: () => onNavigate('library') },
            { icon: Target, label: 'Profile', active: false, action: () => onNavigate('profile') }
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

export default PracticePage;
