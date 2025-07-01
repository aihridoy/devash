
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Instructor",
      company: "Times IT",
      location: "Sylhet, Bangladesh",
      period: "11/2023 – present",
      responsibilities: [
        "Collaborate with teams to resolve bugs and optimize web app development using React.js and Next.js, delivering scalable client solutions.",
        "Mentor freelancers, enhancing their networking and communication skills to build thriving careers."
      ]
    },
    {
      title: "Software Engineer",
      company: "Dorik",
      location: "Sylhet, Bangladesh",
      period: "10/2022 – 10/2023",
      responsibilities: [
        "Led Front-End development with React.js, Ant Design, custom CSS, and Sass.",
        "Enhanced platform stability through bug fixes and code refactoring.",
        "Built key features including site suspension, post-scheduling, advanced search, article pagination, admin dashboard upgrades, plan management, CAPTCHA integration, and Dorik marketplace improvements.",
        "Integrated REST and GraphQL APIs on the client side, driving functionality and user experience enhancements."
      ]
    },
    {
      title: "MERN Stack Developer",
      company: "Code Partner IT Solutions Private Limited",
      location: "Kolkata, India",
      period: "10/2021 – 12/2021",
      responsibilities: [
        "Developed an inventory management system from scratch.",
        "Built a Uniswap clone using ReactJS.",
        "Learned blockchain fundamentals including Ethereum, Solidity, Web3.js, and smart contracts."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-gray-800/50 dark:to-purple-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-fade-in">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
