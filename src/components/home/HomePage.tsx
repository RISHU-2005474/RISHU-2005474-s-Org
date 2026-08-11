import React, { useState } from 'react';
import {
  Code2,
  Sparkles,
  Shield,
  Brain,
  Terminal,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Award,
  Play,
  Zap,
  ChevronDown,
  Lock,
  Cpu,
  Layers,
  Star,
  Globe
} from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { mockCategories, mockLanguages, mockCourses, mockChallenges, mockCyberLabs, mockProjects } from '../../data/mockData';

export const HomePage: React.FC = () => {
  const { setCurrentPage, navigateToCourse, navigateToChallenge, navigateToLab } = useCourse();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const stats = [
    { label: 'Enrolled Students', value: '10,000+', icon: <Users className="w-5 h-5 text-cyan-400" /> },
    { label: 'Interactive Courses', value: '200+', icon: <BookOpen className="w-5 h-5 text-blue-400" /> },
    { label: 'Supported Technologies', value: '50+', icon: <Cpu className="w-5 h-5 text-indigo-400" /> },
    { label: 'Coding Challenges', value: '1,000+', icon: <Trophy className="w-5 h-5 text-amber-400" /> },
  ];

  const faqs = [
    {
      q: "Is CodeVerse Academy suitable for complete beginners?",
      a: "Yes! CodeVerse Academy offers guided paths starting from absolute zero — covering computer logic, syntax fundamentals, and interactive sandbox practice with step-by-step AI hints."
    },
    {
      q: "How does the in-browser Coding Playground and Sandbox work?",
      a: "Our sandbox provides isolated container execution for languages including Python, JavaScript, C++, Java, and SQL. You can write, execute, test, and debug code directly in your browser with real-time output and CPU/memory metrics."
    },
    {
      q: "Are the Cybersecurity Labs legal and safe?",
      a: "Absolutely. All cybersecurity modules are conducted in strictly isolated, synthetic sandbox environments designed specifically for ethical, defensive, and authorized learning."
    },
    {
      q: "How does CodeVerse AI Tutor assist my learning?",
      a: "CodeVerse AI Tutor is powered by Gemini 3.6 Flash. It provides step-by-step code explanations, pinpoints subtle bugs, generates practice questions, and gives hints without spoiling answers."
    },
    {
      q: "Do I receive verifiable certificates upon course completion?",
      a: "Yes! Every completed course generates a unique digital certificate complete with verification QR code and a public shareable URL."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-16">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Next-Gen Computer Science & AI Education</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Master Technology. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                Build the Future.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              Learn programming, software development, artificial intelligence, databases, cloud computing, and ethical cybersecurity through structured courses, hands-on projects, coding challenges, and AI-powered learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage('courses')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('courses')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-zinc-100 bg-[#14141c] border border-zinc-800 hover:bg-[#1a1a24] hover:border-zinc-700 transition flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Explore Courses</span>
              </button>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              {stats.map((s, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#121218]/90 border border-zinc-800/80 shadow-lg shadow-black/40 backdrop-blur-md">
                  <div className="flex items-center justify-center gap-2 text-white font-extrabold text-2xl font-mono">
                    {s.icon}
                    <span>{s.value}</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED / TECHNOLOGY STACK TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          Learn Industry Standard Technologies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80 text-sm font-bold text-slate-600 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-cyan-500" /> Python</span>
          <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4 text-amber-500" /> JavaScript</span>
          <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-blue-500" /> C++</span>
          <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-red-500" /> Java</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500" /> Cybersecurity</span>
          <span className="flex items-center gap-1.5"><Brain className="w-4 h-4 text-purple-500" /> Gemini AI</span>
          <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-sky-500" /> React & Node</span>
        </div>
      </section>

      {/* 3. POPULAR CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest font-mono">Curriculum Categories</span>
          <h2 className="text-3xl font-extrabold text-white">Explore What You Want To Build</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setCurrentPage('courses')}
              className="p-5 rounded-2xl bg-[#121218] border border-zinc-800/80 hover:border-violet-500/40 hover:bg-[#181822] hover:shadow-xl hover:shadow-violet-500/10 transition cursor-pointer group space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-violet-300 transition">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 text-xs font-medium text-zinc-500">
                <span>{cat.courseCount} Courses</span>
                <span className="text-violet-400 flex items-center gap-1 group-hover:translate-x-1 transition">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROGRAMMING LANGUAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest font-mono">Languages & Frameworks</span>
          <h2 className="text-3xl font-extrabold text-white">Master Code in Any Language</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mockLanguages.map((lang) => (
            <div
              key={lang.id}
              onClick={() => setCurrentPage('courses')}
              className="p-4 rounded-2xl bg-[#121218] border border-zinc-800/80 text-center hover:border-violet-500/40 hover:bg-[#181822] cursor-pointer transition space-y-2 group"
            >
              <div className="text-3xl group-hover:scale-125 transition duration-200">{lang.logo}</div>
              <h4 className="font-bold text-sm text-white">{lang.name}</h4>
              <p className="text-[10px] text-zinc-400 font-mono">{lang.level}</p>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300">
                {lang.courseCount} Courses
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. POPULAR COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest font-mono">Featured Courses</span>
            <h2 className="text-3xl font-extrabold text-white">Start Building Today</h2>
          </div>
          <button
            onClick={() => setCurrentPage('courses')}
            className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1"
          >
            <span>View All 200+ Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.slice(0, 6).map((course) => (
            <div
              key={course.id}
              onClick={() => navigateToCourse(course.id)}
              className="rounded-2xl bg-[#121218] border border-zinc-800/80 overflow-hidden hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 transition duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {course.isFree ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-sm">
                        FREE
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-sm">
                        ${course.price}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 text-slate-200 backdrop-blur-sm">
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400">({course.ratingCount.toLocaleString()})</span>
                    <span className="text-slate-500 ml-auto">{course.duration}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-500 transition line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {course.subtitle}
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <img src={course.instructor.avatar} alt={course.instructor.name} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">{course.instructor.name}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToCourse(course.id);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-cyan-500 group-hover:text-white transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CODING PLAYGROUND PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-mono">
                Interactive Playground
              </span>
              <h2 className="text-3xl font-extrabold">Write Code. Test Real Outputs.</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Practice Python, JavaScript, C++, Java, and SQL right inside your browser with execution limits, CPU/memory stats, and instant AI debugging suggestions.
              </p>
              <button
                onClick={() => setCurrentPage('playground')}
                className="px-6 py-3 rounded-xl font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition flex items-center gap-2 text-xs"
              >
                <Terminal className="w-4 h-4" />
                <span>Open Coding Playground</span>
              </button>
            </div>

            {/* Simulated Playground Card */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-cyan-400 font-semibold">Python 3.12 Sandbox</span>
                <span className="text-emerald-400 text-[10px]">● Ready</span>
              </div>
              <pre className="text-slate-300 leading-relaxed">
                <span className="text-purple-400">def</span> <span className="text-blue-400">solve_problem</span>(data):{"\n"}
                {"    "}<span className="text-slate-500"># CodeVerse Sandbox execution</span>{"\n"}
                {"    "}result = [x * 2 <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> data]{"\n"}
                {"    "}<span className="text-purple-400">return</span> result{"\n\n"}
                <span className="text-amber-400">print</span>(solve_problem([1, 2, 3, 4]))
              </pre>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 text-[11px]">
                Output: [2, 4, 6, 8]{"\n"}
                <span className="text-slate-500">Execution time: 14ms | Memory: 12MB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CYBERSECURITY CENTER PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-indigo-500/20 p-8 lg:p-12 text-white space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-2">
                <Lock className="w-4 h-4" />
                <span>Ethical & Defensive Sandbox</span>
              </div>
              <h2 className="text-3xl font-extrabold">Cybersecurity Defense Center</h2>
            </div>
            <button
              onClick={() => setCurrentPage('cybersecurity')}
              className="px-6 py-3 rounded-xl font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition text-xs flex items-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Explore Legal Security Labs</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
            <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Legal Notice:</strong> Cybersecurity labs are designed exclusively for authorized educational environments. Never test systems without explicit written permission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockCyberLabs.map(lab => (
              <div key={lab.id} onClick={() => navigateToLab(lab.id)} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  {lab.difficulty}
                </span>
                <h4 className="font-bold text-sm text-white">{lab.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AI TUTOR PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-8 lg:p-12 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-mono">
                Gemini 3.6 Flash Powered
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Meet Your 24/7 CodeVerse AI Tutor
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Stuck on a recursion problem? Unsure why your SQL query failed? CodeVerse AI Tutor breaks down complex code, debugs errors, and provides tailored hints without spoiling the answer.
              </p>
              <button
                onClick={() => setCurrentPage('ai-tutor')}
                className="px-6 py-3 rounded-xl font-bold bg-cyan-500 text-white hover:bg-cyan-600 transition text-xs flex items-center gap-2"
              >
                <Brain className="w-4 h-4" />
                <span>Ask AI Tutor A Question</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 border border-slate-800 space-y-3 font-sans text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-bold border-b border-slate-800 pb-2">
                <Brain className="w-4 h-4" />
                <span>CodeVerse AI Assistant</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 text-slate-300">
                <p className="font-semibold text-white">Student:</p>
                <p>"Why does recursion cause a StackOverflow error in Python?"</p>
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-100">
                <p className="font-semibold text-cyan-400">AI Tutor:</p>
                <p>Every recursive call pushes a new frame onto the call stack. If there is no base case, Python exceeds its maximum call stack limit (1000 depth by default)!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest font-mono">Transparent Pricing</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Invest In Your Technology Career</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">FREE</h3>
            <div className="text-3xl font-black text-slate-900 dark:text-white">Free <span className="text-xs font-normal text-slate-400">/ forever</span></div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Free foundation courses</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Basic coding practice</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Community access</li>
            </ul>
            <button onClick={() => setCurrentPage('courses')} className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">Start Free</button>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border-2 border-cyan-500 text-white space-y-4 relative shadow-xl shadow-cyan-500/10">
            <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500 text-slate-950 uppercase">Most Popular</span>
            <h3 className="font-bold text-lg">PRO ACADEMY</h3>
            <div className="text-3xl font-black">₹0 <span className="text-xs font-normal text-slate-400">/ forever</span></div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> All 200+ Premium Courses</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Unlimited AI Tutor guidance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Cybersecurity Legal Labs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Certificates with QR Verification</li>
            </ul>
            <button onClick={() => setCurrentPage('pricing')} className="w-full py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition">Upgrade to Pro</button>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">TEAM / UNIVERSITY</h3>
            <div className="text-3xl font-black text-slate-900 dark:text-white">₹0 <span className="text-xs font-normal text-slate-400">/ forever</span></div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Everything in Pro</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Team Analytics & Drop-off reports</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Instructor Course Builder</li>
            </ul>
            <button onClick={() => setCurrentPage('pricing')} className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest font-mono">Frequently Asked Questions</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Everything You Need To Know</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 p-8 lg:p-12 text-center text-white space-y-6 shadow-2xl shadow-blue-500/20">
          <h2 className="text-3xl sm:text-4xl font-black">Ready To Code, Build, and Secure?</h2>
          <p className="text-sm max-w-xl mx-auto opacity-90">
            Join thousands of developers mastering computer science and building production technology on CodeVerse Academy.
          </p>
          <button
            onClick={() => setCurrentPage('register')}
            className="px-8 py-3.5 rounded-xl font-bold bg-slate-950 text-white hover:bg-slate-900 transition shadow-lg text-xs inline-flex items-center gap-2"
          >
            <span>Create Your Free Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
