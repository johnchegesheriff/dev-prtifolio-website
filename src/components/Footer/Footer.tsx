import React from 'react';
import { socialLinks, personalInfo } from '../../data/personalInfo';
import SocialLinks from '../SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {personalInfo.name.split(' ')[0]}
              <span className="text-gray-800 dark:text-white">
                {personalInfo.name.split(' ')[1]}
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks links={socialLinks} />
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;