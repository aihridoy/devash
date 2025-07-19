import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background with Different Blue/Purple Variation for distinction */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/40 to-violet-50/40 dark:from-gray-800/30 dark:to-indigo-900/30 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-300/15 to-violet-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-gradient-to-r from-violet-300/15 to-fuchsia-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-to-r from-fuchsia-300/12 to-indigo-300/12 rounded-full blur-xl animate-pulse" style={{animationDelay: '5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Academic foundation and research contributions
            </p>
          </div>
          
          {/* Main Education Card with Enhanced Glassmorphism */}
          <div className="backdrop-blur-lg bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in relative">
            {/* Static Background Gradient - Updated to match blue/purple theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-violet-600/8 to-fuchsia-600/8 rounded-3xl"></div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Timeline Section */}
                <div className="md:w-1/3 relative">
                  <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 rounded-2xl p-6 shadow-lg">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      2019 - 2023
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="md:w-2/3 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                    <div className="pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        B.Sc.(Hons.) in Computer Science & Engineering
                      </h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                        Leading University
                      </p>
                      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                        Completed Bachelor's degree in Computer Science & Engineering with a focus on 
                        software development, algorithms, and modern web technologies. Gained comprehensive 
                        knowledge in programming fundamentals, data structures, database management, 
                        and software engineering principles.
                      </p>
                    </div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 rounded-xl p-3 text-center">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Algorithms</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 rounded-xl p-3 text-center">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Data Structures</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 rounded-xl p-3 text-center">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Web Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Publications Section */}
          <div className="mt-12 backdrop-blur-lg bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 dark:border-white/20">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Publications
              </h4>
            </div>
            
            <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 rounded-2xl p-6 shadow-lg relative">
              {/* Static gradient overlay - Updated to match blue/purple theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-violet-600/5 to-fuchsia-600/5 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 leading-relaxed">
                      "Incorporating an Integrated Software System for Stroke Prediction using Machine Learning Algorithms and Artificial Neural Network"
                    </h5>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                        IEEE
                      </span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="text-gray-600 dark:text-gray-400">
                        November 3, 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;