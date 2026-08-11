import React, { useState } from 'react';
import { Search, Filter, Star, Clock, BookOpen, CheckCircle2, ChevronRight, User, Award, Shield, Calendar, Database } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { mockCategories, mockCourses } from '../../data/mockData';
import { BookClassModal } from './BookClassModal';
import { Course } from '../../types';

export const CourseCatalog: React.FC = () => {
  const { navigateToCourse } = useCourse();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [freeOnly, setFreeOnly] = useState<boolean>(false);
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<Course | null>(null);

  const filteredCourses = mockCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesFree = !freeOnly || course.isFree;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesLevel && matchesFree && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-white">Explore Courses</h1>
          <p className="text-sm text-zinc-400">
            Master computer science, full-stack software development, AI models, and cybersecurity with hands-on practice.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121218] border border-zinc-800 text-xs font-mono text-zinc-300">
          <Database className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Supabase Storage Connected</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Python, React, Cybersecurity, C++..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs focus:outline-none"
            >
              <option value="all">All Difficulty Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 dark:text-slate-300 font-medium">
              <input
                type="checkbox"
                checked={freeOnly}
                onChange={(e) => setFreeOnly(e.target.checked)}
                className="rounded border-slate-300 text-cyan-500 focus:ring-cyan-500"
              />
              <span>Free Courses Only</span>
            </label>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Categories
          </button>
          {mockCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.title
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigateToCourse(course.id)}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/5 transition cursor-pointer flex flex-col justify-between group"
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
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white">
                        FREE
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white">
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
                    <span className="text-slate-500 ml-auto flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
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

              <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); navigateToCourse(course.id); }}
                  className="w-1/2 py-2.5 rounded-xl text-xs font-bold bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  Syllabus
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedCourseForBooking(course); }}
                  className="w-1/2 py-2.5 rounded-xl text-xs font-bold bg-violet-600/90 text-white hover:bg-violet-500 shadow-md shadow-violet-500/20 transition flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Class</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Courses Found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search filter or selecting a different category.
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSelectedLevel('all'); setSearchQuery(''); setFreeOnly(false); }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-white"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {selectedCourseForBooking && (
        <BookClassModal
          course={selectedCourseForBooking}
          isOpen={!!selectedCourseForBooking}
          onClose={() => setSelectedCourseForBooking(null)}
        />
      )}

    </div>
  );
};

export const CourseDetails: React.FC = () => {
  const { selectedCourseId, courses, navigateToLesson } = useCourse();
  const course = courses.find(c => c.id === selectedCourseId) || courses[0];
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Course Hero Banner */}
      <div className="rounded-3xl bg-[#0d0d12] text-white p-8 lg:p-12 border border-zinc-800 space-y-6 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                {course.category}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-zinc-800 text-zinc-300">
                {course.level}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Certificate Included
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{course.title}</h1>
            <p className="text-sm text-zinc-300 leading-relaxed">{course.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 pt-2 font-mono">
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{course.rating} ({course.ratingCount.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{course.studentCount.toLocaleString()} Students Enrolled</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration} Total Content</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => navigateToLesson(course.id, course.modules[0]?.lessons[0]?.id || 'py-les-1')}
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-500 transition shadow-lg shadow-violet-500/20"
              >
                Start Learning Now
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-6 py-3.5 rounded-xl text-xs font-bold bg-[#14141c] text-white border border-zinc-700 hover:bg-[#1c1c28] hover:border-violet-500 transition flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-violet-400" />
                <span>Book Live Class Session</span>
              </button>
            </div>
          </div>

          {/* Thumbnail / Instructor Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 space-y-4">
            <img src={course.thumbnail} alt={course.title} className="w-full h-44 object-cover rounded-xl" />
            
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Course Instructor</p>
              <div className="flex items-center gap-3">
                <img src={course.instructor.avatar} alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm text-white">{course.instructor.name}</h4>
                  <p className="text-[11px] text-slate-400">{course.instructor.title}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Curriculum Syllabus Modules */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Course Curriculum & Syllabus</h2>

        {course.modules && course.modules.length > 0 ? (
          <div className="space-y-4">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{mod.title}</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{mod.duration}</span>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {mod.lessons.map((les) => (
                    <div
                      key={les.id}
                      onClick={() => navigateToLesson(course.id, les.id)}
                      className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/80 cursor-pointer transition flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition">
                          {les.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 font-mono">{les.duration}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <p className="text-slate-600 dark:text-slate-300">
              Module 1: Foundations & Logic Setup (4 Video Lessons, 2 Interactive Quizzes)
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Module 2: Advanced Data Structures & Memory Optimization (6 Video Lessons, Coding Exercise)
            </p>
            <button
              onClick={() => navigateToLesson(course.id, 'py-les-1')}
              className="px-6 py-2.5 rounded-xl font-bold bg-cyan-500 text-white"
            >
              Start Module 1
            </button>
          </div>
        )}
      </div>

      <BookClassModal
        course={course}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

    </div>
  );
};
