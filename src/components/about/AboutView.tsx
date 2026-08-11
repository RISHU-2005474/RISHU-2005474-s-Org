import React, { useState } from 'react';
import { Code2, Sparkles, Send, Shield, Globe, Award, Heart } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-500 font-mono border border-cyan-500/20">
          Our Mission
        </span>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Democratizing Next-Gen Computer Science Education</h1>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          CodeVerse Academy was founded on a simple principle: software engineering, artificial intelligence, and cybersecurity are best learned by building real systems in interactive, instant environments with 24/7 AI tutoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-center">
          <Code2 className="w-8 h-8 text-cyan-500 mx-auto" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Interactive Sandboxes</h3>
          <p className="text-xs text-slate-500">In-browser container execution for Python, JS, C++, SQL, and Go without setup hassle.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-center">
          <Sparkles className="w-8 h-8 text-purple-500 mx-auto" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Gemini 3.6 Flash AI Tutor</h3>
          <p className="text-xs text-slate-500">24/7 AI assistant that explains code step-by-step, debugs errors, and offers practice hints.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-center">
          <Shield className="w-8 h-8 text-emerald-500 mx-auto" />
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Ethical Cybersecurity</h3>
          <p className="text-xs text-slate-500">Strictly legal, isolated defensive labs teaching Web Security, SQLi, and Password Entropy.</p>
        </div>
      </div>
    </div>
  );
};

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Contact CodeVerse Team</h1>
        <p className="text-xs text-slate-500">Have questions about our curriculum, campus partnerships, or enterprise plans?</p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2 text-xs font-bold">
          <p>Thank you for reaching out, {name}! Our academic support team will reply to {email} within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Alex Rivers"
              className="w-full p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="alex@example.com"
              className="w-full p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="How can we help your learning journey?"
              className="w-full h-32 p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none resize-none"
            />
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};
