import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold">Savory Delights</span>
          </div>
          <p className="text-gray-400 mb-6">Creating extraordinary culinary experiences for every occasion.</p>
          <p className="text-gray-500">&copy; 2025 Savory Delights Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;