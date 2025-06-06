
import React, { useState } from 'react';
import MobileApp from './MobileApp';
import PracticePage from './mobile/PracticePage';
import ProgressPage from './mobile/ProgressPage';
import LibraryPage from './mobile/LibraryPage';
import ProfilePage from './mobile/ProfilePage';
import QuizPage from './mobile/QuizPage';
import MathJourneyPage from './mobile/MathJourneyPage';
import Chat from './Chat';

const MobileAppRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'practice':
        return <PracticePage onNavigate={setCurrentPage} />;
      case 'progress':
        return <ProgressPage onNavigate={setCurrentPage} />;
      case 'library':
        return <LibraryPage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentPage} />;
      case 'quiz':
        return <QuizPage onNavigate={setCurrentPage} />;
      case 'math-journey':
        return <MathJourneyPage onNavigate={setCurrentPage} />;
      case 'chat':
        return <Chat onNavigate={setCurrentPage} />;
      default:
        return <MobileApp onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
};

export default MobileAppRouter;
