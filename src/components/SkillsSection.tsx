import React from 'react';

const SkillsSection = () => {
  const technicalSkills = [
    "React.js",
    "Next.js", 
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Redux",
    "Rest API",
    "MongoDB",
    "Git & GitHub",
    "Sass/SCSS"
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Mentoring",
    "Critical Thinking",
    "Time Management",
    "Adaptability",
    "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background with Slate/Gray/Blue theme to complement the portfolio */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/40 to-gray-50/40 dark:from-gray-800/30 dark:to-slate-900/30 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/3 w-88 h-88 bg-gradient-to-r from-slate-300/15 to-gray-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/5 left-1/4 w-76 h-76 bg-gradient-to-r from-gray-300/15 to-blue-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-2/3 right-1/6 w-64 h-64 bg-gradient-to-r from-blue-300/12 to-slate-300/12 rounded-full blur-xl animate-pulse" style={{animationDelay: '5s'}}></div>
      <div className="absolute top-1/6 left-1/3 w-52 h-52 bg-gradient-to-r from-slate-300/10 to-gray-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '7s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technical proficiencies and professional capabilities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-fade-in">
              <div className="backdrop-blur-lg bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative">
                {/* Static Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/8 via-gray-600/8 to-blue-600/8 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-white/20 mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Technical Skills
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {technicalSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-sm bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-white/40 dark:hover:bg-white/15 group"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-slate-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-500/20 to-gray-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="animate-fade-in">
              <div className="backdrop-blur-lg bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative">
                {/* Static Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/8 via-gray-600/8 to-blue-600/8 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-white/20 mx-auto mb-4">
                      <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Soft Skills
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {softSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-sm bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:bg-white/40 dark:hover:bg-white/15 group"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Technologies */}
                  <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-slate-600/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-white/20">
                        <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        Additional Technologies
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Ant Design", "Express.js", "Figma", "REST APIs", "TypeScript", "Solidity", "Web3.js", "Ethereum"].map((tech, index) => (
                        <span
                          key={index}
                          className="backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/30 dark:border-white/20 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-slate-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500/20 to-gray-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '3s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;