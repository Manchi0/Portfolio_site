export const featuredProjects = [
  {
    id: 1,
    title: 'Aluminum Extrusion Tolerance Calculator',
    description: 'Production-ready web app that automates dimensional tolerance calculations for aluminum extrusions according to industry standards.',
    longDescription: 'Won 1st place at Penn State Fall 2025 Engineering Capstone Showcase against 76 teams. Currently in production use by the Aluminum Association. Implements complex tolerance logic for alloy types 1xxx-7xxx series with secure JWT authentication.',
    tech: ['React', 'Python Flask', 'Supabase', 'JWT', 'Vite'],
    category: 'Full-Stack',
    status: 'In Production',
    award: '1st Place - Capstone (76 teams)',
    links: {
      github: 'https://github.com/Manchi0/aluminum-tolerance',
      demo: null,
    },
    metrics: ['Used by Aluminum Association', 'Industry Standard Compliance'],
  },
  {
    id: 2,
    title: 'WorkPro RAG System',
    description: 'Enterprise RAG system enabling Penn State OPP employees to instantly retrieve information from complex SOP documents.',
    longDescription: 'Architected automated document ingestion pipeline using Power Automate. Deployed on Azure Container Apps with vector indexes on Azure AI Search for fast retrieval. Includes secure authentication and data indexing.',
    tech: ['LangChain', 'Azure AI Search', 'Azure Container Apps', 'Power Automate', 'Python'],
    category: 'ML/AI',
    status: 'Deployed',
    award: null,
    links: {
      github: null,
      demo: null,
    },
    metrics: ['70% faster response time', 'Production at Penn State OPP'],
  },
  {
    id: 3,
    title: 'AutoCal',
    description: 'AI-powered smart calendar assistant that aggregates tasks from multiple platforms and launches context-aware AI co-pilots.',
    longDescription: 'Unified workspace aggregating tasks from Canvas, Outlook, Jira, and GitHub. Smart scheduling analyzes deadlines and available time. Dynamic learning adapts to personal working patterns. Co-Pilot feature opens relevant files and AI assistant when tasks start.',
    tech: ['React', 'Node.js', 'LangChain', 'OpenAI API', 'TypeScript'],
    category: 'Full-Stack',
    status: 'In Development',
    award: null,
    links: {
      github: 'https://github.com/Manchi0/autocal',
      demo: null,
    },
    metrics: ['Multi-platform integration', 'AI-powered scheduling'],
  },
]

export const otherProjects = [
  {
    id: 4,
    title: 'Drawing Vision',
    description: 'Computer vision pipeline for extracting metadata from engineering drawings. Led team of 6 interns.',
    tech: ['OpenCV', 'PyTorch', 'Python'],
    category: 'ML/AI',
    links: {
      github: 'https://github.com/Manchi0/drawing-vision',
    },
  },
  {
    id: 5,
    title: 'FinGuard',
    description: 'Financial dashboard and browser extension for credit card optimization and scam detection. Built at HackPSU.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini RAG'],
    category: 'Full-Stack',
    links: {
      github: 'https://github.com/Manchi0/finguard',
    },
  },
  {
    id: 6,
    title: 'Memory Allocator',
    description: 'Custom malloc implementation featuring Buddy and Slab allocation schemes. Handles 500+ allocations.',
    tech: ['C', 'Systems Programming'],
    category: 'Systems',
    links: {
      github: 'https://github.com/Manchi0/malloc',
    },
  },
  {
    id: 7,
    title: 'Virtual Memory Manager',
    description: 'User-space VM manager with FIFO and Third Chance page replacement using signal handlers.',
    tech: ['C', 'Linux', 'Signal Handling'],
    category: 'Systems',
    links: {
      github: 'https://github.com/Manchi0/vm-manager',
    },
  },
]
