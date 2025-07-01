
import React from 'react';

const SkillsSection = () => {
  const technicalSkills = [
    "React.js",
    "Next.js", 
    "JavaScript/TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Redux",
    "GraphQL",
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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-fade-in">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Additional Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Ant Design", "Express.js", "Figma", "REST APIs", "Solidity", "Web3.js", "Ethereum"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
