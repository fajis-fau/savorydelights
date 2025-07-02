import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-600 focus:outline-none text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-600 focus:outline-none text-white"
          required
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-600 focus:outline-none text-white"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-600 focus:outline-none text-white"
        />
      </div>
      <select 
        name="eventType"
        value={formData.eventType}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-600 focus:outline-none text-white"
      >
        <option value="">Select Event Type</option>
        <option value="corporate">Corporate Event</option>
        <option value="wedding">Wedding</option>
        <option value="private">Private Party</option>
        <option value="other">Other</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us about your event..."
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-amber-600 focus:outline-none text-white resize-none"
      ></textarea>
      <button 
        type="submit"
        className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;