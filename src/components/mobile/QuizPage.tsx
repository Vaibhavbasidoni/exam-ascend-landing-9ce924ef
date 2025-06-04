
import React, { useState } from 'react';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CelebrationModal from './CelebrationModal';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

const QuizPage = ({ onNavigate }: QuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(280); // 4:40 in seconds
  const [answers, setAnswers] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);

  const questions = [
    {
      question: "What is 15 + 28?",
      options: ["41", "43", "45", "47"],
      correct: 1
    },
    {
      question: "If x + 5 = 12, what is x?",
      options: ["5", "7", "8", "9"],
      correct: 1
    },
    {
      question: "What is 3 × 8?",
      options: ["21", "24", "27", "30"],
      correct: 1
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer];
      setAnswers(newAnswers);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed - show celebration
      setShowCelebration(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const handleCelebrationClose = () => {
    setShowCelebration(false);
    onNavigate('math-journey');
  };

  return (
    <div className="w-[375px] h-[812px] bg-gradient-to-b from-blue-100 to-purple-100 mx-auto border border-gray-200 relative overflow-hidden">
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
          <button 
            onClick={() => onNavigate('math-journey')}
            className="p-2 hover:bg-white/50 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            <span className="text-lg font-bold text-purple-600">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-2">
        <div className="w-full bg-white/50 rounded-full h-3 shadow-inner">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-purple-700 mt-1 font-medium">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4">
              {questions[currentQuestion].question}
            </h2>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all transform hover:scale-105 border-2 rounded-2xl ${
                selectedAnswer === index 
                  ? 'border-purple-500 bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg' 
                  : 'hover:bg-white/80 bg-white/60 border-white/50 hover:shadow-md'
              }`}
              onClick={() => setSelectedAnswer(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full border-3 flex items-center justify-center transition-all ${
                    selectedAnswer === index 
                      ? 'border-purple-500 bg-purple-500' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedAnswer === index && <CheckCircle className="w-5 h-5 text-white" />}
                  </div>
                  <span className={`text-lg font-medium ${
                    selectedAnswer === index ? 'text-purple-800' : 'text-gray-800'
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
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg font-bold rounded-2xl shadow-lg transform transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        </div>
      </div>

      {/* Celebration Modal */}
      <CelebrationModal
        isOpen={showCelebration}
        onClose={handleCelebrationClose}
        score={calculateScore()}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default QuizPage;
