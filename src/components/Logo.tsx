import React from 'react';
import logoLight from '../assets/images/122.png';
import logoDark from '../assets/images/123.png';

export const Logo: React.FC<{ className?: string, light?: boolean }> = ({ className = "h-12", light = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <img 
        src={light ? logoLight : logoDark} 
        alt="Al-Aflak United Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
