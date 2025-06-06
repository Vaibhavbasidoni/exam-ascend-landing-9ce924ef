import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Bell,
  Bot,
  User,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BaseMessage {
  id: number;
  type: 'ai' | 'user' | 'summary';
  content: string;
  timestamp: string;
}

type Message = BaseMessage;

interface ChatProps {
  onNavigate: (page: string) => void;
}

const Chat = ({ onNavigate }: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Prepopulate the entire conversation flow exactly as in the screenshots
  useEffect(() => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const convo: Message[] = [
      // 1. User says "Hello"
      {
        id: 1,
        type: 'user',
        content: 'Hello',
        timestamp: now,
      },
      // 2. Assistant lists topics
      {
        id: 2,
        type: 'ai',
        content:
          "Welcome to Class 10 CBSE Grammar Practice!  Here are the topics available for practice:\n\n" +
          "1️⃣ Tenses       2️⃣ Modals       3️⃣ Subject-Verb Concord       4️⃣ Reported Speech       5️⃣ Commands, Requests, Statements, Questions\n\n" +
          "You can choose *one* topic or *all* for this session. Please type your choice (e.g., 'Tenses', 'Modals', or 'All'). Once chosen, we will proceed without asking again.",
        timestamp: now,
      },
      // 3. User picks "1"
      {
        id: 3,
        type: 'user',
        content: '1',
        timestamp: now,
      },
      // 4. Assistant confirms topic chosen
      {
        id: 4,
        type: 'ai',
        content:
          "TOPIC CHOSEN: Tenses\n\n" +
          "Now that you've chosen \"Tenses,\" we will focus on this topic.\n\n" +
          "Are you ready to begin? Type Ready or Go when you are prepared to answer the questions.",
        timestamp: now,
      },
      // 5. User says "ready"
      {
        id: 5,
        type: 'user',
        content: 'ready',
        timestamp: now,
      },
      // 6. Assistant asks Question 1
      {
        id: 6,
        type: 'ai',
        content:
          "Question 1: Transform this statement into an interrogative:\n\n\"Cannot park\"",
        timestamp: now,
      },
      // 7. User responds
      {
        id: 7,
        type: 'user',
        content: 'can not park',
        timestamp: now,
      },
      // 8. Assistant evaluates + feedback, then Question 2
      {
        id: 8,
        type: 'ai',
        content:
          "Evaluation: 1.5/2\n\n" +
          "Feedback: \"Cannot park\" is grammatically correct and conveys the idea of prohibition. However, in this context, a stronger sense of obligation or prohibition is more appropriate. While \"can not\" indicates a lack of permission, another modal verb would better emphasize the rule or law being broken.\n\n" +
          "Correct Answer: \"must not park\" or \"should not park\"\n\n" +
          "\"Must not park\" expresses a strong prohibition, while \"should not park\" suggests a strong recommendation against parking. Either of these would be slightly more fitting than \"cannot\" in this context.\n\n" +
          "Let's proceed to the next question.\n\n" +
          "Question 2: Rewrite the following sentence using a modal verb to express ability:\n\n\"He is able to speak three languages fluently.\"",
        timestamp: now,
      },
      // 9. User asks for explanation
      {
        id: 9,
        type: 'user',
        content: 'i dont know this answer can u xpain',
        timestamp: now,
      },
      // 10. Assistant explains + moves on
      {
        id: 10,
        type: 'ai',
        content:
          "Okay, I can explain it to you.\n\n" +
          "The original sentence, \"He is able to speak three languages fluently,\" expresses the ability to do something. Modal verbs like \"can,\" \"could,\" and \"be able to\" are often used to express ability.\n\n" +
          "In this case, the simplest way to rewrite the sentence using a modal verb is to replace \"is able to\" with \"can.\"\n\n" +
          "Correct Answer: He can speak three languages fluently.\n\n" +
          "This sentence conveys the same meaning as the original but uses the modal verb \"can\" to express the ability directly.\n\n" +
          "Evaluation: 0/2 (Since you indicated you don't know the answer)\n\n" +
          "Now, let's move on to the next topic: Subject-Verb Concord. Type \"Ready\" to continue.",
        timestamp: now,
      },
      // 11. User says "ok"
      {
        id: 11,
        type: 'user',
        content: 'ok',
        timestamp: now,
      },
      // 12. Assistant gives final score + final feedback summary
      {
        id: 12,
        type: 'ai',
        content:
          "Okay, here's your final score and feedback:\n\n" +
          "Final Score:\n" +
          "• Tenses: 1/4\n" +
          "• Modals: 1.5/4\n" +
          "• Subject-Verb Concord: 0.25/4\n" +
          "• Reported Speech: 0.5/4\n" +
          "• Commands, Requests, Statements, Questions: 4/4\n\n" +
          "Total: 7.25/20\n\n" +
          "Final Feedback Summary:\n" +
          "• Strong Areas: You demonstrated a good understanding of identifying commands and converting statements into questions. Your score in \"Commands, Requests, Statements, Questions\" indicates a solid grasp of these concepts.\n\n" +
          "• Weak Areas: Your performance was weaker in Tenses, Subject-Verb Concord, and Reported Speech. This suggests a need for more focused practice in these areas.\n" +
          "  – Tenses: Pay close attention to the nuances of different tenses, especially the future perfect and past perfect continuous. Practice identifying and using them in context.\n" +
          "  – Subject-Verb Concord: Remember to carefully identify the subject of the sentence and ensure that the verb agrees with it in number. Be particularly mindful of sentences with phrases that come between the subject and the verb.\n" +
          "  – Reported Speech: Focus on the rules for changing tenses, pronouns, and time expressions when converting direct speech to reported speech. Pay attention to the specific rules for reporting questions.\n" +
          "  – Modals: While you showed some understanding of modals, further practice is needed to master their usage in different contexts, particularly in expressing obligation and prohibition.\n\n" +
          "To improve, I recommend reviewing the rules for each of these grammar topics and practicing with additional exercises. Pay close attention to the explanations for any mistakes you make, and try to understand the underlying principles. Consistent practice will help you build confidence and accuracy in your grammar skills.",
        timestamp: now,
      },
    ];

    // Show messages one by one with typing effect
    let delay = 0;
    convo.forEach((message, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, message]);
        setCurrentStep(index + 1);
      }, delay);
      delay += index < 2 ? 1000 : 500; // Slower for first few messages
    });
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isSending) return;

    setIsSending(true);
    setIsTyping(true);
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputText,
      timestamp,
    };
    
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');

    // Simulate AI response after delay
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: `Thanks for your message: "${currentInput}". This is an interactive chat demonstration. Try asking me questions about English grammar!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsSending(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-inter">
      {/* Navbar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => onNavigate('home')}
            >
              <ArrowRight className="h-4 w-4 rotate-180 text-blue-600" />
            </Button>
            <div className="text-center">
              <h1 className="text-lg font-bold text-[#3F2768]">English</h1>
              <p className="text-sm text-slate-600 font-medium">Interactive Chat</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 relative">
              <Bell className="h-4 w-4 text-slate-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <span className="text-white text-sm font-bold">S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Banner: Discuss Topic */}
      <div className="max-w-md mx-auto p-4 pt-4">
        <Card className="bg-gradient-to-r from-[#3F2768] to-[#4A2B7A] border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardHeader className="pb-3 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center animate-pulse">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Discuss Topic</CardTitle>
            </div>
            <p className="text-sm text-white/80 mt-1">Ask Questions and Learn With AI assistance</p>
          </CardHeader>
        </Card>
      </div>

      {/* Chat Content */}
      <div className="max-w-md mx-auto p-4 pt-2 pb-32 space-y-6">
        {messages.map((message, idx) => (
          <div
            key={message.id}
            className="space-y-1 animate-fade-in"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            {/* AI message (left-aligned) */}
            {message.type === 'ai' && (
              <div className="w-full flex items-start gap-3">
                <div
                  className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform"
                  title="AI"
                >
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="max-w-[80%]">
                  <div className="bg-gray-200 text-black p-4 rounded-2xl rounded-br-md shadow-xl whitespace-pre-line hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                    <p className="text-sm leading-relaxed font-medium">
                      {message.content}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{message.timestamp}</p>
                </div>
              </div>
            )}

            {/* Student message (right-aligned) */}
            {message.type === 'user' && (
              <div className="w-full flex justify-end items-start gap-3">
                <div className="max-w-[80%] text-right">
                  <div className="bg-gradient-to-r from-[#3F2768] to-[#4A2B7A] text-white p-4 rounded-2xl rounded-bl-md shadow-xl whitespace-pre-line hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                    <p className="text-sm leading-relaxed font-medium">
                      {message.content}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 text-right">
                    {message.timestamp}
                  </p>
                </div>
                <div
                  className="w-8 h-8 bg-[#3F2768] rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform"
                  title="Student"
                >
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            )}

            {/* Final summary (full-width, centered) */}
            {message.type === 'summary' && (
              <Card className="bg-gradient-to-br from-[#EDEBF7] to-[#D9D2F7] border-[#B0A6C9] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#3F2768] rounded-full flex items-center justify-center animate-pulse">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-[#3F2768] text-lg">
                      Discussion Summary
                    </h4>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3 border-l-4 border-[#3F2768] shadow-inner">
                    <div className="flex items-start gap-2">
                      <MessageCircle className="h-4 w-4 text-[#3F2768] mt-0.5 flex-shrink-0" />
                      <p className="text-[#3F2768] text-sm font-medium whitespace-pre-line">
                        {message.content}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#3F2768] mt-3 text-right font-medium">
                    {message.timestamp}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="w-full flex items-start gap-3 animate-fade-in">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="max-w-[80%]">
              <div className="bg-gray-200 text-black p-4 rounded-2xl rounded-br-md shadow-xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area - Interactive */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-lg">
        <div className="max-w-md mx-auto space-y-3">
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="min-h-[60px] border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none font-medium transition-all duration-200 hover:border-blue-300"
            disabled={isSending}
          />
          <div className="flex justify-end">
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isSending}
              className="bg-gradient-to-r from-[#3F2768] to-[#4A2B7A] shadow-xl font-semibold text-white hover:shadow-2xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-2">{isSending ? 'Sending...' : 'Send'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
