
import React from 'react';
import { ArrowLeft, TrendingUp, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ProgressPageProps {
  onNavigate: (page: string) => void;
}

const ProgressPage = ({ onNavigate }: ProgressPageProps) => {
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
          <h1 className="text-xl font-semibold text-gray-900">Progress</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-[#3F2768] to-[#5A3D7A] text-white">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">78%</div>
              <div className="text-sm opacity-90">Overall Score</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#3F2768] mb-4">Subject Progress</h3>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', progress: 85, score: '85%', color: 'bg-green-500' },
              { subject: 'Science', progress: 62, score: '62%', color: 'bg-blue-500' },
              { subject: 'English', progress: 74, score: '74%', color: 'bg-purple-500' },
              { subject: 'History', progress: 45, score: '45%', color: 'bg-orange-500' }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{item.subject}</h4>
                    <span className="text-sm font-semibold text-[#3F2768]">{item.score}</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#3F2768] mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            {[
              { title: 'First Perfect Score', description: 'Got 100% on a quiz', icon: '🏆' },
              { title: '5 Day Streak', description: 'Practiced for 5 days straight', icon: '🔥' },
              { title: 'Quick Learner', description: 'Completed 10 quizzes', icon: '⚡' }
            ].map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-400">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-lg">{achievement.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
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
            { icon: TrendingUp, label: 'Home', active: false, action: () => onNavigate('home') },
            { icon: TrendingUp, label: 'Practice', active: false, action: () => onNavigate('practice') },
            { icon: TrendingUp, label: 'Progress', active: true, action: () => onNavigate('progress') },
            { icon: TrendingUp, label: 'Library', active: false, action: () => onNavigate('library') },
            { icon: TrendingUp, label: 'Profile', active: false, action: () => onNavigate('profile') }
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

export default ProgressPage;
