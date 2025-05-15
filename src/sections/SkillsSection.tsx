import React, { useState } from 'react';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';
import { Code2, Server, Wrench, Languages } from 'lucide-react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools' | 'languages';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Code2 size={18} /> },
    { id: 'frontend', name: 'Frontend', icon: <Code2 size={18} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={18} /> },
    { id: 'tools', name: 'Tools', icon: <Wrench size={18} /> },
    { id: 'languages', name: 'Languages', icon: <Languages size={18} /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 overflow-x-auto py-2">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as SkillCategory)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="transform transition-all duration-300 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                animation: 'fadeIn 0.5s forwards'
              }}
            >
              <SkillBadge skill={skill} />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;