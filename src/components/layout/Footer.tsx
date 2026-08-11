import React from 'react';
import { Code2, Github, Linkedin, Youtube, Twitter, ShieldCheck, Heart } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';

export const Footer: React.FC = () => {
  const { setCurrentPage } = useCourse();

  return (
    <footer className="bg-[#050507] text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#08080a] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white font-mono tracking-tight">
                EDUCATION WORLD
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Master Computer Science, Full-Stack Software Engineering, Artificial Intelligence, and Ethical Cybersecurity through interactive sandbox environments and AI guidance.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] text-violet-300 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
              <span>Learn. Code. Build. Secure.</span>
            </div>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition p-1">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Learn Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Learn
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentPage('courses')} className="hover:text-white transition">
                  Courses Catalog
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('courses')} className="hover:text-white transition">
                  Programming Languages
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('ai-tutor')} className="hover:text-white transition">
                  AI & Machine Learning
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('cybersecurity')} className="hover:text-white transition">
                  Cybersecurity Center
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('projects')} className="hover:text-white transition">
                  Hands-on Projects
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('challenges')} className="hover:text-white transition">
                  Coding Challenges
                </button>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-white transition">
                  About CodeVerse
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">
                  Contact Support
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition">
                  Pricing & Subscriptions
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('instructor')} className="hover:text-white transition">
                  Become an Instructor
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('admin')} className="hover:text-white transition">
                  Admin Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentPage('community')} className="hover:text-white transition">
                  Student Community Forum
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('playground')} className="hover:text-white transition">
                  Online Code Playground
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('certificate-verify')} className="hover:text-white transition">
                  Certificate Verification
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('dashboard')} className="hover:text-white transition">
                  Student Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Security Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Legal & Security
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#ethical-policy" className="hover:text-white transition">Ethical Security Policy</a></li>
              <li><a href="#cookies" className="hover:text-white transition">Cookie Settings</a></li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-500">
              Cybersecurity labs are designed solely for authorized educational environments.
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 CODEVERSE ACADEMY. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for developers world-wide</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
