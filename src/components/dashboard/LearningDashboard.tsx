import React, { useState } from 'react';
import { Flame, Trophy, Award, Clock, BookOpen, ArrowRight, CheckCircle2, Play, Sparkles, Calendar, Database, Check, ShieldCheck, Plus } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCourse } from '../../context/CourseContext';
import { mockCourses, mockCertificates } from '../../data/mockData';
import { BookClassModal } from '../courses/BookClassModal';

export const LearningDashboard: React.FC = () => {
  const { user, bookedClasses, supabaseProjectId, isSupabaseConnected } = useAuth();
  const { navigateToCourse, navigateToLesson, navigateToCertificate, setCurrentPage } = useCourse();
  const [bookingModalCourse, setBookingModalCourse] = useState<any>(null);

  if (!user) return null;

  const enrolledCourses = mockCourses.filter(c => user.enrolledCourseIds.includes(c.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0d0d14] via-[#12121e] to-[#18122c] text-white p-8 lg:p-10 border border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 uppercase font-mono">
              Student Workspace
            </span>
            <span className="text-xs text-zinc-400 font-mono">Level: {user.level}</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
              <Database className="w-3 h-3 text-emerald-400" />
              <span>Supabase Connected ({supabaseProjectId})</span>
            </div>
          </div>
          <h1 className="text-3xl font-black">Welcome back, {user.name}! 👋</h1>
          <p className="text-xs text-zinc-300">
            You are on a <strong className="text-amber-400">{user.streak}-day coding streak</strong>! All your booked classes & course enrollments are synced directly with your Supabase database.
          </p>
        </div>

        {/* XP & Badges Row */}
        <div className="flex items-center gap-4 bg-[#12121a]/90 p-4 rounded-2xl border border-zinc-800 relative z-10">
          <div className="text-center px-3">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-extrabold text-xl font-mono">
              <Flame className="w-5 h-5 fill-amber-400" />
              <span>{user.streak}</span>
            </div>
            <p className="text-[10px] text-zinc-400 uppercase font-semibold">Days Streak</p>
          </div>
          <div className="h-8 w-[1px] bg-zinc-800" />
          <div className="text-center px-3">
            <div className="flex items-center justify-center gap-1 text-violet-400 font-extrabold text-xl font-mono">
              <Trophy className="w-5 h-5 text-violet-400" />
              <span>{user.xp}</span>
            </div>
            <p className="text-[10px] text-zinc-400 uppercase font-semibold">Total XP</p>
          </div>
        </div>
      </div>

      {/* Booked Live Classes & Sessions (Supabase Synced) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-white">Your Booked Classes & Live Sessions</h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Supabase DB
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Live sessions saved in Supabase project <strong className="text-violet-300 font-mono">{supabaseProjectId}</strong>
            </p>
          </div>

          <button
            onClick={() => setBookingModalCourse(mockCourses[0])}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-500/20 transition flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Book New Class Session</span>
          </button>
        </div>

        {bookedClasses && bookedClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {bookedClasses.map((item) => (
              <div
                key={item.id || item.bookingCode}
                className="p-5 rounded-2xl bg-[#121218] border border-zinc-800 hover:border-violet-500/40 transition shadow-lg space-y-4 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        {item.classType}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Ref: {item.bookingCode}</span>
                    </div>
                    <h3 className="font-bold text-base text-white line-clamp-1">{item.courseTitle}</h3>
                    <p className="text-xs text-zinc-400">Instructor: <strong className="text-zinc-200">{item.instructorName}</strong></p>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                    {item.status}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#08080c] border border-zinc-800/80 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      Date:
                    </span>
                    <span className="text-cyan-300 font-bold">{item.classDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-violet-400" />
                      Time Slot:
                    </span>
                    <span className="text-zinc-200">{item.classTime}</span>
                  </div>
                </div>

                {item.notes && (
                  <p className="text-xs text-zinc-400 italic line-clamp-2">
                    "{item.notes}"
                  </p>
                )}

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Saved in Supabase DB
                  </span>
                  <button
                    onClick={() => navigateToCourse(item.courseId)}
                    className="text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1"
                  >
                    <span>View Course</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-[#121218] border border-zinc-800 text-center space-y-3">
            <Calendar className="w-10 h-10 text-zinc-500 mx-auto" />
            <h3 className="font-bold text-white">No Booked Classes Yet</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Book a 1-on-1 mentorship or live session with an instructor. All class details will save automatically into your Supabase account.
            </p>
            <button
              onClick={() => setBookingModalCourse(mockCourses[0])}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-violet-600 hover:bg-violet-500 transition inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Book Your First Live Class</span>
            </button>
          </div>
        )}
      </div>

      {/* Progress Section: Current Courses */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-white">In-Progress Courses</h2>
          <button
            onClick={() => setCurrentPage('courses')}
            className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1"
          >
            <span>Explore All Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enrolledCourses.map((course, idx) => {
            const progressPct = idx === 0 ? 80 : idx === 1 ? 55 : 30;
            return (
              <div
                key={course.id}
                className="p-5 rounded-2xl bg-[#121218] border border-zinc-800 space-y-4 hover:border-violet-500/40 transition shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>{course.category}</span>
                    <span className="font-bold text-violet-400">{progressPct}% Complete</span>
                  </div>

                  <h3 className="font-bold text-base text-white line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Progress Bar Visualizer */}
                  <div className="w-full bg-zinc-900 h-2.5 rounded-full overflow-hidden border border-zinc-800">
                    <div
                      className="bg-gradient-to-r from-violet-600 to-cyan-400 h-full transition-all duration-500 rounded-full"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => navigateToLesson(course.id, 'py-les-1')}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-500 transition flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Continue Lesson</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Earned Certificates & Badges */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white">Earned Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => navigateToCertificate(cert.id)}
              className="p-5 rounded-2xl bg-[#121218] border border-zinc-800 hover:border-violet-500/40 cursor-pointer transition flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-violet-300 transition">
                    {cert.courseTitle}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Issued: {cert.issueDate} • Grade: {cert.grade}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition" />
            </div>
          ))}
        </div>
      </div>

      {bookingModalCourse && (
        <BookClassModal
          course={bookingModalCourse}
          isOpen={!!bookingModalCourse}
          onClose={() => setBookingModalCourse(null)}
        />
      )}

    </div>
  );
};

