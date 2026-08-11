export type NavigationPage =
  | 'home'
  | 'courses'
  | 'course-details'
  | 'dashboard'
  | 'lesson-player'
  | 'playground'
  | 'challenges'
  | 'cybersecurity'
  | 'ai-tutor'
  | 'projects'
  | 'certificates'
  | 'community'
  | 'about'
  | 'contact'
  | 'login'
  | 'register'
  | 'profile'
  | 'settings'
  | 'pricing'
  | 'admin'
  | 'instructor'
  | 'certificate-verify';

export interface BookedClass {
  id?: string;
  bookingCode?: string;
  userEmail: string;
  userName: string;
  courseId: string;
  courseTitle: string;
  instructorName: string;
  classType: '1-on-1 Mentorship' | 'Code Review' | 'Live Group Masterclass' | 'Standard Course Session';
  classDate: string;
  classTime: string;
  notes?: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  price: number;
  isFree: boolean;
  createdAt?: string;
  savedToSupabase?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor' | 'admin';
  xp: number;
  streak: number;
  level: 'Beginner' | 'Explorer' | 'Developer' | 'Advanced Developer' | 'Expert' | 'Master';
  bio?: string;
  joinedDate: string;
  certificates: string[];
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  solvedChallengeIds: string[];
  showOnLeaderboard: boolean;
  learningGoal?: string;
  bookedClasses?: BookedClass[];
}

export interface CourseInstructor {
  name: string;
  title: string;
  avatar: string;
  bio: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'code-output';
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LessonResource {
  title: string;
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'quiz' | 'coding';
  videoUrl?: string;
  readingContent?: string;
  codeStarter?: string;
  codeLanguage?: string;
  quizQuestions?: QuizQuestion[];
  resources?: LessonResource[];
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  language: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  ratingCount: number;
  studentCount: number;
  duration: string;
  lessonCount: number;
  instructor: CourseInstructor;
  thumbnail: string;
  price: number;
  isFree: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  modules: CourseModule[];
  tags: string[];
  certificateAvailable: boolean;
}

export interface CodingChallengeTestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface CodingChallenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  category: string;
  problemStatement: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  starterCode: Record<string, string>; // e.g. { python: "...", javascript: "..." }
  testCases: CodingChallengeTestCase[];
  hints: string[];
  solutionExplanation: string;
  points: number;
  solvedCount: number;
}

export interface CyberLabStep {
  stepNumber: number;
  title: string;
  instructions: string;
  hints?: string;
  targetKey?: string;
}

export interface CyberLab {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  objective: string;
  scenarioText: string;
  targetSystem: string;
  steps: CyberLabStep[];
  legalNotice: string;
}

export interface ProjectMilestone {
  step: number;
  title: string;
  details: string;
  codeSnippet?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  estimatedHours: string;
  skillsLearned: string[];
  thumbnail: string;
  milestones: ProjectMilestone[];
  starterFilesUrl?: string;
}

export interface CertificateData {
  id: string;
  studentName: string;
  courseTitle: string;
  issueDate: string;
  instructorName: string;
  certificateId: string;
  grade: string;
  hours: number;
}

export interface CommunityComment {
  id: string;
  authorName: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    badge?: string;
  };
  category: string;
  title: string;
  content: string;
  likes: number;
  commentCount: number;
  isSolved?: boolean;
  timestamp: string;
  tags: string[];
  comments?: CommunityComment[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  challengesSolved: number;
  streak: number;
  badge: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  courseCount: number;
}

export interface ProgrammingLanguageItem {
  id: string;
  name: string;
  logo: string;
  level: string;
  courseCount: number;
  popularProjects: string[];
  color: string;
}
