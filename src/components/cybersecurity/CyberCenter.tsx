import React, { useState } from 'react';
import { Shield, ShieldAlert, Lock, Terminal, CheckCircle2, ArrowRight, AlertTriangle, Key, Cpu, Eye } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { mockCyberLabs } from '../../data/mockData';

export const CyberCenter: React.FC = () => {
  const { selectedLabId, setSelectedLabId, labs } = useCourse();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [userInput, setUserInput] = useState<string>('');
  const [labLogs, setLabLogs] = useState<string[]>([
    'Simulated Target Gateway v2.4 initialized in isolated sandbox.',
    'System status: ONLINE. Listening on localhost:8080.',
    'Ready for defensive security evaluation.'
  ]);

  const activeLab = labs.find(l => l.id === selectedLabId) || labs[0];

  const handleExecuteStep = () => {
    if (!userInput.trim()) return;
    const input = userInput;
    setUserInput('');
    setLabLogs(prev => [
      ...prev,
      `> Executed command: ${input}`,
      `Evaluating payload security parameters...`,
      `[SANDBOX DEFENSE AUDIT] Input neutralized. Defense rule validated!`
    ]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="rounded-3xl bg-slate-950 text-white p-8 lg:p-10 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
          <Shield className="w-4 h-4" />
          <span>Ethical & Defensive Security Sandbox</span>
        </div>
        <h1 className="text-3xl font-black">Cybersecurity Learning Center</h1>
        <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Master ethical defensive security, network monitoring, Linux administration, vulnerability mitigation, and secure API architecture in strictly legal, isolated sandbox environments.
        </p>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-amber-400">Strict Legal & Ethical Notice</h4>
            <p className="text-[11px] leading-relaxed text-amber-200/90">
              {activeLab.legalNotice} All exercises are strictly synthetic sandbox simulations created to teach software engineers how to audit and protect their own systems.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lab Selector Sidebar */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            Interactive Defensive Labs
          </h3>
          <div className="space-y-3">
            {labs.map((lab) => (
              <div
                key={lab.id}
                onClick={() => {
                  setSelectedLabId(lab.id);
                  setActiveStep(1);
                  setLabLogs([`Loaded lab environment: ${lab.title}`]);
                }}
                className={`p-4 rounded-2xl border cursor-pointer transition space-y-2 ${
                  activeLab.id === lab.id
                    ? 'bg-emerald-500/10 border-emerald-500 text-slate-900 dark:text-white'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-bold">
                    {lab.difficulty}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{lab.category}</span>
                </div>
                <h4 className="font-bold text-sm">{lab.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Lab Execution Terminal */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase">{activeLab.category}</span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{activeLab.title}</h2>
              </div>
              <span className="text-xs font-mono text-slate-400">Target: {activeLab.targetSystem}</span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Objective:</strong> {activeLab.objective}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200">
              <span className="font-bold text-emerald-500">Scenario Context:</span> {activeLab.scenarioText}
            </div>
          </div>

          {/* Interactive Simulated Terminal */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Defensive Sandbox Terminal</span>
              </span>
              <span className="text-[10px] text-slate-500">Isolated Container Session</span>
            </div>

            {/* Terminal Output Logs */}
            <div className="h-48 overflow-y-auto space-y-1.5 p-2 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400 text-[11px] leading-relaxed">
              {labLogs.map((log, idx) => (
                <p key={idx}>{log}</p>
              ))}
            </div>

            {/* Terminal Input Bar */}
            <div className="flex gap-2">
              <span className="text-emerald-400 font-bold self-center">$</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleExecuteStep()}
                placeholder="Enter sanitization input payload (e.g. ' OR 1=1 --)"
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleExecuteStep}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition"
              >
                Execute
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
