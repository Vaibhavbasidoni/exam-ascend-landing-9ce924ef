
import React, { useState } from 'react';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

const QuizPage = ({ onNavigate }: QuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(280); // 4:40 in seconds

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: 1
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed
      onNavigate('practice');
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
          <button 
            onClick={() => onNavigate('practice')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#3F2768]" />
            <span className="text-lg font-bold text-[#3F2768]">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-[#3F2768] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {questions[currentQuestion].question}
            </h2>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all ${
                selectedAnswer === index 
                  ? 'border-[#3F2768] bg-[#3F2768] bg-opacity-10' 
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => setSelectedAnswer(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index 
                      ? 'border-[#3F2768] bg-[#3F2768]' 
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-lg ${
                    selectedAnswer === index ? 'text-[#3F2768] font-medium' : 'text-gray-900'
                  }`}>
                    {option}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button 
            className="w-full bg-[#3F2768] hover:bg-[#2F1D58] text-white py-3 text-lg"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
