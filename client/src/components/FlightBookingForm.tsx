// src/components/FlightBookingForm.tsx
'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function FlightBookingForm() {
  // Form state
  const [formData, setFormData] = useState({
    departurePlace: '',
    destination: '',
    fullName: '',
    nationality: '',
    currentCountry: '',
    email: '',
    phoneNumber: '',
    departureDate: '',
    returnDate: '',
    adults: 1,
    children: 0,
    infants: 0,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Optional: Show alert
    alert('Form submitted! Check console for data.');

    // Optional: Reset form
    // setFormData({ ...initialState });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 mt-20">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-2xl bg-gradient-to-br from-[#001C38]/90 via-[#002A5C]/80 to-[#0B3D91]/80 
        rounded-3xl shadow-[0_0_40px_-10px_rgba(255,215,0,0.3)] p-6 md:p-10 
        border border-yellow-400/30"
      >
        {/* Form Grid - MOBILE FRIENDLY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

          {/* Text Inputs */}
          {[
            { name: 'departurePlace', placeholder: 'Departure Place' },
            { name: 'destination', placeholder: 'Destination' },
            { name: 'fullName', placeholder: 'Full Name' },
            { name: 'nationality', placeholder: 'Nationality' },
            { name: 'currentCountry', placeholder: 'Current Country of Stay' },
            { name: 'email', placeholder: 'Email', type: 'email' },
            { name: 'phoneNumber', placeholder: 'Phone Number', type: 'tel' },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required={field.name === 'email' || field.name === 'fullName'}
              className="px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 
              text-white placeholder-white/70 focus:outline-none focus:ring-2 
              focus:ring-yellow-400/40 transition-all duration-300"
            />
          ))}

          {/* Date Inputs */}
          <div className="relative">
            <input
              type="text"
              name="departureDate"
              placeholder="Departure Date"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 
              text-white placeholder-white/70 focus:outline-none focus:ring-2 
              focus:ring-yellow-400/40"
            />
            <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-yellow-400/60 pointer-events-none" />
          </div>

          <div className="relative">
            <input
              type="text"
              name="returnDate"
              placeholder="Return Date"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 
              text-white placeholder-white/70 focus:outline-none focus:ring-2 
              focus:ring-yellow-400/40"
            />
            <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-yellow-400/60 pointer-events-none" />
          </div>

          {/* Number Inputs */}
          <input
            type="number"
            name="adults"
            placeholder="Adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 
            text-white placeholder-white/70 focus:outline-none focus:ring-2 
            focus:ring-yellow-400/40"
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 
            text-white placeholder-white/70 focus:outline-none focus:ring-2 
            focus:ring-yellow-400/40"
          />
          <input
            type="number"
            name="infants"
            placeholder="Infants"
            min="0"
            value={formData.infants}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/10 border border-yellow-400/20 
            text-white placeholder-white/70 focus:outline-none focus:ring-2 
            focus:ring-yellow-400/40"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="px-16 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 
            text-[#001C38] font-semibold rounded-full shadow-[0_0_25px_-5px_rgba(255,215,0,0.7)] 
            hover:shadow-[0_0_45px_-5px_rgba(255,215,0,0.9)] hover:scale-105 
            transition-all duration-300 focus:ring-2 focus:ring-yellow-300/60"
          >
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
}