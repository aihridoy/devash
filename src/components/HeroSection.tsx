
import React from 'react';
import { Download, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // This would typically link to an actual resume file
    console.log('Download resume clicked');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-8 border-white dark:border-gray-700 shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Frontend Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Passionate about creating exceptional digital experiences with modern web technologies. 
            Specializing in React, Next.js, and building scalable front-end solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
