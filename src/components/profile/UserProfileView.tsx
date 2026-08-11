import React from 'react';
import { User as UserIcon, Trophy, Flame, Award, BookOpen, Settings, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCourse } from '../../context/CourseContext';
import { mockCertificates } from '../../data/mockData';
import { SUPABASE_PROJECT_ID, SUPABASE_URL } from '../../lib/supabase';

export const UserProfileView: React.FC = () => {
  const { user } = useAuth();
  const { setCurrentPage, navigateToCertificate } = useCourse();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Profile Header */}
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500 shadow-lg" />
          <div className="space-y-1 text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">{user.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-500 uppercase font-mono">
                {user.level}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
            <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">{user.bio}</p>
          </div>

          <button
            onClick={() => setCurrentPage('settings')}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 shrink-0"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-center font-mono">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950">
            <div className="text-xl font-black text-amber-500 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{user.streak}d</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Streak</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950">
            <div className="text-xl font-black text-cyan-500 flex items-center justify-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>{user.xp}</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Total XP</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950">
            <div className="text-xl font-black text-blue-500 flex items-center justify-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{user.enrolledCourseIds.length}</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Enrolled</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950">
            <div className="text-xl font-black text-emerald-500 flex items-center justify-center gap-1">
              <Award className="w-4 h-4" />
              <span>{user.certificates.length}</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase font-semibold">Certificates</p>
          </div>
        </div>
      </div>

      {/* Certificates Earned */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Earned Verifiable Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockCertificates.map(cert => (
            <div
              key={cert.id}
              onClick={() => navigateToCertificate(cert.id)}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 cursor-pointer transition flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">{cert.courseTitle}</h4>
                <p className="text-[10px] text-slate-400">ID: {cert.certificateId} • {cert.issueDate}</p>
              </div>
              <Award className="w-5 h-5 text-amber-500" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export const SettingsView: React.FC = () => {
  const { user, isDarkMode, toggleDarkMode, updateProfile } = useAuth();
  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">Account Settings</h1>

      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-slate-400 font-mono">Display Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateProfile({ name: e.target.value })}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-slate-400 font-mono">Bio</label>
          <textarea
            value={user.bio || ''}
            onChange={(e) => updateProfile({ bio: e.target.value })}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none resize-none h-20"
          />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Public Leaderboard Visibility</h4>
            <p className="text-xs text-slate-500">Show your XP rank on the global leaderboard</p>
          </div>
          <input
            type="checkbox"
            checked={user.showOnLeaderboard}
            onChange={(e) => updateProfile({ showOnLeaderboard: e.target.checked })}
            className="w-5 h-5 rounded text-cyan-500 focus:ring-cyan-500"
          />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">Theme Preference</h4>
            <p className="text-xs text-slate-500">Switch between dark mode and light theme</p>
          </div>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
          </button>
        </div>

        {/* Supabase Connection Status Card */}
        <div className="p-5 rounded-xl bg-[#0a0a0f] border border-violet-900/40 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="font-bold text-sm text-white">Supabase Connection Active</h4>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              CONNECTED
            </span>
          </div>

          <div className="space-y-1.5 text-xs font-mono text-zinc-400">
            <div className="flex justify-between">
              <span>Project ID:</span>
              <span className="text-violet-300 font-bold">{SUPABASE_PROJECT_ID}</span>
            </div>
            <div className="flex justify-between">
              <span>Supabase Endpoint:</span>
              <span className="text-zinc-300">{SUPABASE_URL}</span>
            </div>
            <div className="flex justify-between">
              <span>Database Table:</span>
              <span className="text-emerald-400 font-bold">booked_classes</span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-500">
            All booked classes, sessions, and course reservations are automatically saved into your Supabase database table.
          </p>
        </div>
      </div>
    </div>
  );
};
