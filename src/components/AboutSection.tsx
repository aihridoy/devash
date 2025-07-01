import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background with Pulse Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-gray-800/30 dark:to-purple-900/30 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about crafting digital experiences that make a difference
            </p>
          </div>
          
          {/* Glassmorphism Container */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-6 animate-fade-in">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed pl-6">
                      I'm a passionate Frontend Developer with extensive experience in modern web technologies. 
                      My journey in software development has been driven by a love for creating intuitive, 
                      responsive, and user-friendly applications.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed pl-6">
                      With expertise in React.js, Next.js, and modern CSS frameworks, I specialize in 
                      building scalable web applications that deliver exceptional user experiences. 
                      I'm constantly learning and adapting to new technologies to stay at the forefront 
                      of web development.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-600 to-blue-600 rounded-full"></div>
                    <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed pl-6">
                      When I'm not coding, I enjoy mentoring upcoming developers, sharing knowledge 
                      through technical writing, and exploring the latest trends in web development 
                      and user interface design.
                    </p>
                  </div>
                </div>
                
                {/* Stats or Highlights */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 dark:border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                  </div>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="relative order-1 lg:order-2 animate-fade-in">
                <div className="relative group">
                  {/* Background Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75"></div>
                  
                  {/* Image Container */}
                  <div className="relative backdrop-blur-sm bg-white/10 dark:bg-white/5 border border-white/30 dark:border-white/20 rounded-2xl p-4 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Working on laptop"
                      className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-4 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 rounded-xl pointer-events-none"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/30 dark:border-white/20 animate-bounce" style={{animationDelay: '3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;