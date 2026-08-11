import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { CourseProvider, useCourse } from './context/CourseContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';

import { HomePage } from './components/home/HomePage';
import { CourseCatalog, CourseDetails } from './components/courses/CourseCatalog';
import { LearningDashboard } from './components/dashboard/LearningDashboard';
import { LessonPlayer } from './components/lesson/LessonPlayer';
import { CodingPlayground } from './components/playground/CodingPlayground';
import { CodingChallenges } from './components/challenges/CodingChallenges';
import { CyberCenter } from './components/cybersecurity/CyberCenter';
import { AITutorView } from './components/ai/AITutorView';
import { ProjectsView } from './components/projects/ProjectsView';
import { CertificateView } from './components/certificate/CertificateView';
import { CommunityView } from './components/community/CommunityView';
import { UserProfileView, SettingsView } from './components/profile/UserProfileView';
import { PricingView } from './components/pricing/PricingView';
import { AdminDashboard, InstructorDashboard } from './components/admin/AdminDashboard';
import { AboutView, ContactView } from './components/about/AboutView';

const PageContent: React.FC = () => {
  const { currentPage } = useCourse();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'courses':
      return <CourseCatalog />;
    case 'course-details':
      return <CourseDetails />;
    case 'dashboard':
      return <LearningDashboard />;
    case 'lesson-player':
      return <LessonPlayer />;
    case 'playground':
      return <CodingPlayground />;
    case 'challenges':
      return <CodingChallenges />;
    case 'cybersecurity':
      return <CyberCenter />;
    case 'ai-tutor':
      return <AITutorView />;
    case 'projects':
      return <ProjectsView />;
    case 'certificate':
      return <CertificateView />;
    case 'community':
      return <CommunityView />;
    case 'profile':
      return <UserProfileView />;
    case 'settings':
      return <SettingsView />;
    case 'pricing':
      return <PricingView />;
    case 'admin':
      return <AdminDashboard />;
    case 'instructor':
      return <InstructorDashboard />;
    case 'about':
      return <AboutView />;
    case 'contact':
      return <ContactView />;
    default:
      return <HomePage />;
  }
};

export default function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <div className="min-h-screen bg-[#08080a] text-zinc-100 font-sans flex flex-col justify-between selection:bg-violet-500/30 selection:text-violet-200 transition-colors duration-200 relative overflow-x-hidden">
          <div>
            <Navbar />
            <main>
              <PageContent />
            </main>
          </div>
          <Footer />
          <GlobalSearchModal />
        </div>
      </CourseProvider>
    </AuthProvider>
  );
}
