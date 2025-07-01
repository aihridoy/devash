
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Frontend Developer with extensive experience in modern web technologies. 
                My journey in software development has been driven by a love for creating intuitive, 
                responsive, and user-friendly applications.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With expertise in React.js, Next.js, and modern CSS frameworks, I specialize in 
                building scalable web applications that deliver exceptional user experiences. 
                I'm constantly learning and adapting to new technologies to stay at the forefront 
                of web development.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy mentoring upcoming developers, sharing knowledge 
                through technical writing, and exploring the latest trends in web development 
                and user interface design.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop"
                alt="Working on laptop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
