import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Trophy, Shield, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, courses, challenges, labs, projects, navigateToCourse, navigateToChallenge, navigateToLab, setCurrentPage } = useCourse();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredCourses = query.trim() ? courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))) : courses.slice(0, 3);
  const filteredChallenges = query.trim() ? challenges.filter(ch => ch.title.toLowerCase().includes(query.toLowerCase()) || ch.category.toLowerCase().includes(query.toLowerCase())) : challenges.slice(0, 2);
  const filteredLabs = query.trim() ? labs.filter(l => l.title.toLowerCase().includes(query.toLowerCase())) : labs.slice(0, 2);
  const filteredProjects = query.trim() ? projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : projects.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-2xl bg-[#0d0d12] border border-zinc-800/90 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-zinc-800/80 flex items-center gap-3 bg-[#121218]">
          <Search className="w-5 h-5 text-violet-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, coding challenges, cybersecurity labs, projects..."
            className="flex-1 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results Container */}
        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-6">
          
          {/* Courses Section */}
          {filteredCourses.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                <span>Courses ({filteredCourses.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredCourses.map(course => (
                  <div
                    key={course.id}
                    onClick={() => {
                      navigateToCourse(course.id);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 rounded-xl hover:bg-[#181822] border border-transparent hover:border-zinc-800 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition">
                        {course.title}
                      </p>
                      <p className="text-xs text-zinc-400">
                        {course.category} • {course.level} • {course.duration}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Section */}
          {filteredChallenges.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5" />
                <span>Coding Challenges</span>
              </div>
              <div className="space-y-1.5">
                {filteredChallenges.map(challenge => (
                  <div
                    key={challenge.id}
                    onClick={() => {
                      navigateToChallenge(challenge.id);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition">
                        {challenge.title}
                      </p>
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-medium">
                        {challenge.difficulty}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cybersecurity Labs */}
          {filteredLabs.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Cybersecurity Labs</span>
              </div>
              <div className="space-y-1.5">
                {filteredLabs.map(lab => (
                  <div
                    key={lab.id}
                    onClick={() => {
                      navigateToLab(lab.id);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition">
                        {lab.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {lab.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Student Projects</span>
              </div>
              <div className="space-y-1.5">
                {filteredProjects.map(project => (
                  <div
                    key={project.id}
                    onClick={() => {
                      setCurrentPage('projects');
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition">
                        {project.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {project.category} • {project.estimatedHours}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Press <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">ESC</kbd> to exit</span>
          <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>CodeVerse Fast Index</span>
          </div>
        </div>

      </div>
    </div>
  );
};
