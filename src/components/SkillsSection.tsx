
import React from 'react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Redux", level: 87 },
    { name: "GraphQL", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "Git & GitHub", level: 90 },
    { name: "Sass/SCSS", level: 85 }
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Additional Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Ant Design", "Express.js", "Figma", "REST APIs", "Solidity", "Web3.js", "Ethereum"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
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
