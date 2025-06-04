
import React from 'react';
import { ArrowLeft, BookOpen, FileText, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface LibraryPageProps {
  onNavigate: (page: string) => void;
}

const LibraryPage = ({ onNavigate }: LibraryPageProps) => {
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
          <h1 className="text-xl font-semibold text-gray-900">Library</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#3F2768] mb-2">Study Materials</h2>
          <p className="text-gray-600">Access flashcards, notes, and resources</p>
        </div>

        {/* Material Types */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-[#3F2768] mx-auto mb-2" />
              <h3 className="font-semibold">Flashcards</h3>
              <p className="text-sm text-gray-600">245 cards</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-[#3F2768] mx-auto mb-2" />
              <h3 className="font-semibold">Notes</h3>
              <p className="text-sm text-gray-600">32 topics</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Materials */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#3F2768] mb-4">Recent Materials</h3>
          <div className="space-y-3">
            {[
              { title: 'Algebra Basics', type: 'Flashcards', subject: 'Mathematics', icon: '📊' },
              { title: 'Chemical Bonds', type: 'Notes', subject: 'Science', icon: '🔬' },
              { title: 'Grammar Rules', type: 'Flashcards', subject: 'English', icon: '📚' },
              { title: 'World War II', type: 'Notes', subject: 'History', icon: '🏛️' }
            ].map((item, index) => (
              <Card key={index} className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3F2768] bg-opacity-10 rounded-full flex items-center justify-center">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.type} • {item.subject}</p>
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
            { icon: BookOpen, label: 'Home', active: false, action: () => onNavigate('home') },
            { icon: BookOpen, label: 'Practice', active: false, action: () => onNavigate('practice') },
            { icon: BookOpen, label: 'Progress', active: false, action: () => onNavigate('progress') },
            { icon: BookOpen, label: 'Library', active: true, action: () => onNavigate('library') },
            { icon: BookOpen, label: 'Profile', active: false, action: () => onNavigate('profile') }
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

export default LibraryPage;
