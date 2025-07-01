
import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-fade-in">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  2019 - 2023
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  B.Sc.(Hons.) in Computer Science & Engineering
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                  Leading University
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Completed Bachelor's degree in Computer Science & Engineering with a focus on 
                  software development, algorithms, and modern web technologies. Gained comprehensive 
                  knowledge in programming fundamentals, data structures, database management, 
                  and software engineering principles.
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Publications
              </h4>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  "Incorporating an Integrated Software System for Stroke Prediction using Machine Learning Algorithms and Artificial Neural Network"
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  IEEE • November 3, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
