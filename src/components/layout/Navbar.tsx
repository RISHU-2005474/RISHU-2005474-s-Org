import React, { useState } from 'react';
import {
  Code2,
  Search,
  Bell,
  User as UserIcon,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  Shield,
  BookOpen,
  Terminal,
  Trophy,
  Brain,
  ChevronDown,
  LogOut,
  Settings,
  ShieldAlert,
  Flame,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCourse } from '../../context/CourseContext';
import { NavigationPage } from '../../types';

export const Navbar: React.FC = () => {
  const { user, isDarkMode, toggleDarkMode, logout, login } = useAuth();
  const { currentPage, setCurrentPage, setIsSearchOpen } = useCourse();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const navItems: { label: string; page: NavigationPage; icon: React.ReactNode }[] = [
    { label: 'Home', page: 'home', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Courses', page: 'courses', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Dashboard', page: 'dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Playground', page: 'playground', icon: <Terminal className="w-4 h-4" /> },
    { label: 'Challenges', page: 'challenges', icon: <Trophy className="w-4 h-4" /> },
    { label: 'Cybersecurity', page: 'cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { label: 'AI Tutor', page: 'ai-tutor', icon: <Brain className="w-4 h-4" /> },
    { label: 'Projects', page: 'projects', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Community', page: 'community', icon: <Code2 className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: NavigationPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080a]/85 border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-[#0d0d12] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white font-mono">
                EDUCATION
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30 uppercase tracking-wide">
                WORLD
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase -mt-0.5 hidden sm:block">
              Learn. Code. Build. Secure.
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-violet-600/15 text-violet-300 border border-violet-500/30 font-semibold shadow-sm shadow-violet-500/10'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Section Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Global Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs hover:border-slate-300 dark:hover:border-slate-700 transition"
            title="Search courses, challenges, AI (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {user ? (
            <>
              {/* XP & Streak Pill */}
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-semibold" title="Daily Streak">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{user.streak}d</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold" title="Experience Points">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{user.xp} XP</span>
                </div>
              </div>

              {/* Notifications Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition relative"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                </button>

                {notifDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-3 z-50">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Notifications
                      </span>
                      <span className="text-[10px] text-cyan-600 dark:text-cyan-400 cursor-pointer font-medium">
                        Mark all as read
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-900 dark:text-blue-200">
                        <p className="font-semibold">🏆 Certificate Earned!</p>
                        <p className="text-[11px] opacity-80">You completed Python Programming Masterclass.</p>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300">
                        <p className="font-semibold">⚡ Daily Streak Maintained</p>
                        <p className="text-[11px] opacity-80">14 consecutive days of coding activity!</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-cyan-500/50 transition"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-300 dark:border-slate-700"
                  />
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white truncate">{user.name}</p>
                      <p className="text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 uppercase">
                          Role: {user.role}
                        </span>
                      </div>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => { setCurrentPage('dashboard'); setProfileDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span>Learning Dashboard</span>
                      </button>
                      <button
                        onClick={() => { setCurrentPage('profile'); setProfileDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"
                      >
                        <UserIcon className="w-3.5 h-3.5" />
                        <span>User Profile</span>
                      </button>
                      <button
                        onClick={() => { setCurrentPage('settings'); setProfileDropdownOpen(false); }}
                        className="w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 text-slate-700 dark:text-slate-300"
                      >
                        <Settings className="w-3.5 h-3.5" />
                        <span>Account Settings</span>
                      </button>

                      {/* Role Switcher Demo Control */}
                      <div className="mt-1 pt-1 border-t border-slate-100 dark:border-slate-800 px-3 py-1">
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-1">Switch View Role</p>
                        <div className="flex gap-1">
                          <button
                            onClick={() => login(user.email, 'student')}
                            className={`flex-1 py-1 text-[10px] rounded font-medium ${user.role === 'student' ? 'bg-cyan-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                          >
                            Student
                          </button>
                          <button
                            onClick={() => login(user.email, 'instructor')}
                            className={`flex-1 py-1 text-[10px] rounded font-medium ${user.role === 'instructor' ? 'bg-cyan-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                          >
                            Instructor
                          </button>
                          <button
                            onClick={() => login(user.email, 'admin')}
                            className={`flex-1 py-1 text-[10px] rounded font-medium ${user.role === 'admin' ? 'bg-cyan-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                          >
                            Admin
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={logout}
                        className="w-full text-left px-3 py-2 hover:bg-red-500/10 text-red-600 dark:text-red-400 flex items-center gap-2 mt-1"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('login')}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                Sign In
              </button>
              <button
                onClick={() => handleNavClick('register')}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-sm hover:from-cyan-600 hover:to-blue-700 transition"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPage === item.page
                  ? 'bg-blue-500/10 text-blue-600 dark:text-cyan-400 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-around">
            <button
              onClick={() => handleNavClick('pricing')}
              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400"
            >
              Pricing & Plans
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-xs font-semibold text-slate-500 dark:text-slate-400"
            >
              About Platform
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
