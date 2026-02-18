'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiDroplet, FiTool, FiWind, FiHome, FiSearch } from 'react-icons/fi';
import { FaPaintRoller, FaBroom, FaLeaf, FaHammer, FaUserMd, FaBalanceScale, FaGraduationCap, FaUserShield, FaCar, FaUtensils, FaCut, FaSpa, FaCamera, FaCalendarAlt } from 'react-icons/fa';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services = [
    { icon: <FiZap />, name: 'Electrician', category: 'Home Repair', price: '₹299 onwards', desc: 'Expert electrical repairs, wiring, switch installations, and emergency services', features: ['24/7 Available', 'Licensed Professionals', 'Safety Guaranteed'] },
    { icon: <FiDroplet />, name: 'Plumber', category: 'Home Repair', price: '₹249 onwards', desc: 'Pipe repairs, leak fixing, bathroom fittings, and drainage solutions', features: ['Quick Response', 'Quality Parts', 'Warranty Included'] },
    { icon: <FiTool />, name: 'Carpenter', category: 'Home Repair', price: '₹399 onwards', desc: 'Furniture repair, custom woodwork, door/window fixing', features: ['Skilled Craftsmen', 'Custom Solutions', 'Quality Wood'] },
    { icon: <FaPaintRoller />, name: 'Painter', category: 'Home Improvement', price: '₹15/sq.ft', desc: 'Interior & exterior painting, wall texture, waterproofing', features: ['Premium Paints', 'Clean Work', 'Color Consultation'] },
    { icon: <FiWind />, name: 'AC Repair', category: 'Appliances', price: '₹349 onwards', desc: 'AC installation, repair, gas filling, and maintenance', features: ['All Brands', 'Genuine Parts', '90 Days Warranty'] },
    { icon: <FiHome />, name: 'Appliance Repair', category: 'Appliances', price: '₹299 onwards', desc: 'Washing machine, refrigerator, microwave repairs', features: ['Expert Technicians', 'Same Day Service', 'Affordable Rates'] },
    { icon: <FaBroom />, name: 'Cleaning Service', category: 'Cleaning', price: '₹499 onwards', desc: 'Deep cleaning, bathroom cleaning, kitchen cleaning', features: ['Eco-Friendly Products', 'Trained Staff', 'Equipment Provided'] },
    { icon: <FaLeaf />, name: 'Gardening', category: 'Outdoor', price: '₹399 onwards', desc: 'Garden maintenance, lawn care, plant care', features: ['Regular Maintenance', 'Plant Experts', 'Seasonal Care'] },
    { icon: <FaLeaf />, name: 'Pest Control', category: 'Home Care', price: '₹599 onwards', desc: 'Cockroach, termite, bed bug, rodent control', features: ['Safe Chemicals', 'Odorless Treatment', '3 Months Warranty'] },
    { icon: <FaHammer />, name: 'Construction', category: 'Home Improvement', price: 'Custom Quote', desc: 'Home renovation, construction, civil work', features: ['Experienced Team', 'Quality Materials', 'Project Management'] },
    { icon: <FaUserMd />, name: 'Home Healthcare', category: 'Healthcare', price: '₹799 onwards', desc: 'Doctor visits, nursing care, physiotherapy at home', features: ['Qualified Doctors', 'Emergency Available', 'Regular Checkups'] },
    { icon: <FaBalanceScale />, name: 'Legal Consultation', category: 'Professional', price: '₹999 onwards', desc: 'Legal advice, documentation, court representation', features: ['Experienced Advocates', 'Confidential', 'All Legal Matters'] },
    { icon: <FaGraduationCap />, name: 'Home Tuition', category: 'Education', price: '₹500/hour', desc: 'All subjects, all classes, exam preparation', features: ['Qualified Teachers', 'Flexible Timing', 'Personalized Attention'] },
    { icon: <FaUserShield />, name: 'Security Guard', category: 'Security', price: '₹12,000/month', desc: 'Residential & commercial security services', features: ['Trained Guards', 'Background Verified', '24/7 Monitoring'] },
    { icon: <FaCar />, name: 'Driver Service', category: 'Transportation', price: '₹15,000/month', desc: 'Personal driver, experienced and licensed', features: ['Licensed Drivers', 'Background Checked', 'Flexible Hours'] },
    { icon: <FaUtensils />, name: 'Cook Service', category: 'Household', price: '₹8,000/month', desc: 'Home cooking, meal preparation, all cuisines', features: ['Hygienic Cooking', 'Multiple Cuisines', 'Flexible Menu'] },
    { icon: <FaCut />, name: 'Beauty Services', category: 'Personal Care', price: '₹499 onwards', desc: 'Haircut, facial, makeup, beauty treatments at home', features: ['Professional Beauticians', 'Quality Products', 'Salon Experience'] },
    { icon: <FaSpa />, name: 'Massage Therapy', category: 'Wellness', price: '₹799 onwards', desc: 'Therapeutic massage, spa services at home', features: ['Certified Therapists', 'Relaxing Experience', 'Health Benefits'] },
    { icon: <FaCamera />, name: 'Photography', category: 'Events', price: '₹5,000 onwards', desc: 'Event photography, videography, editing', features: ['Professional Equipment', 'Experienced Photographers', 'Quick Delivery'] },
    { icon: <FaCalendarAlt />, name: 'Event Planning', category: 'Events', price: 'Custom Quote', desc: 'Complete event management and planning', features: ['End-to-End Service', 'Creative Ideas', 'Budget Friendly'] }
  ];

  const categories = ['All', ...new Set(services.map(s => s.category))];

  const filteredServices = services.filter(service => 
    (selectedCategory === 'All' || service.category === selectedCategory) &&
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional home services at your doorstep</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-yellow-500 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="p-6">
                  <div className="text-5xl text-yellow-500 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <div className="text-sm text-gray-500 mb-3">{service.category}</div>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <span className="text-green-500">✓</span> {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-yellow-500">{service.price}</div>
                    <a href="tel:+918623038373" className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-all">
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
