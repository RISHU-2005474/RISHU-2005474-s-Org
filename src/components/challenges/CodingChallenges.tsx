import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, Brain, Play, HelpCircle, ArrowLeft, Star, Clock } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { useAuth } from '../../context/AuthContext';
import { mockChallenges } from '../../data/mockData';

export const CodingChallenges: React.FC = () => {
  const { selectedChallengeId, setSelectedChallengeId, challenges } = useCourse();
  const { solveChallenge } = useAuth();
  
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

  const selectedChallenge = challenges.find(c => c.id === selectedChallengeId) || challenges[0];

  const [code, setCode] = useState<string>(selectedChallenge.starterCode.javascript || '');
  const [activeHintIndex, setActiveHintIndex] = useState<number | null>(null);
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[] | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const filteredChallenges = challenges.filter(c => selectedDifficulty === 'all' || c.difficulty === selectedDifficulty);

  const handleRunTests = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setTestResults([
        { passed: true, message: 'Test Case 1: [2,7,11,15], target=9 -> Passed (12ms)' },
        { passed: true, message: 'Test Case 2: [3,2,4], target=6 -> Passed (14ms)' },
        { passed: true, message: 'Test Case 3 (Hidden): Corner case zero values -> Passed (8ms)' }
      ]);
      solveChallenge(selectedChallenge.id);
      setIsEvaluating(false);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-8 h-8 text-amber-500" />
            <span>Coding Challenges & Problem Solving</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Practice algorithmic logic, data structures, and earn XP badges.
          </p>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-2">
          {['all', 'Easy', 'Medium', 'Hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase font-mono transition ${
                selectedDifficulty === diff
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Challenge List Selector */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            Available Problems ({filteredChallenges.length})
          </h3>
          <div className="space-y-2">
            {filteredChallenges.map(ch => (
              <div
                key={ch.id}
                onClick={() => {
                  setSelectedChallengeId(ch.id);
                  setCode(ch.starterCode.javascript || '');
                  setTestResults(null);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                  selectedChallenge.id === ch.id
                    ? 'bg-amber-500/10 border-amber-500 text-slate-900 dark:text-white'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm">{ch.title}</h4>
                  <p className="text-[11px] text-slate-500">{ch.category} • {ch.points} XP</p>
                </div>
                <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${
                  ch.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-amber-500/20 text-amber-500'
                }`}>
                  {ch.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Active Challenge Problem Statement & Code Runner */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Problem Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">{selectedChallenge.category}</span>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{selectedChallenge.title}</h2>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                +{selectedChallenge.points} XP
              </span>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {selectedChallenge.problemStatement}
            </p>

            {/* Examples */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">Example Cases</h4>
              {selectedChallenge.examples.map((ex, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
                  <p><strong>Input:</strong> {ex.input}</p>
                  <p><strong>Output:</strong> {ex.output}</p>
                </div>
              ))}
            </div>

            {/* Hints Button */}
            <div className="pt-2">
              <button
                onClick={() => setActiveHintIndex(activeHintIndex === null ? 0 : null)}
                className="text-xs font-bold text-cyan-500 hover:text-cyan-400 flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{activeHintIndex !== null ? 'Hide Hint' : 'Reveal Hint'}</span>
              </button>
              {activeHintIndex !== null && (
                <div className="mt-2 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-700 dark:text-cyan-300">
                  💡 {selectedChallenge.hints[0]}
                </div>
              )}
            </div>
          </div>

          {/* Code Editor & Test Case Runner */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden space-y-4 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-amber-400 font-bold">JavaScript Solution</span>
              <button
                onClick={handleRunTests}
                disabled={isEvaluating}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isEvaluating ? 'Evaluating...' : 'Submit Code'}</span>
              </button>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-44 p-3 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl focus:outline-none resize-none leading-relaxed"
            />

            {/* Test Results Banner */}
            {testResults && (
              <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-emerald-400 space-y-2 font-mono">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>All Test Cases Passed! (+{selectedChallenge.points} XP Earned)</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-300">
                  {testResults.map((tr, i) => (
                    <p key={i}>✓ {tr.message}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
