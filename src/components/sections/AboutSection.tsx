import React from 'react';
import { Award, Users, Clock, Utensils, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Award, label: "15+ Years Experience" },
    { icon: Users, label: "500+ Happy Clients" },
    { icon: Clock, label: "Always On Time" },
    { icon: Utensils, label: "Fresh Ingredients" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Savory Delights</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              With over 15 years of culinary excellence, we've been creating memorable dining experiences 
              for clients across the region. Our passion for exceptional food and impeccable service 
              has made us the premier choice for discerning hosts.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Led by Chef Maria Rodriguez, our team combines traditional techniques with innovative 
              flavors to create dishes that not only taste extraordinary but also create lasting memories 
              for you and your guests.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <span className="font-semibold text-gray-800">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Chef preparing food"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-medium">Rated 5 stars by our clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;