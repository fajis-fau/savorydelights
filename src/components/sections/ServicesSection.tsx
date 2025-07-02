import React from 'react';
import { Users, Heart, Calendar, CheckCircle } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional catering for meetings, conferences, and corporate gatherings with attention to detail and dietary requirements.",
      features: ["Business lunches", "Conference catering", "Office parties", "Product launches"]
    },
    {
      icon: Heart,
      title: "Weddings & Celebrations",
      description: "Make your special day unforgettable with our elegant wedding catering and celebration packages.",
      features: ["Wedding receptions", "Anniversary parties", "Birthday celebrations", "Family reunions"]
    },
    {
      icon: Calendar,
      title: "Private Events",
      description: "Intimate gatherings and private parties catered with personalized menus and exceptional service.",
      features: ["Dinner parties", "Holiday gatherings", "Cocktail receptions", "Private dinners"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive catering solutions tailored to your specific needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;