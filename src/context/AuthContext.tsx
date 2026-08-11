import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, BookedClass } from '../types';
import { saveBookedClassToSupabase, fetchBookedClassesFromSupabase, SUPABASE_PROJECT_ID } from '../lib/supabase';
import { mockCourses } from '../data/mockData';
import defaultAvatarImg from '../assets/images/user_avatar_1786437421524.jpg';

interface AuthContextType {
  user: User | null;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  login: (email: string, role?: 'student' | 'instructor' | 'admin') => void;
  logout: () => void;
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
  solveChallenge: (challengeId: string) => void;
  enrollInCourse: (courseId: string) => void;
  updateProfile: (updated: Partial<User>) => void;
  bookedClasses: BookedClass[];
  bookClassSession: (booking: Omit<BookedClass, 'id' | 'bookingCode' | 'createdAt' | 'savedToSupabase'>) => Promise<{ success: boolean; data?: BookedClass; error?: string; tableName?: string }>;
  isSupabaseConnected: boolean;
  supabaseProjectId: string;
}

const initialBookings: BookedClass[] = [
  {
    id: 'bk-101',
    bookingCode: 'BK-894102',
    userEmail: 'prajapatikumarrishu32@gmail.com',
    userName: 'Prajapati Kumar Rishu',
    courseId: 'python-masterclass',
    courseTitle: 'Complete Python 3 Masterclass: Zero to Hero',
    instructorName: 'Dr. Sarah Jenkins',
    classType: '1-on-1 Mentorship',
    classDate: '2026-08-15',
    classTime: '10:00 AM - 11:30 AM',
    notes: 'Reviewing object-oriented design patterns & async generator logic.',
    status: 'confirmed',
    price: 0,
    isFree: true,
    createdAt: '2026-08-10T12:00:00Z',
    savedToSupabase: true
  },
  {
    id: 'bk-102',
    bookingCode: 'BK-543198',
    userEmail: 'prajapatikumarrishu32@gmail.com',
    userName: 'Prajapati Kumar Rishu',
    courseId: 'ethical-cybersecurity',
    courseTitle: 'Ethical Hacking & Network Security Defense',
    instructorName: 'Alex Thorne',
    classType: 'Live Group Masterclass',
    classDate: '2026-08-18',
    classTime: '02:00 PM - 04:00 PM',
    notes: 'Hands-on Wireshark packet capture analysis sandbox.',
    status: 'confirmed',
    price: 49,
    isFree: false,
    createdAt: '2026-08-09T15:30:00Z',
    savedToSupabase: true
  }
];

const defaultUser: User = {
  id: 'usr-101',
  name: 'Prajapati Kumar Rishu',
  email: 'prajapatikumarrishu32@gmail.com',
  avatar: defaultAvatarImg,
  role: 'student',
  xp: 8450,
  streak: 14,
  level: 'Developer',
  joinedDate: 'January 2026',
  bio: 'Computer Science enthusiast exploring Full-Stack Development, AI agents, and Ethical Cybersecurity.',
  certificates: ['cert-py-101', 'cert-sec-202'],
  enrolledCourseIds: ['python-masterclass', 'ethical-cybersecurity', 'fullstack-webdev'],
  completedLessonIds: ['py-les-1', 'py-les-2'],
  solvedChallengeIds: ['two-sum'],
  showOnLeaderboard: true,
  learningGoal: 'Full Stack & Security'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(defaultUser);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [bookedClasses, setBookedClasses] = useState<BookedClass[]>(() => {
    try {
      const saved = localStorage.getItem('eduworld_booked_classes');
      return saved ? JSON.parse(saved) : initialBookings;
    } catch {
      return initialBookings;
    }
  });
  const [isSupabaseConnected, setIsSupabaseConnected] = useState<boolean>(true);

  useEffect(() => {
    // Sync dark mode class on root html document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Persist booked classes to local storage
  useEffect(() => {
    try {
      localStorage.setItem('eduworld_booked_classes', JSON.stringify(bookedClasses));
    } catch (err) {
      console.error('LocalStorage save error:', err);
    }
  }, [bookedClasses]);

  // Sync with Supabase on user load/login
  useEffect(() => {
    if (user?.email) {
      fetchBookedClassesFromSupabase(user.email).then(records => {
        if (records && records.length > 0) {
          const mapped: BookedClass[] = records.map(r => ({
            id: r.id || 'bk-' + Math.random().toString(36).substr(2, 6),
            bookingCode: r.booking_code || 'BK-' + Math.floor(100000 + Math.random() * 900000),
            userEmail: r.user_email,
            userName: r.user_name,
            courseId: r.course_id,
            courseTitle: r.course_title,
            instructorName: r.instructor_name,
            classType: r.class_type,
            classDate: r.class_date,
            classTime: r.class_time,
            notes: r.notes,
            status: r.status,
            price: r.price,
            isFree: r.is_free,
            createdAt: r.created_at,
            savedToSupabase: true
          }));

          // Merge without duplicates based on bookingCode or courseId + classDate
          setBookedClasses(prev => {
            const combined = [...mapped];
            prev.forEach(item => {
              if (!combined.some(c => c.bookingCode === item.bookingCode || (c.courseId === item.courseId && c.classDate === item.classDate))) {
                combined.push(item);
              }
            });
            return combined;
          });
        }
      }).catch(err => {
        console.log('Supabase sync notice:', err);
      });
    }
  }, [user?.email]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const login = (email: string, role: 'student' | 'instructor' | 'admin' = 'student') => {
    setUser({
      ...defaultUser,
      email,
      role,
      name: email.split('@')[0].replace('.', ' ')
    });
  };

  const logout = () => setUser(null);

  const addXP = (amount: number) => {
    if (!user) return;
    setUser(prev => {
      if (!prev) return null;
      const newXP = prev.xp + amount;
      let newLevel = prev.level;
      if (newXP > 12000) newLevel = 'Master';
      else if (newXP > 10000) newLevel = 'Expert';
      else if (newXP > 8000) newLevel = 'Advanced Developer';
      else if (newXP > 5000) newLevel = 'Developer';
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  const completeLesson = (lessonId: string) => {
    if (!user || user.completedLessonIds.includes(lessonId)) return;
    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
        xp: prev.xp + 50
      };
    });
  };

  const solveChallenge = (challengeId: string) => {
    if (!user || user.solvedChallengeIds.includes(challengeId)) return;
    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        solvedChallengeIds: [...prev.solvedChallengeIds, challengeId],
        xp: prev.xp + 100
      };
    });
  };

  const enrollInCourse = (courseId: string) => {
    if (!user || user.enrolledCourseIds.includes(courseId)) return;
    setUser(prev => {
      if (!prev) return null;
      return {
        ...prev,
        enrolledCourseIds: [...prev.enrolledCourseIds, courseId]
      };
    });

    const targetCourse = mockCourses.find(c => c.id === courseId);
    if (targetCourse) {
      const today = new Date().toISOString().split('T')[0];
      saveBookedClassToSupabase({
        user_email: user.email,
        user_name: user.name,
        course_id: targetCourse.id,
        course_title: targetCourse.title,
        instructor_name: targetCourse.instructor.name,
        class_type: 'Standard Course Session',
        class_date: today,
        class_time: 'Self-Paced Enrollment',
        notes: `Course enrollment synced to Supabase (${SUPABASE_PROJECT_ID})`,
        status: 'confirmed',
        price: targetCourse.price,
        is_free: targetCourse.isFree
      }).catch(err => console.warn('Supabase course enrollment save note:', err));
    }
  };

  const updateProfile = (updated: Partial<User>) => {
    if (!user) return;
    setUser(prev => (prev ? { ...prev, ...updated } : null));
  };

  const bookClassSession = async (booking: Omit<BookedClass, 'id' | 'bookingCode' | 'createdAt' | 'savedToSupabase'>) => {
    const bookingCode = 'BK-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking: BookedClass = {
      ...booking,
      id: 'bk-' + Math.random().toString(36).substr(2, 6),
      bookingCode,
      createdAt: new Date().toISOString(),
      savedToSupabase: true
    };

    // Save to Supabase backend table 'booked_classes'
    const supabaseResult = await saveBookedClassToSupabase({
      user_email: booking.userEmail,
      user_name: booking.userName,
      course_id: booking.courseId,
      course_title: booking.courseTitle,
      instructor_name: booking.instructorName,
      class_type: booking.classType,
      class_date: booking.classDate,
      class_time: booking.classTime,
      notes: booking.notes,
      status: booking.status,
      price: booking.price,
      is_free: booking.isFree
    });

    // Automatically enroll user in course if not already enrolled
    enrollInCourse(booking.courseId);

    // Update local state
    setBookedClasses(prev => [newBooking, ...prev]);

    return {
      success: true,
      data: newBooking,
      tableName: supabaseResult.tableName || 'booked_classes',
      error: supabaseResult.error
    };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isDarkMode,
        toggleDarkMode,
        login,
        logout,
        addXP,
        completeLesson,
        solveChallenge,
        enrollInCourse,
        updateProfile,
        bookedClasses,
        bookClassSession,
        isSupabaseConnected,
        supabaseProjectId: SUPABASE_PROJECT_ID
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

