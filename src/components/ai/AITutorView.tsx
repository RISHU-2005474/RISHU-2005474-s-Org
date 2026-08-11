import React, { useState } from 'react';
import { Brain, Sparkles, Send, Terminal, HelpCircle, Code2, Bug, CheckCircle2, RotateCcw } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AITutorView: React.FC = () => {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState<string>('');
  const [mode, setMode] = useState<'general' | 'explain' | 'debug' | 'hint'>('general');
  const [chatLog, setChatLog] = useState<{ role: 'user' | 'ai'; content: string; time: string }[]>([
    {
      role: 'ai',
      content: `Welcome to CodeVerse AI Tutor! Powered by Gemini 3.6 Flash. How can I help you master computer science today? You can ask me to explain algorithms, debug error messages, or provide practice hints!`,
      time: 'Just now'
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const presetQuestions = [
    "Explain recursion with a simple real-world analogy.",
    "Why do we use Hash Maps for O(1) lookup speed?",
    "What is the difference between SQL and NoSQL databases?",
    "Give me a beginner practice question for Python loops."
  ];

  const handleSendPrompt = async (textToSend?: string) => {
    const inputMsg = textToSend || prompt;
    if (!inputMsg.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatLog(prev => [...prev, { role: 'user', content: inputMsg, time: timeStr }]);
    if (!textToSend) setPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: inputMsg,
          mode,
          studentLevel: user?.level || 'Developer'
        })
      });
      const data = await res.json();
      setChatLog(prev => [
        ...prev,
        { role: 'ai', content: data.reply || "I am glad to help you understand this concept!", time: timeStr }
      ]);
    } catch {
      setChatLog(prev => [
        ...prev,
        {
          role: 'ai',
          content: `Here is a helpful concept breakdown: In computer science, always verify your base cases in recursive functions and test boundary values (0, negative numbers, null) to prevent unexpected errors.`,
          time: timeStr
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-950 text-white p-8 lg:p-10 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
          <Brain className="w-4 h-4" />
          <span>Gemini 3.6 Flash Powered Assistant</span>
        </div>
        <h1 className="text-3xl font-black">CodeVerse AI Tutor</h1>
        <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
          Ask questions, debug errors, request practice problems, and get step-by-step guidance tailored to your learning pace.
        </p>

        {/* Mode Selectors */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setMode('general')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'general' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>General Q&A</span>
          </button>
          <button
            onClick={() => setMode('debug')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'debug' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Bug className="w-3.5 h-3.5" />
            <span>Debug Code Error</span>
          </button>
          <button
            onClick={() => setMode('hint')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'hint' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Get Practice Hint</span>
          </button>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[560px] shadow-lg">
        
        {/* Preset Prompt Chips */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-bold uppercase text-slate-400 shrink-0 font-mono">Suggested Questions:</span>
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendPrompt(q)}
              className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 shrink-0 hover:border-cyan-500 transition"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[85%] space-y-1 ${
                msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                {msg.role === 'ai' ? (
                  <span className="text-cyan-500 font-bold flex items-center gap-1">
                    <Brain className="w-3 h-3" /> CodeVerse AI
                  </span>
                ) : (
                  <span>You ({user?.name || 'Student'})</span>
                )}
                <span>• {msg.time}</span>
              </div>
              <div
                className={`p-4 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-cyan-500 text-xs animate-pulse max-w-xs">
              AI Tutor is generating response...
            </div>
          )}
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
            placeholder="Ask AI Tutor anything about programming, algorithms, or computer science..."
            className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            onClick={() => handleSendPrompt()}
            disabled={isLoading}
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center gap-2 shrink-0"
          >
            <span>Send</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
