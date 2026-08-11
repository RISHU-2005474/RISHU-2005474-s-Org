import React, { useState } from 'react';
import { X, Calendar, Clock, User, BookOpen, Database, CheckCircle2, AlertCircle, Sparkles, Shield, Send } from 'lucide-react';
import { Course } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface BookClassModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const BookClassModal: React.FC<BookClassModalProps> = ({ course, isOpen, onClose, onSuccess }) => {
  const { user, bookClassSession, supabaseProjectId } = useAuth();

  const [classDate, setClassDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [classTime, setClassTime] = useState<string>('10:00 AM - 11:30 AM');
  const [classType, setClassType] = useState<'1-on-1 Mentorship' | 'Code Review' | 'Live Group Masterclass' | 'Standard Course Session'>('1-on-1 Mentorship');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingResult, setBookingResult] = useState<{
    success: boolean;
    bookingCode?: string;
    tableName?: string;
    message?: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    setBookingResult(null);

    try {
      const result = await bookClassSession({
        userEmail: user.email,
        userName: user.name,
        courseId: course.id,
        courseTitle: course.title,
        instructorName: course.instructor.name,
        classType,
        classDate,
        classTime,
        notes: notes.trim() || 'Booked via Education World interactive portal',
        status: 'confirmed',
        price: course.price,
        isFree: course.isFree
      });

      setBookingResult({
        success: true,
        bookingCode: result.data?.bookingCode,
        tableName: result.tableName || 'booked_classes',
        message: `Successfully booked and stored in Supabase table '${result.tableName || 'booked_classes'}' under Project ID ${supabaseProjectId}!`
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setBookingResult({
        success: false,
        message: err?.message || 'Failed to connect to Supabase database.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0d0d12] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 bg-[#121218] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Book Live Class Session</h2>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>Syncs directly to Supabase DB ({supabaseProjectId})</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Result */}
        {bookingResult?.success ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                BOOKING CONFIRMED & SAVED TO SUPABASE
              </span>
              <h3 className="text-xl font-bold text-white pt-2">{course.title}</h3>
              <p className="text-xs text-zinc-400">
                Instructor: <strong className="text-zinc-200">{course.instructor.name}</strong>
              </p>
            </div>

            {/* Supabase Detail Card */}
            <div className="p-4 rounded-xl bg-[#121218] border border-zinc-800 space-y-2 text-left text-xs font-mono">
              <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800 pb-2">
                <span>Booking Reference:</span>
                <span className="font-bold text-violet-300">{bookingResult.bookingCode}</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>Supabase Project ID:</span>
                <span className="text-zinc-200">{supabaseProjectId}</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>Database Table:</span>
                <span className="text-emerald-400 font-bold">{bookingResult.tableName}</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>Scheduled Date & Time:</span>
                <span className="text-cyan-300">{classDate} @ {classTime}</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span>Student Account:</span>
                <span className="text-zinc-200 truncate max-w-[200px]">{user?.email}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Your class booking details have been securely inserted into your Supabase account. You will receive an email confirmation and reminder link.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/20 transition"
            >
              Done & View Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            
            {/* Course Summary Card */}
            <div className="p-4 rounded-xl bg-[#121218] border border-zinc-800/80 flex items-center gap-4">
              <img src={course.thumbnail} alt={course.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
              <div className="space-y-1">
                <span className="text-[10px] font-bold font-mono text-violet-400 uppercase tracking-wider">{course.category}</span>
                <h4 className="font-bold text-sm text-white line-clamp-1">{course.title}</h4>
                <p className="text-xs text-zinc-400">Instructor: {course.instructor.name}</p>
              </div>
            </div>

            {/* Session Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">Select Class Format</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: '1-on-1 Mentorship', label: '1-on-1 Mentorship', desc: 'Direct live code review' },
                  { id: 'Live Group Masterclass', label: 'Group Masterclass', desc: 'Interactive workshop' },
                  { id: 'Code Review', label: 'Code Review Lab', desc: 'Deep architecture audit' },
                  { id: 'Standard Course Session', label: 'Guided Syllabus', desc: 'Step-by-step walk-through' }
                ].map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setClassType(type.id as any)}
                    className={`p-3 rounded-xl border cursor-pointer transition space-y-0.5 ${
                      classType === type.id
                        ? 'bg-violet-600/15 border-violet-500/60 text-white'
                        : 'bg-[#121218] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">{type.label}</p>
                    <p className="text-[10px] text-zinc-400">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  <span>Select Date</span>
                </label>
                <input
                  type="date"
                  value={classDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setClassDate(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-[#121218] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-violet-400" />
                  <span>Select Time Slot</span>
                </label>
                <select
                  value={classTime}
                  onChange={(e) => setClassTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#121218] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="09:00 AM - 10:30 AM">09:00 AM - 10:30 AM EST</option>
                  <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM EST</option>
                  <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM EST</option>
                  <option value="05:00 PM - 06:30 PM">05:00 PM - 06:30 PM EST</option>
                  <option value="08:00 PM - 09:30 PM">08:00 PM - 09:30 PM EST</option>
                </select>
              </div>
            </div>

            {/* Notes / Learning Objectives */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-300">Specific Topics or Questions for Instructor</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g., I want help setting up full-stack deployment, debugging async functions, and database schema security."
                rows={2}
                className="w-full px-3 py-2.5 rounded-xl bg-[#121218] border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              />
            </div>

            {/* Supabase Target Notification */}
            <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-800/40 flex items-center justify-between text-xs text-violet-300">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Destination: <strong>Supabase DB Table ({supabaseProjectId})</strong></span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold uppercase">
                Active
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-3 rounded-xl font-bold text-xs text-zinc-400 hover:text-white bg-[#121218] border border-zinc-800 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving to Supabase...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm & Save to Supabase</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
