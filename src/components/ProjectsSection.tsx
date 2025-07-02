import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Star, Eye, GitFork } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate("/projects");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "SwiftCart: Home & Decor Hub",
      description: "Discover stylish home and decor essentials at SwiftCart, your one-stop shop for elegant living solutions.",
      image: "/swifthome.png",
      technologies: ["Next.js", "Tailwind CSS", "React Query", "MongoDB", "Mongoose", "Rest API", "Pdflib", "Resend", "Axios", "Next Auth"],
      githubUrl: "https://github.com/aihridoy/swiftcart",
      liveUrl: "https://swiftcart-five.vercel.app/",
      category: "E-commerce",
      stats: { stars: 24, forks: 8, views: 156 }
    },
    {
      title: "AirBnB: Hotel Booking App",
      description: "Easily book your stay with our intuitive Hotel Booking Web Application, designed to simplify the booking process.",
      image: "/airbnb.png",
      technologies: ["Next.js", "Tailwind CSS", "Pdflib", "Resend", "MongoDB", "Mongoose", "Rest API", "Next Auth"],
      githubUrl: "https://github.com/aihridoy/airbnb",
      liveUrl: "https://airbnb-seven-theta.vercel.app/",
      category: "Travel & Booking",
      stats: { stars: 31, forks: 12, views: 203 }
    },
    {
      title: "MovieDB: Your Ultimate Movie Information Hub",
      description: "A comprehensive web app that offers detailed information about movies including ratings, reviews, and trailers, all in one place.",
      image: "/moviedb.png",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Mongoose", "Rest API"],
      githubUrl: "https://github.com/aihridoy/moviedb",
      liveUrl: "https://lws-moviedb-chi.vercel.app/",
      category: "Entertainment",
      stats: { stars: 18, forks: 6, views: 142 }
    },
    {
      title: "Flavory – Savor the Taste, Love the Experience!",
      description: "Welcome to Flavory, a delightful web application built with Next.js that brings culinary magic to your fingertips!",
      image: "/flavory.png",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Mongoose", "Rest API", "Framer Motion"],
      githubUrl: "https://github.com/aihridoy/flavory",
      liveUrl: "https://flavory-phi.vercel.app/",
      category: "Food & Recipe",
      stats: { stars: 27, forks: 9, views: 189 }
    },
    {
      title: "LWS XStream: Streaming App",
      description: "An all-in-one streaming application that allows you to watch your favorite TV shows, movies, and live content with ease and high-quality performance.",
      image: "/xstream.png",
      technologies: ["Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/aihridoy/lws-xstream",
      liveUrl: "https://xstreamverse.netlify.app/en",
      category: "Streaming",
      stats: { stars: 42, forks: 15, views: 298 }
    },
    {
      title: "LWS Kitchen: Recipe App",
      description: "A culinary haven that blends tradition with innovation, offering an unforgettable dining experience with every dish crafted to perfection.",
      image: "/kitchen.png",
      technologies: ["Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/aihridoy/lws-kitchen",
      liveUrl: "https://dishcovery-realm.netlify.app/",
      category: "Food & Recipe",
      stats: { stars: 19, forks: 7, views: 134 }
    }
  ];

  const categoryColors = {
    "E-commerce": "from-emerald-500 to-teal-600",
    "Travel & Booking": "from-sky-500 to-blue-600",
    "Entertainment": "from-purple-500 to-indigo-600",
    "Food & Recipe": "from-orange-500 to-red-600",
    "Streaming": "from-pink-500 to-rose-600"
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with Smooth Transition */}
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Portfolio Showcase</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my latest work featuring cutting-edge technologies and innovative solutions
            </p>
          </div>

          {/* Project Grid with Consistent Image Sizing */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ease-out border border-gray-200/50 dark:border-gray-700/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[project.category] || 'from-gray-500 to-gray-600'} transition-all duration-300 ease-out`}>
                    {project.category}
                  </span>
                </div>

                {/* Consistent Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 ease-out group-hover:opacity-60"></div>

                  {/* Minimal Stats Overlay */}
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ease-out ${
                    hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}>
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star size={12} className="text-yellow-400" />
                      <span className="text-xs text-white font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <GitFork size={12} className="text-blue-400" />
                      <span className="text-xs text-white font-medium">{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Eye size={12} className="text-green-400" />
                      <span className="text-xs text-white font-medium">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 ease-out group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-out group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-700 dark:group-hover:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 ease-out text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-out text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={handleViewAllProjects}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Explore All Projects</span>
              <ExternalLink size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
              Discover more innovative solutions and creative implementations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;