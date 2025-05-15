import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import SocialLinks from '../components/SocialLinks';
import { socialLinks } from '../data/personalInfo';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              {personalInfo.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <FileText size={18} className="mr-2" /> View Resume
              </a>
              
              <button
                onClick={scrollToProjects}
                className="flex items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
              >
                View Projects <ArrowDown size={18} className="ml-2" />
              </button>
            </div>
            
            <div className="mt-8">
              <SocialLinks links={socialLinks} />
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-20 absolute"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover relative z-10 border-4 border-white dark:border-gray-800"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-20">
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  👋 Available for hire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;