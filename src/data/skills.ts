import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'code', category: 'frontend' },
  { name: 'TypeScript', icon: 'braces', category: 'frontend' },
  { name: 'JavaScript', icon: 'code-2', category: 'frontend' },
  { name: 'HTML5', icon: 'file-code', category: 'frontend' },
  { name: 'CSS3', icon: 'layers', category: 'frontend' },
  { name: 'Redux', icon: 'repeat', category: 'frontend' },
  { name: 'Next.js', icon: 'server', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'wind', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'server', category: 'backend' },
  { name: 'Express', icon: 'server', category: 'backend' },
  { name: 'MongoDB', icon: 'database', category: 'backend' },
  { name: 'PostgreSQL', icon: 'database', category: 'backend' },
  { name: 'GraphQL', icon: 'git-branch', category: 'backend' },
  { name: 'RESTful APIs', icon: 'webhook', category: 'backend' },
  { name: 'Firebase', icon: 'flame', category: 'backend' },
  
  // Tools
  { name: 'Git', icon: 'git-branch', category: 'tools' },
  { name: 'Docker', icon: 'box', category: 'tools' },
  { name: 'Jest', icon: 'test-tube', category: 'tools' },
  { name: 'Webpack', icon: 'package', category: 'tools' },
  { name: 'CI/CD', icon: 'git-merge', category: 'tools' },
  { name: 'AWS', icon: 'cloud', category: 'tools' },
  { name: 'Figma', icon: 'figma', category: 'tools' },
  
  // Languages
  { name: 'Python', icon: 'code', category: 'languages' },
  { name: 'Java', icon: 'coffee', category: 'languages' },
  { name: 'C++', icon: 'code', category: 'languages' },
  { name: 'Rust', icon: 'cog', category: 'languages' }
];