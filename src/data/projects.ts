import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with React, Node.js, and MongoDB. Features include product filtering, user authentication, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A productivity application built with React and Firebase. Features include task creation, due dates, priority levels, categorization, and real-time updates.',
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecast weather data using the OpenWeatherMap API. Includes location search, unit conversion, and interactive charts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/yourusername/weather',
    featured: false
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS. Features include smooth scrolling, dark/light mode, project showcase, and contact form.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://example.com/portfolio',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: false
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'A fitness application that allows users to track workouts, set goals, and view progress over time. Built with React Native for cross-platform mobile use.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
    liveUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/yourusername/fitness',
    featured: true
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A full-stack blog application with user authentication, content management, comments, and search functionality. Built with MERN stack.',
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    liveUrl: 'https://example.com/blog',
    githubUrl: 'https://github.com/yourusername/blog',
    featured: false
  }
];