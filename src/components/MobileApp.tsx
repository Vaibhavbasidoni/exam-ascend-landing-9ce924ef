
import React from 'react';
import { Bell, Fire, ArrowRight, Play, RotateCcw, BookOpen, BarChart3, Home, Target, TrendingUp, Book, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const MobileApp = () => {
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Good Morning, Sarah</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-[#3F2768] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Welcome Card */}
        <div className="p-6">
          <Card className="bg-gradient-to-br from-[#3F2768] to-[#5A3D7A] text-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Continue Your Journey</h2>
                  <div className="flex items-center gap-2">
                    <Fire className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">5 days streak</span>
                  </div>
                </div>
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                    <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" fill="none" 
                      strokeDasharray="87.96" strokeDashoffset="28.15" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">68%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="px-6 pb-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { icon: Play, label: 'Practice Test' },
              { icon: RotateCcw, label: 'Review' },
              { icon: BookOpen, label: 'Flashcards' },
              { icon: BarChart3, label: 'Analytics' }
            ].map((action, index) => (
              <div key={index} className="flex-shrink-0 text-center">
                <div className="w-14 h-14 bg-[#3F2768] rounded-full flex items-center justify-center mb-2 shadow-md">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-600 leading-tight">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Study Progress Section */}
        <div className="px-6 pb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-[#3F2768]">Your Progress</h3>
            <Button variant="ghost" className="text-[#3F2768] text-sm p-0 h-auto">View All</Button>
          </div>
          <div className="space-y-2">
            <Progress value={67} className="h-2" />
            <p className="text-sm text-gray-600">12 of 18 topics completed</p>
          </div>
        </div>

        {/* Subject Cards */}
        <div className="px-6 pb-6">
          <div className="space-y-3">
            {[
              { subject: 'Mathematics', questions: 24, progress: 85, icon: '📊' },
              { subject: 'Science', questions: 18, progress: 62, icon: '🔬' },
              { subject: 'English', questions: 21, progress: 74, icon: '📚' },
              { subject: 'History', questions: 15, progress: 45, icon: '🏛️' }
            ].map((item, index) => (
              <Card key={index} className="border-[#D7DBDD] shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#3F2768]">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#3F2768] bg-opacity-10 rounded-full flex items-center justify-center">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.subject}</h4>
                        <p className="text-sm text-gray-500">{item.questions} questions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#3F2768]">{item.progress}%</span>
                      <ArrowRight className="w-4 h-4 text-[#3F2768]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Challenge */}
        <div className="px-6 pb-20">
          <Card className="bg-[#3F2768] text-white">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Today's Challenge</h3>
                <p className="text-sm opacity-90 mb-4">Complete 10 questions in under 15 minutes</p>
                <div className="text-2xl font-bold mb-4">14:32</div>
                <Button className="bg-white text-[#3F2768] hover:bg-gray-100 w-full font-medium">
                  Start Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#D7DBDD]">
        <div className="flex justify-around py-2">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Target, label: 'Practice', active: false },
            { icon: TrendingUp, label: 'Progress', active: false },
            { icon: Book, label: 'Library', active: false },
            { icon: User, label: 'Profile', active: false }
          ].map((tab, index) => (
            <div key={index} className={`flex flex-col items-center py-2 px-3 ${tab.active ? 'text-[#3F2768]' : 'text-gray-400'}`}>
              <div className={`p-1 rounded-lg ${tab.active ? 'bg-[#3F2768] bg-opacity-10' : ''}`}>
                <tab.icon className="w-5 h-5" />
              </div>
              <span className="text-xs mt-1">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
