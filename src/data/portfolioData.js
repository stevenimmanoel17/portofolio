// ==========================================
// HERO SECTION DATA
// ==========================================
export const HERO_DATA = {
  name: "Steven Immanoel",
  headline: "Designing and building a website that supports your needs.",
  subtitle: "Junior Web-Development .",
  cvUrl: "#", // Ganti dengan path file CV Anda di public/assets/ (contoh: '/assets/cv.pdf')
};

// ==========================================
// ABOUT SECTION DATA
// ==========================================
export const ABOUT_DATA = {
  tag: "About",
  headline: "I'm backend-focused software engineer with 2+ years of experience building reliable system for real-world execution.",
  paragraphs: [
    "Saya adalah lulusan Ilmu Komputer dari Universitas Sumatera Utara yang berfokus pada pengembangan sistem web yang terstruktur, efisien, dan andal.",
    "Berpengalaman dalam merancang arsitektur aplikasi menggunakan ekosistem PHP/Laravel, basis data MySQL, serta antarmuka modern berbasis React dan Tailwind CSS.",
    "Selalu antusias dalam memecahkan masalah teknis, mengoptimalkan proses bisnis, dan membangun solusi digital yang berorientasi pada kebutuhan pengguna."
  ],
  // Path foto profil almamater di folder public/assets/
  image: "/public/assets/almameter.JPG", 
};

// ==========================================
// TECHNOLOGY STACK - BIG OVERLAPPING CARDS
// ==========================================
export const BIG_TECH_CARDS = [
  {
    id: 'html5',
    name: 'HTML 5',
    icon: '/assets/skills/html5.svg',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    rotate: 'rotate-[-2deg]',
    zIndex: 'z-0',
  },
  {
    id: 'css3',
    name: 'CSS 3',
    icon: '/assets/skills/css3.svg',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    rotate: 'rotate-[1deg]',
    zIndex: 'z-10',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/assets/skills/javascript.svg',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    rotate: 'rotate-[-5deg]',
    zIndex: 'z-20',
    elevated: true, // Kartu kuning JS sedikit lebih terangkat ke atas sesuai UI
  },
  {
    id: 'supabase',
    name: 'Supabase',
    icon: '/assets/skills/supabase.svg',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    rotate: 'rotate-[-2deg]',
    zIndex: 'z-30',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: '/assets/skills/mysql.svg',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    rotate: 'rotate-[2deg]',
    zIndex: 'z-40',
  },
  {
    id: 'php',
    name: 'PHP',
    icon: '/assets/skills/php.svg',
    fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    rotate: 'rotate-[3deg]',
    zIndex: 'z-50',
  },
];

// ==========================================
// TECHNOLOGY STACK - PILL MINI BADGES
// ==========================================
export const PILL_ROW_1 = [
  { name: 'HTML  5', icon: '/assets/skills/html5.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: '/assets/skills/css3.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Java  Script', icon: '/assets/skills/js.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Supabase', icon: '/assets/skills/supabase.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'PHP', icon: '/assets/skills/php.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: '/assets/skills/mysql.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

export const PILL_ROW_2 = [
  { name: 'Python', icon: '/assets/skills/python.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Figma', icon: '/assets/skills/figma.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Canva', icon: '/assets/skills/canva.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Word', icon: '/assets/skills/word.png', fallback: 'https://img.icons8.com/color/48/microsoft-word-2019--v2.png' },
  { name: 'Excel', icon: '/assets/skills/excel.png', fallback: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png' },
  { name: 'Power  Point', icon: '/assets/skills/ppt.png', fallback: 'https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png' },
];

// ==========================================
// ACCORDION CATEGORIES & SKILL LEVELS
// ==========================================
export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Developers',
    count: 3,
    color: '#8BD8A8',
    bgColor: '#E8F8F0',
    borderColor: '#B8EBD2',
    skills: [
      { name: 'HTML 5', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'CSS', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'Java Script', level: 'Learning', levelColor: '#F3D94E' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    count: 3,
    color: '#F3A8C8',
    bgColor: '#FDF0F3',
    borderColor: '#F8C8D8',
    skills: [
      { name: 'PHP', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'MySQL', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'Supabase', level: 'Learning', levelColor: '#F3D94E' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    count: 2,
    color: '#9BD8F5',
    bgColor: '#EDF6FD',
    borderColor: '#C6E2F8',
    skills: [
      { name: 'Canva', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'Figma', level: 'Learning', levelColor: '#F3D94E' },
    ],
  },
  {
    id: 'office',
    title: 'Office',
    count: 3,
    color: '#F3D94E',
    bgColor: '#FEF9E7',
    borderColor: '#F9E8A2',
    skills: [
      { name: 'Excel', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'Word', level: 'Learning', levelColor: '#F3D94E' },
      { name: 'Power Point', level: 'Learning', levelColor: '#F3D94E' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    count: 2,
    color: '#5EDDD0',
    bgColor: '#E6FAF8',
    borderColor: '#A8F2EC',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', levelColor: '#9BD8F5' },
      { name: 'VS Code', level: 'Expert', levelColor: '#8BD8A8' },
    ],
  },
];

// ==========================================
// PROJECTS SECTION DATA
// ==========================================
export const PROJECTS = [
  {
    id: 1,
    title: 'Coding Project 01',
    description: 'A responsive web application built with clean architecture, modern React components, and performance optimization.',
    // Ubah tags menjadi objek yang memiliki nama dan path ikon
    tags: [
      { name: 'HTML5', icon: '/assets/skills/html5.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: '/assets/skills/css3.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: '/assets/skills/js.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop&q=70',
    link: '#'
  },
  {
    id: 2,
    title: 'Coding Project 02',
    description: 'Full-stack application featuring database management, structured REST APIs, and automated UI interactions.',
    tags: [
      { name: 'React', icon: '/assets/skills/js.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind', icon: '/assets/skills/css3.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'PHP', icon: '/assets/skills/php.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&auto=format&fit=crop&q=70',
    link: '#'
  },
  {
    id: 3,
    title: 'Coding Project 03',
    description: 'Internal operational dashboard with data filtering, reactive UI, and clean data modeling.',
    tags: [
      { name: 'PHP', icon: '/assets/skills/php.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', icon: '/assets/skills/mysql.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Supabase', icon: '/assets/skills/supabase.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=70',
    link: '#'
  },
  {
    id: 4,
    title: 'Coding Project 04',
    description: 'Portfolio design system recreation with custom CSS layout grids, monospace typography, and retro components.',
    tags: [
      { name: 'Figma', icon: '/assets/skills/figma.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'CSS3', icon: '/assets/skills/css3.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: '/assets/skills/js.png', fallback: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&auto=format&fit=crop&q=70',
    link: '#'
  },
];

// ==========================================
// EXPERIENCES & EDUCATION DATA
// ==========================================
export const EXPERIENCES = [
  {
    period: "Sep 2024 - Des 2024",
    dotColor: "#8BD8A8",
    company: "BPJS Ketenagakerjaan",
    role: "Sales and Marketing Intern",
    description: "Membantu operasional administrasi kepesertaan, pengolahan data mitra kerja, serta mendukung program edukasi jaminan sosial ketenagakerjaan."
  },
  {
    period: "2024",
    dotColor: "#F3D94E",
    company: "KSOP Utama Belawan",
    role: "Administrative / IT Intern",
    description: "Mendukung pengelolaan data operasional pelabuhan, pemeliharaan sistem informasi kantor, serta troubleshooting teknis perangkat komputer."
  }
];

export const EDUCATION = [
  {
    period: "2020 - 2024",
    dotColor: "#8BD8A8",
    institution: "Universitas Sumatera Utara",
    degree: "S1 Ilmu Komputer",
    badge: "Bachelor of Computer Science",
    description: "Fokus studi pada rekayasa perangkat lunak, sistem basis data, jaringan komputer, dan algoritma pemrograman."
  }
];