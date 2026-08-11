import React, { useState } from 'react';
import {
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Brain,
  Download,
  Bookmark,
  Send,
  HelpCircle,
  Terminal,
  Sparkles
} from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { useAuth } from '../../context/AuthContext';

export const LessonPlayer: React.FC = () => {
  const { selectedCourseId, selectedLessonId, courses, setSelectedLessonId, setCurrentPage } = useCourse();
  const { completeLesson } = useAuth();
  
  const course = courses.find(c => c.id === selectedCourseId) || courses[0];
  const allLessons = course.modules.flatMap(m => m.lessons);
  const currentLessonIndex = allLessons.findIndex(l => l.id === selectedLessonId);
  const lesson = allLessons[currentLessonIndex >= 0 ? currentLessonIndex : 0] || allLessons[0] || {
    id: 'py-les-1',
    title: '1.1 Setting Up Python 3.12 & Environment Variables',
    duration: '18 min',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
    readingContent: 'Python is an interpreted, high-level, general-purpose programming language. Learn how to configure environment variables and PATH.'
  };

  const [aiQuery, setAiQuery] = useState('');
  const [aiChat, setAiChat] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { sender: 'ai', text: `Hello! I am CodeVerse AI Tutor. Need help understanding "${lesson.title}" or want a quick code explanation?` }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleAskAi = async () => {
    if (!aiQuery.trim()) return;
    const userMsg = aiQuery;
    setAiChat(prev => [...prev, { sender: 'user', text: userMsg }]);
    setAiQuery('');
    setIsAiLoading(true);

    try {
      const res = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMsg,
          codeContext: { code: lesson.readingContent || '', language: 'python' }
        })
      });
      const data = await res.json();
      setAiChat(prev => [...prev, { sender: 'ai', text: data.reply || "I am glad to help you!" }]);
    } catch {
      setAiChat(prev => [...prev, { sender: 'ai', text: "Here is a quick hint: Make sure to check your syntax and variable types!" }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setSelectedLessonId(allLessons[currentLessonIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setSelectedLessonId(allLessons[currentLessonIndex - 1].id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <button
          onClick={() => setCurrentPage('course-details')}
          className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Course Syllabus</span>
        </button>
        <div className="text-xs font-mono font-semibold text-cyan-500">
          Lesson {currentLessonIndex + 1} of {allLessons.length || 1}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Lesson Player Container (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Main Media or Reading Display */}
          <div className="rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 shadow-xl">
            {lesson.type === 'video' ? (
              <div className="aspect-video w-full">
                <iframe
                  src={lesson.videoUrl || "https://www.youtube.com/embed/kqtD5dpn9C8"}
                  title={lesson.title}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            ) : lesson.type === 'quiz' ? (
              <div className="p-8 space-y-6 text-white">
                <h3 className="text-xl font-bold">Interactive Module Quiz</h3>
                {lesson.quizQuestions?.map((q) => (
                  <div key={q.id} className="space-y-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <p className="font-semibold text-sm">{q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => setQuizAnswer(oIdx)}
                          className={`w-full text-left p-3 rounded-lg border transition ${
                            quizAnswer === oIdx ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {quizAnswer !== null && (
                      <button
                        onClick={() => setQuizSubmitted(true)}
                        className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg text-xs"
                      >
                        Submit Answer
                      </button>
                    )}
                    {quizSubmitted && (
                      <p className="text-emerald-400 font-semibold pt-2">Correct! {q.explanation}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-slate-200 font-sans space-y-4 leading-relaxed text-sm">
                <h2 className="text-2xl font-bold text-white">{lesson.title}</h2>
                <div className="prose prose-invert max-w-none text-slate-300">
                  <p>{lesson.readingContent}</p>
                  {lesson.codeStarter && (
                    <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300">
                      <code>{lesson.codeStarter}</code>
                    </pre>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Lesson Actions & Notes */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">{lesson.title}</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{course.title}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => completeLesson(lesson.id)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 text-white flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark Complete (+50 XP)</span>
                </button>
              </div>
            </div>

            {/* Previous / Next Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentLessonIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Lesson</span>
              </button>
              <button
                onClick={handleNext}
                disabled={currentLessonIndex >= allLessons.length - 1}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-white disabled:opacity-40 flex items-center gap-1"
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Sidebar: AI Tutor & Syllabus Drawer */}
        <div className="space-y-6">
          
          {/* AI Tutor Chat Drawer */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 flex flex-col h-[500px]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-sm">CodeVerse AI Tutor</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Online</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs font-sans">
              {aiChat.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl max-w-[90%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-200 border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isAiLoading && (
                <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 text-xs animate-pulse">
                  AI Tutor is thinking...
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2 border-t border-slate-800">
              <input
                type="text"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                placeholder="Ask AI Tutor about this lesson..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleAskAi}
                className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
