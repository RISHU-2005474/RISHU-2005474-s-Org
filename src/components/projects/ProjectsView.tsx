import React, { useState } from 'react';
import { Sparkles, Clock, CheckCircle2, ArrowRight, Code2, FolderGit2 } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { mockProjects } from '../../data/mockData';
import { Project } from '../../types';

export const ProjectsView: React.FC = () => {
  const { projects } = useCourse();
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-cyan-500" />
          <span>Hands-On Project Showcase & Milestones</span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Build real portfolio projects step-by-step with guided code milestones and downloadable starter templates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Project List */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            All Guided Projects ({projects.length})
          </h3>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`p-4 rounded-2xl border cursor-pointer transition space-y-2 ${
                  selectedProject.id === proj.id
                    ? 'bg-cyan-500/10 border-cyan-500 text-slate-900 dark:text-white'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-500 font-bold">
                    {proj.level}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{proj.estimatedHours}</span>
                </div>
                <h4 className="font-bold text-sm">{proj.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details & Step Milestones */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-500 uppercase">{selectedProject.category}</span>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">{selectedProject.title}</h2>
              </div>
              <button className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition flex items-center gap-1.5">
                <FolderGit2 className="w-4 h-4" />
                <span>Download Starter Files</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Skills Learned */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono">Skills Mastered</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.skillsLearned.map((sk, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestones Steps */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Milestones Checklist</h3>
              <div className="space-y-3">
                {selectedProject.milestones.map((ms) => (
                  <div key={ms.step} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold flex items-center justify-center font-mono">
                        {ms.step}
                      </span>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white">{ms.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 pl-8">{ms.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
