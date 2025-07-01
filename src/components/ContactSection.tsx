import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    isSubmitting: false,
    message: '',
    isError: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        isSubmitting: false,
        message: 'Please fill in all fields',
        isError: true
      });
      setTimeout(() => setStatus({ isSubmitting: false, message: '', isError: false }), 3000);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        isSubmitting: false,
        message: 'Please enter a valid email address',
        isError: true
      });
      setTimeout(() => setStatus({ isSubmitting: false, message: '', isError: false }), 3000);
      return;
    }

    try {
      setStatus({ isSubmitting: true, message: '', isError: false });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({
        isSubmitting: false,
        message: "Message sent successfully! I'll get back to you soon.",
        isError: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ isSubmitting: false, message: '', isError: false }), 5000);

    } catch (error) {
      setStatus({
        isSubmitting: false,
        message: 'Failed to send message. Please try again later.',
        isError: true
      });
      setTimeout(() => setStatus({ isSubmitting: false, message: '', isError: false }), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40 dark:from-gray-800/40 dark:via-purple-900/30 dark:to-gray-700/40 animate-pulse"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/6 left-1/5 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/12 to-pink-400/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '5s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let's create something amazing together
            </p>
          </div>
          
          {/* Main Content Container with Glassmorphism */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                    I'm always interested in hearing about new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 hover:scale-105 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 dark:border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-700 dark:text-gray-200">aihridoy976@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 hover:scale-105 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 dark:border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-700 dark:text-gray-200">+8801886754307</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 hover:scale-105 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 dark:border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-pink-600 dark:text-pink-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-700 dark:text-gray-200">Sylhet, Bangladesh</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="relative pt-8">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="flex justify-center space-x-4 pt-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500/40 to-blue-500/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="relative animate-fade-in">
                {/* Form Background Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-75"></div>
                
                <div className="relative backdrop-blur-lg bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    {/* Status Message */}
                    {status.message && (
                      <div className={`p-4 rounded-lg text-center ${
                        status.isError 
                          ? 'bg-red-100/50 dark:bg-red-900/30 text-red-700 dark:text-red-300' 
                          : 'bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      } transition-all duration-300`}>
                        {status.message}
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all duration-300"
                          placeholder="Your name"
                          required
                          disabled={status.isSubmitting}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all duration-300"
                          placeholder="your.email@example.com"
                          required
                          disabled={status.isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all duration-300"
                        placeholder="What's this about?"
                        required
                        disabled={status.isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 resize-none transition-all duration-300"
                        placeholder="Tell me about your project..."
                        required
                        disabled={status.isSubmitting}
                      ></textarea>
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={status.isSubmitting}
                      className={`group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden ${
                        status.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Send size={20} className={`relative z-10 group-hover:rotate-12 transition-transform duration-300 ${status.isSubmitting ? 'animate-spin' : ''}`} />
                      <span className="relative z-10">
                        {status.isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;