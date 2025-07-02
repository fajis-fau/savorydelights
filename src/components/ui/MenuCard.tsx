import React from 'react';

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-600">{price}</span>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;