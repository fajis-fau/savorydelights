import React from 'react';
import MenuCard from '../ui/MenuCard';
import { menuItems } from '../../data/menuData';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our signature dishes crafted with the finest ingredients and presented with artistic flair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;