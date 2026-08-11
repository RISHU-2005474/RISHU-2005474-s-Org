import React from 'react';
import { CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';

export const PricingView: React.FC = () => {
  const { setCurrentPage } = useCourse();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 font-mono">
          Flexible Academy Plans
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Invest in Your Technology Career</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Get unlimited access to 200+ courses, interactive sandboxes, ethical cybersecurity labs, and 24/7 AI tutoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* FREE */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Free Scholar</h3>
            <p className="text-xs text-slate-500">Perfect for exploring programming foundations.</p>
            <div className="text-4xl font-black text-slate-900 dark:text-white">Free <span className="text-xs font-normal text-slate-400">/ forever</span></div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Access to 20+ foundation courses</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> In-browser coding playground</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Basic community forum access</li>
            </ul>
          </div>
          <button onClick={() => setCurrentPage('courses')} className="w-full py-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">Get Started Free</button>
        </div>

        {/* PRO */}
        <div className="p-8 rounded-3xl bg-slate-950 text-white border-2 border-cyan-500 space-y-6 relative shadow-2xl shadow-cyan-500/10 flex flex-col justify-between">
          <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500 text-slate-950 uppercase tracking-wider">Most Popular</span>
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Pro Academy</h3>
            <p className="text-xs text-slate-400">Complete access for aspiring software engineers.</p>
            <div className="text-4xl font-black">₹0 <span className="text-xs font-normal text-slate-400">/ forever</span></div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Unlimited access to 200+ courses</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 24/7 Gemini 3.6 Flash AI Tutor</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Ethical Cybersecurity Legal Labs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Digital Certificates with QR Verification</li>
            </ul>
          </div>
          <button onClick={() => setCurrentPage('courses')} className="w-full py-3 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition">Start 7-Day Free Trial</button>
        </div>

        {/* TEAM */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Team & Campus</h3>
            <p className="text-xs text-slate-500">For universities, coding bootcamps, & engineering teams.</p>
            <div className="text-4xl font-black text-slate-900 dark:text-white">₹0 <span className="text-xs font-normal text-slate-400">/ forever</span></div>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Everything in Pro Academy</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Team progress analytics & drop-off charts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Instructor course builder studio</li>
            </ul>
          </div>
          <button onClick={() => setCurrentPage('contact')} className="w-full py-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">Request Campus Quote</button>
        </div>

      </div>
    </div>
  );
};
