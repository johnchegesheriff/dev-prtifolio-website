import React from 'react';
import { education } from '../data/education';
import { personalInfo } from '../data/personalInfo';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A little background about who I am and what drives me as a software engineer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate software engineer with a strong foundation in full-stack development. 
              Throughout my career, I've focused on building scalable, user-friendly applications 
              that solve real-world problems. I'm constantly learning and adapting to new technologies 
              to stay at the forefront of the industry.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My approach to software development combines technical expertise with a deep understanding 
              of user needs. I believe in clean, maintainable code and collaborate effectively with 
              cross-functional teams to deliver exceptional results.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you might find me hiking, reading tech blogs, or contributing to 
              open-source projects. I'm always open to new opportunities and challenges that allow me 
              to grow professionally.
            </p>
          </div>
          
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;