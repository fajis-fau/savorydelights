import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating }) => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;