import React from 'react';
import { DivideIcon as LucideIcon, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-amber-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-700">
            <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;