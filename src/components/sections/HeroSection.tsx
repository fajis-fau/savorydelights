import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Exceptional Catering for 
          <span className="text-amber-400"> Every Occasion</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          From intimate gatherings to grand celebrations, we craft unforgettable culinary experiences 
          that delight your guests and exceed your expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Our Menu
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;