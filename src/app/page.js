'use client';
import { motion } from 'framer-motion';
import { FiZap, FiDroplet, FiTool, FiWind, FiHome, FiShield, FiClock, FiDollarSign, FiMapPin, FiStar, FiCheck } from 'react-icons/fi';
import { FaApple, FaGooglePlay, FaPaintRoller, FaBroom, FaLeaf, FaHammer, FaUserMd, FaBalanceScale, FaGraduationCap, FaUserShield, FaCar, FaUtensils, FaCut, FaSpa, FaCamera, FaCalendarAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState({ customers: 0, technicians: 0, services: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount({
        customers: Math.floor((10000 / steps) * step),
        technicians: Math.floor((500 / steps) * step),
        services: Math.floor((50000 / steps) * step)
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <FiZap />, name: 'Electrician', desc: 'Wiring, repairs & installations' },
    { icon: <FiDroplet />, name: 'Plumber', desc: 'Pipe repairs & installations' },
    { icon: <FiTool />, name: 'Carpenter', desc: 'Furniture & woodwork' },
    { icon: <FaPaintRoller />, name: 'Painter', desc: 'Interior & exterior painting' },
    { icon: <FiWind />, name: 'AC Repair', desc: 'AC service & maintenance' },
    { icon: <FiHome />, name: 'Appliances', desc: 'Home appliance repair' },
    { icon: <FaBroom />, name: 'Cleaner', desc: 'Deep cleaning services' },
    { icon: <FaLeaf />, name: 'Gardener', desc: 'Garden maintenance' },
    { icon: <FaLeaf />, name: 'Pest Control', desc: 'Pest elimination' },
    { icon: <FaHammer />, name: 'Builder', desc: 'Construction services' },
    { icon: <FaUserMd />, name: 'Doctor', desc: 'Home healthcare' },
    { icon: <FaBalanceScale />, name: 'Advocate', desc: 'Legal consultation' },
    { icon: <FaGraduationCap />, name: 'Tutor', desc: 'Home tutoring' },
    { icon: <FaUserShield />, name: 'Security Guard', desc: 'Security services' },
    { icon: <FaCar />, name: 'Driver', desc: 'Professional drivers' },
    { icon: <FaUtensils />, name: 'Cook', desc: 'Home cooking services' },
    { icon: <FaCut />, name: 'Beautician', desc: 'Beauty services at home' },
    { icon: <FaSpa />, name: 'Massage', desc: 'Therapeutic massage' },
    { icon: <FaCamera />, name: 'Photographer', desc: 'Professional photography' },
    { icon: <FaCalendarAlt />, name: 'Event Planner', desc: 'Event management' }
  ];

  const features = [
    { icon: <FiClock />, title: '24/7 Emergency Service', desc: 'Available round the clock' },
    { icon: <FiShield />, title: 'Verified Professionals', desc: 'Background checked experts' },
    { icon: <FiDollarSign />, title: 'Transparent Pricing', desc: 'No hidden charges' },
    { icon: <FiMapPin />, title: 'Real-time Tracking', desc: 'Track your service provider' },
    { icon: <FiCheck />, title: 'Secure Payments', desc: 'Multiple payment options' },
    { icon: <FiStar />, title: 'Quality Guarantee', desc: '100% satisfaction assured' }
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', rating: 5, text: 'Excellent service! The electrician arrived on time and fixed everything perfectly.', location: 'Mumbai' },
    { name: 'Priya Sharma', rating: 5, text: 'Very professional plumber. Solved my water leakage issue quickly.', location: 'Delhi' },
    { name: 'Amit Patel', rating: 5, text: 'Best cleaning service I have used. Highly recommended!', location: 'Pune' },
    { name: 'Sneha Reddy', rating: 5, text: 'The AC technician was knowledgeable and efficient. Great experience!', location: 'Bangalore' },
    { name: 'Vikram Singh', rating: 5, text: 'Affordable pricing and quality work. Will use again!', location: 'Hyderabad' }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Your Home Services,<br />Just a Tap Away
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Book electricians, plumbers, cleaners & 20+ services instantly
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a href="#services" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all min-w-[180px]">
              Book Now
            </a>
            <a href="tel:+918623038373" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all min-w-[180px]">
              Call +91 8623038373
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all min-w-[180px]">
              <FaApple size={20} /><span>App Store</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all min-w-[180px]">
              <FaGooglePlay size={20} /><span>Google Play</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Choose from 20+ professional home services</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="text-4xl text-yellow-500 mb-3 group-hover:scale-110 transition-transform flex items-center justify-center h-12">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '1', icon: '📱', title: 'Choose Service', desc: 'Select from 20+ services' },
              { step: '2', icon: '📅', title: 'Book Appointment', desc: 'Pick your preferred time' },
              { step: '3', icon: '✅', title: 'Get Service Done', desc: 'Professional arrives on time' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center flex flex-col items-center"
              >
                <div className="text-6xl mb-4 h-20 flex items-center justify-center">{item.icon}</div>
                <div className="text-yellow-500 font-bold text-2xl mb-2">Step {item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center flex flex-col items-center"
              >
                <div className="text-5xl text-yellow-500 mb-4 flex justify-center items-center h-16">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">{count.customers.toLocaleString()}+</div>
              <div className="text-xl">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{count.technicians}+</div>
              <div className="text-xl">Verified Technicians</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{count.services.toLocaleString()}+</div>
              <div className="text-xl">Services Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-xl">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-md"
              >
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Download Our App</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">Get instant access to all services. Book, track, and manage everything from your phone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold">
              <FaApple size={32} /> Download on App Store
            </a>
            <a href="#" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-bold">
              <FaGooglePlay size={32} /> Get it on Google Play
            </a>
          </div>
          <div className="bg-white p-8 rounded-xl inline-block">
            <div className="text-black font-bold mb-2">Scan QR Code</div>
            <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-black">QR Code</div>
          </div>
        </div>
      </section>
    </main>
  );
}
