
import React from 'react';
import { ArrowLeft, User, Settings, Bell, HelpCircle, LogOut } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

const ProfilePage = ({ onNavigate }: ProfilePageProps) => {
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
          <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#3F2768] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">S</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Sarah Johnson</h2>
          <p className="text-gray-600">sarah.johnson@email.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-bold text-[#3F2768]">156</div>
              <div className="text-sm text-gray-600">Tests Taken</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#3F2768]">78%</div>
              <div className="text-sm text-gray-600">Avg Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#3F2768]">5</div>
              <div className="text-sm text-gray-600">Day Streak</div>
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="space-y-4">
          {[
            { icon: Settings, title: 'Settings', description: 'App preferences and account' },
            { icon: Bell, title: 'Notifications', description: 'Manage your notifications' },
            { icon: HelpCircle, title: 'Help & Support', description: 'Get help and contact us' },
            { icon: LogOut, title: 'Sign Out', description: 'Log out of your account' }
          ].map((item, index) => (
            <Card key={index} className="cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#3F2768] bg-opacity-10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#3F2768]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#D7DBDD]">
        <div className="flex justify-around py-2">
          {[
            { icon: User, label: 'Home', active: false, action: () => onNavigate('home') },
            { icon: User, label: 'Practice', active: false, action: () => onNavigate('practice') },
            { icon: User, label: 'Progress', active: false, action: () => onNavigate('progress') },
            { icon: User, label: 'Library', active: false, action: () => onNavigate('library') },
            { icon: User, label: 'Profile', active: true, action: () => onNavigate('profile') }
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

export default ProfilePage;
