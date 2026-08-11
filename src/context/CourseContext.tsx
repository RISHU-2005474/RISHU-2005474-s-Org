import React, { createContext, useContext, useState } from 'react';
import { NavigationPage, Course, CodingChallenge, CyberLab, Project } from '../types';
import { mockCourses, mockChallenges, mockCyberLabs, mockProjects } from '../data/mockData';

interface CourseContextType {
  currentPage: NavigationPage;
  setCurrentPage: (page: NavigationPage) => void;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  selectedLessonId: string | null;
  setSelectedLessonId: (id: string | null) => void;
  selectedChallengeId: string | null;
  setSelectedChallengeId: (id: string | null) => void;
  selectedLabId: string | null;
  setSelectedLabId: (id: string | null) => void;
  selectedCertificateId: string | null;
  setSelectedCertificateId: (id: string | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  navigateToCourse: (courseId: string) => void;
  navigateToLesson: (courseId: string, lessonId: string) => void;
  navigateToChallenge: (challengeId: string) => void;
  navigateToLab: (labId: string) => void;
  navigateToCertificate: (certId: string) => void;
  courses: Course[];
  challenges: CodingChallenge[];
  labs: CyberLab[];
  projects: Project[];
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>('python-masterclass');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>('py-les-1');
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | null>('two-sum');
  const [selectedLabId, setSelectedLabId] = useState<string | null>('lab-sql-injection');
  const [selectedCertificateId, setSelectedCertificateId] = useState<string | null>('cert-py-101');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const navigateToCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLesson = (courseId: string, lessonId: string) => {
    setSelectedCourseId(courseId);
    setSelectedLessonId(lessonId);
    setCurrentPage('lesson-player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChallenge = (challengeId: string) => {
    setSelectedChallengeId(challengeId);
    setCurrentPage('challenges');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLab = (labId: string) => {
    setSelectedLabId(labId);
    setCurrentPage('cybersecurity');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCertificate = (certId: string) => {
    setSelectedCertificateId(certId);
    setCurrentPage('certificate-verify');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CourseContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedCourseId,
        setSelectedCourseId,
        selectedLessonId,
        setSelectedLessonId,
        selectedChallengeId,
        setSelectedChallengeId,
        selectedLabId,
        setSelectedLabId,
        selectedCertificateId,
        setSelectedCertificateId,
        isSearchOpen,
        setIsSearchOpen,
        navigateToCourse,
        navigateToLesson,
        navigateToChallenge,
        navigateToLab,
        navigateToCertificate,
        courses: mockCourses,
        challenges: mockChallenges,
        labs: mockCyberLabs,
        projects: mockProjects
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) throw new Error('useCourse must be used within a CourseProvider');
  return context;
};
