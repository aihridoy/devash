import React from "react";
import { Download, Github, Linkedin } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/12XDgUbnRMQ4WNyR1RygGG80gxorAT2XJ/view";

const HeroSection = () => {
  const handleDownloadResume = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-20 relative overflow-hidden"
    >
      {/* Background Animated Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div> */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Ashraful Islam"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-8 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Ashraful Islam
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Frontend Developer
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in">
            Passionate about creating exceptional digital experiences with
            modern web technologies. Specializing in React, Next.js, and
            building scalable front-end solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </button>

            <div className="flex gap-4">
              <a
                href="https://github.com/aihridoy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Github
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ashraful-islam-hridoy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
