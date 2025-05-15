import { SocialLink } from '../types';

export const personalInfo = {
  name: 'John Macharia',
  title: 'Software Engineer',
  description: 'Passionate software engineer with 7+ years of experience specializing in full-stack development. I build scalable, user-friendly applications with modern technologies and best practices.',
  location: 'San Francisco, CA',
  email: 'machariachege20@gmail.com',
  resumeUrl: '/resume.pdf'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:machariachege20@gmail.com',
    icon: 'mail'
  }
];

export const navItems = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'Skills', path: 'skills' },
  { name: 'Projects', path: 'projects' },
  { name: 'Experience', path: 'experience' },
  { name: 'Contact', path: 'contact' }
];