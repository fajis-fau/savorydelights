import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../forms/ContactForm';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@savorydelights.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "123 Culinary Street\nFoodie City, FC 12345"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Ready to plan your next event? Let's discuss how we can make it extraordinary.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{info.label}</p>
                    <p className="text-gray-300 whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;