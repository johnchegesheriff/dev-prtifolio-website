import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-600 ml-6 pl-8 sm:ml-12 sm:pl-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`mb-12 ${index === experiences.length - 1 ? '' : ''}`}
                style={{ 
                  opacity: 0,
                  animation: `fadeIn 0.5s forwards ${index * 0.2}s`
                }}
              >
                <div className="absolute -left-6 mt-2 bg-white dark:bg-gray-800 p-2 rounded-full border-4 border-blue-600">
                  <Briefcase size={20} className="text-blue-600" />
                </div>
                
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 mb-3">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {experience.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                      {experience.period}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;