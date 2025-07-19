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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background with Teal/Cyan/Emerald theme to complement blue-purple family */}
      <div className="absolute inset-0 bg-gradient-to-bl from-teal-50/40 to-cyan-50/40 dark:from-gray-800/30 dark:to-teal-900/30 animate-pulse"></div>
      <div className="absolute top-1/5 left-1/3 w-96 h-96 bg-gradient-to-r from-teal-300/15 to-cyan-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-300/15 to-emerald-300/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute top-1/2 right-1/6 w-72 h-72 bg-gradient-to-r from-emerald-300/12 to-teal-300/12 rounded-full blur-xl animate-pulse" style={{animationDelay: '4.5s'}}></div>
      <div className="absolute bottom-1/6 left-1/4 w-56 h-56 bg-gradient-to-r from-teal-300/10 to-cyan-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional journey and career milestones
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in relative">
                {/* Static Background Gradient - Updated to match teal/cyan theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/8 via-cyan-600/8 to-emerald-600/8 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                        <div className="pl-6">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-xl text-purple-600 dark:text-purple-400 mb-1 font-semibold">
                            {exp.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/40 dark:border-white/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Responsibilities
                    </h4>
                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements - Updated to teal/cyan colors */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: `${index * 0.5}s`}}></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: `${(index + 1) * 0.7}s`}}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;