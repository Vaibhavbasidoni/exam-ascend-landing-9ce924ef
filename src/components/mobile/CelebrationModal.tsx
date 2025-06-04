
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Star } from 'lucide-react';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  totalQuestions: number;
}

const CelebrationModal = ({ isOpen, onClose, score, totalQuestions }: CelebrationModalProps) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (isOpen) {
      setShowFireworks(true);
      const timer = setTimeout(() => setShowFireworks(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! 🌟";
    if (percentage >= 80) return "Excellent Work! 🎉";
    if (percentage >= 70) return "Great Job! 👏";
    if (percentage >= 60) return "Good Effort! 👍";
    return "Keep Practicing! 💪";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      {/* Fireworks Animation - within modal bounds */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full animate-ping"
              style={{
                left: `${30 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`spark-${i}`}
              className="absolute text-yellow-400 text-lg animate-bounce"
              style={{
                left: `${25 + (i * 8)}%`,
                top: `${25 + (i * 6)}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s'
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      {/* Celebration Modal */}
      <div className="bg-white rounded-2xl p-8 m-6 max-w-sm w-full shadow-2xl transform animate-scale-in">
        <div className="text-center">
          {/* Trophy Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
            <div className="text-4xl">
              {percentage >= 90 ? '🏆' : percentage >= 70 ? '🥈' : percentage >= 50 ? '🥉' : '🎯'}
            </div>
          </div>

          {/* Congratulations Text */}
          <h2 className="text-3xl font-bold text-purple-800 mb-2 animate-fade-in">
            Congratulations!
          </h2>
          
          <p className="text-xl font-bold text-purple-600 mb-6 animate-fade-in">
            {getPerformanceMessage()}
          </p>

          {/* Score Display */}
          <div className="bg-blue-500 rounded-2xl p-6 mb-6 text-white shadow-lg">
            <div className="text-5xl font-bold mb-2">{percentage}%</div>
            <div className="text-lg font-medium">
              {score} out of {totalQuestions} correct
            </div>
          </div>

          {/* Stars Animation */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((star) => (
              <div
                key={star}
                className={`text-3xl animate-bounce ${
                  percentage >= star * 30 ? 'text-yellow-400' : 'text-gray-300'
                }`}
                style={{ animationDelay: `${star * 0.2}s` }}
              >
                ⭐
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={onClose}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 text-lg font-bold rounded-xl shadow-lg transform transition-all hover:scale-105"
            >
              Continue Adventure
            </Button>
            
            <Button 
              onClick={onClose}
              variant="outline"
              className="w-full border-2 border-purple-300 text-purple-700 hover:bg-purple-50 py-3 text-lg font-bold rounded-xl"
            >
              Review Answers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrationModal;
