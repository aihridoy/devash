
import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring and scaling React applications for production environments.",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      category: "React"
    },
    {
      title: "Modern CSS Techniques with Tailwind",
      excerpt: "Explore advanced CSS techniques and how Tailwind CSS can streamline your development workflow.",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "CSS"
    },
    {
      title: "Next.js Performance Optimization",
      excerpt: "Discover techniques to optimize your Next.js applications for better performance and user experience.",
      date: "February 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
      category: "Next.js"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Latest Blog Posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
