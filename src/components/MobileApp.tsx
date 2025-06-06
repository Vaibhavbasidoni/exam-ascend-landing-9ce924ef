
import React from 'react';
import { Bell, Flame, ArrowRight, Play, RotateCcw, BookOpen, BarChart3, Home, Target, TrendingUp, Book, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MobileAppProps {
  onNavigate: (page: string) => void;
}

const MobileApp = ({ onNavigate }: MobileAppProps) => {
  const subjects = [
    { 
      subject: 'Mathematics', 
      questions: 24, 
      progress: 85, 
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop&crop=center',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      iconColor: 'text-blue-700'
    },
    { 
      subject: 'Science', 
      questions: 18, 
      progress: 62, 
      image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&h=400&fit=crop&crop=center',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
      iconColor: 'text-green-700'
    },
    { 
      subject: 'English', 
      questions: 21, 
      progress: 74, 
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&crop=center',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      iconColor: 'text-purple-700'
    },
    { 
      subject: 'History', 
      questions: 15, 
      progress: 45, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
      iconColor: 'text-orange-700'
    }
  ];

  const quickActions = [
    { icon: Play, label: 'Practice Test', action: () => onNavigate('practice') },
    { icon: RotateCcw, label: 'Review', action: () => onNavigate('practice') },
    { icon: BookOpen, label: 'Flashcards', action: () => onNavigate('library') },
    { icon: BarChart3, label: 'Analytics', action: () => onNavigate('progress') }
  ];

  const navItems = [
    { icon: Home, label: 'Home', active: true, action: () => onNavigate('home') },
    { icon: Target, label: 'Practice', active: false, action: () => onNavigate('practice') },
    { icon: TrendingUp, label: 'Progress', active: false, action: () => onNavigate('progress') },
    { icon: Book, label: 'Library', active: false, action: () => onNavigate('library') },
    { icon: User, label: 'Profile', active: false, action: () => onNavigate('profile') }
  ];

  const handleSubjectClick = (subject: string) => {
    if (subject === 'Mathematics') {
      onNavigate('math-journey');
    } else if (subject === 'English') {
      onNavigate('chat');
    } else {
      onNavigate('practice');
    }
  };

  return (
    <div className="w-[375px] h-[812px] bg-white mx-auto border border-gray-200 relative overflow-hidden flex flex-col">
      {/* Status Bar */}
      <div className="h-11 bg-white flex justify-between items-center px-6 text-sm font-medium flex-shrink-0">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-black rounded-sm"></div>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 bg-white border-b border-[#D7DBDD] flex-shrink-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Good Morning, Sarah</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              className="relative hover:bg-gray-100 p-2 rounded-full transition-colors"
              onClick={() => console.log('Notifications clicked')}
            >
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <button 
              className="w-8 h-8 bg-[#3F2768] rounded-full flex items-center justify-center hover:bg-[#2F1D58] transition-colors"
              onClick={() => onNavigate('profile')}
            >
              <span className="text-white text-sm font-medium">S</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="pb-20">
            {/* Welcome Card */}
            <div className="p-6">
              <Card className="bg-gradient-to-br from-[#3F2768] to-[#5A3D7A] text-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Continue Your Journey</h2>
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-400" />
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
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex-shrink-0 text-center hover:transform hover:scale-105 transition-transform"
                  >
                    <div className="w-14 h-14 bg-[#3F2768] rounded-full flex items-center justify-center mb-2 shadow-md hover:bg-[#2F1D58] transition-colors">
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-gray-600 leading-tight">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Section */}
            <div className="px-6 pb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-[#3F2768]">Your Progress</h3>
                <Button 
                  variant="ghost" 
                  className="text-[#3F2768] text-sm p-0 h-auto"
                  onClick={() => onNavigate('progress')}
                >
                  View All
                </Button>
              </div>
              <div className="space-y-2">
                <Progress value={67} className="h-2" />
                <p className="text-sm text-gray-600">12 of 18 topics completed</p>
              </div>
            </div>

            {/* Subject Cards */}
            <div className="px-6 pb-6">
              <div className="space-y-4">
                {subjects.map((item, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden group"
                    onClick={() => handleSubjectClick(item.subject)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        
                        <div className="relative p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-20 h-20 ${item.bgColor} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg overflow-hidden`}>
                              <img 
                                src={item.image} 
                                alt={item.subject}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                            
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-colors">{item.subject}</h4>
                              <p className="text-sm text-gray-600">{item.questions} questions available</p>
                              
                              <div className="mt-2 w-32">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-xs text-gray-500">Progress</span>
                                  <span className="text-xs font-semibold text-gray-700">{item.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-300 group-hover:shadow-md`}
                                    style={{ width: `${item.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-center gap-2">
                            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-300" />
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                          </div>
                        </div>
                        
                        <div className={`h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Today's Challenge */}
            <div className="px-6 pb-6">
              <Card className="bg-[#3F2768] text-white">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Today's Challenge</h3>
                    <p className="text-sm opacity-90 mb-4">Complete 10 questions in under 15 minutes</p>
                    <div className="text-2xl font-bold mb-4">14:32</div>
                    <Button 
                      className="bg-white text-[#3F2768] hover:bg-gray-100 w-full font-medium"
                      onClick={() => onNavigate('quiz')}
                    >
                      Start Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-[#D7DBDD] flex-shrink-0">
        <div className="flex justify-around py-2">
          {navItems.map((tab, index) => (
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

export default MobileApp;
