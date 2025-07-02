import React, { useState, useEffect } from "react";
import { Github, ExternalLink, Star, Eye, GitFork, Filter, Search, ArrowUp, Code, Palette, Globe } from "lucide-react";
import { ThemeProvider } from "@/components/ThemeProvider";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const categories = ["All", "E-commerce", "Travel & Booking", "Entertainment", "Food & Recipe", "Streaming"];
  
  const categoryColors = {
    "E-commerce": "from-emerald-500 to-teal-600",
    "Travel & Booking": "from-sky-500 to-blue-600",
    "Entertainment": "from-purple-500 to-indigo-600",
    "Food & Recipe": "from-orange-500 to-red-600",
    "Streaming": "from-pink-500 to-rose-600"
  };

  const categoryIcons = {
    "E-commerce": Globe,
    "Travel & Booking": Globe,
    "Entertainment": Code,
    "Food & Recipe": Palette,
    "Streaming": Code
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = projects;
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalStats = projects.reduce((acc, project) => ({
    stars: acc.stars + project.stats.stars,
    forks: acc.forks + project.stats.forks,
    views: acc.views + project.stats.views
  }), { stars: 0, forks: 0, views: 0 });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-purple-900/20 transition-colors duration-300">
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <section className="relative z-10 py-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Complete Portfolio</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
                  All Projects
                </h1>
                
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
                    <div className="absolute -top-1 left-0 w-4 h-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Explore my complete collection of projects showcasing cutting-edge technologies and innovative solutions
                </p>
              </div>

              <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                  <div className="relative w-full lg:w-96">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search projects, technologies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const IconComponent = categoryIcons[category] || Filter;
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={` flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                            selectedCategory === category
                              ? `bg-gradient-to-r ${categoryColors[category] || 'from-blue-500 to-purple-500'} text-white shadow-lg`
                              : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50'
                          }`}
                        >
                          <IconComponent size={16} />
                          {category}
                          {category !== "All" && (
                            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                              selectedCategory === category 
                                ? 'bg-white/20' 
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                            }`}>
                              {projects.filter(p => p.category === category).length}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-out border border-gray-200/50 dark:border-gray-700/50 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } ${project.featured ? 'ring-2 ring-blue-500/20 dark:ring-blue-400/20' : ''}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Star size={10} fill="currentColor" />
                          Featured
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4 z-20">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[project.category] || 'from-gray-500 to-gray-600'}`}>
                        {project.category}
                      </span>
                    </div>

                    <div className="relative overflow-hidden h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ease-out group-hover:opacity-60"></div>

                      <div className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-300 ease-out ${
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

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 ease-out group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-out hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 ease-out text-sm font-medium flex-1 justify-center"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-out text-sm font-medium flex-1 justify-center"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
                  <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </section>

          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 ease-out ${
              showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Projects;