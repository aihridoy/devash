
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dorik Website Builder",
      description: "Led front-end development for a comprehensive website builder platform with advanced features including site management, post scheduling, and marketplace integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Ant Design", "Sass", "GraphQL", "REST API"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Inventory Management System",
      description: "Built a comprehensive inventory management system from scratch with real-time tracking, reporting, and user management features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Uniswap Clone",
      description: "Developed a decentralized exchange clone with Web3 integration, smart contract interaction, and modern DeFi features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React.js", "Web3.js", "Solidity", "Ethereum", "Smart Contracts"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Stroke Prediction ML System",
      description: "Research project implementing machine learning algorithms and artificial neural networks for medical stroke prediction with high accuracy.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "Neural Networks", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
