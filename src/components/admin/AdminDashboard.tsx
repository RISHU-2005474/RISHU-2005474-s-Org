import React from 'react';
import { Users, BookOpen, Trophy, ShieldAlert, BarChart3, Plus, CheckCircle2 } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';

export const AdminDashboard: React.FC = () => {
  const { courses } = useCourse();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Academy Admin Control Center</h1>
          <p className="text-xs text-slate-500 font-mono">Platform analytics, enrollment metrics, and curriculum management.</p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-500 border border-purple-500/20 font-mono">
          Admin Access
        </span>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Total Students</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">10,480</p>
          <p className="text-[10px] text-emerald-500">+12% this week</p>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Active Courses</p>
          <p className="text-2xl font-black text-cyan-500">{courses.length}</p>
          <p className="text-[10px] text-slate-400">Published across 12 categories</p>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Avg Completion Rate</p>
          <p className="text-2xl font-black text-emerald-500">84.2%</p>
          <p className="text-[10px] text-emerald-500">+4.1% retention</p>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <p className="text-[10px] text-slate-400 uppercase font-mono font-bold">Total Certificates Issued</p>
          <p className="text-2xl font-black text-amber-500">3,240</p>
          <p className="text-[10px] text-slate-400">Verifiable QR certificates</p>
        </div>
      </div>

      {/* Courses Overview Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-base text-slate-900 dark:text-white">Platform Course Catalog Health</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
              <tr>
                <th className="p-3">Course Title</th>
                <th className="p-3">Category</th>
                <th className="p-3">Level</th>
                <th className="p-3">Students</th>
                <th className="p-3">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {courses.map(c => (
                <tr key={c.id}>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{c.title}</td>
                  <td className="p-3 font-mono">{c.category}</td>
                  <td className="p-3 font-mono">{c.level}</td>
                  <td className="p-3 font-mono">{c.studentCount.toLocaleString()}</td>
                  <td className="p-3 font-mono text-amber-500 font-bold">★ {c.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export const InstructorDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Instructor Studio</h1>
          <p className="text-xs text-slate-500 font-mono">Create courses, design module quizzes, and view student progress.</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5">
          <Plus className="w-4 h-4" />
          <span>Create New Course</span>
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-base text-slate-900 dark:text-white">My Authored Courses</h3>
        <p className="text-xs text-slate-500">
          You are currently managing 2 active published courses.
        </p>
      </div>
    </div>
  );
};
