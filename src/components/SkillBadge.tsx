import React from 'react';
import { Skill } from '../types';
import * as LucideIcons from 'lucide-react';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const IconComponent = (LucideIcons as any)[skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)];

  return (
    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
      {IconComponent && (
        <div className="mr-2 text-blue-600 dark:text-blue-400">
          <IconComponent size={18} />
        </div>
      )}
      <span className="text-gray-800 dark:text-white font-medium">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillBadge;