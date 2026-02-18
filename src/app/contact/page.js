'use client';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to help you 24/7</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:+918623038373" className="text-gray-600 hover:text-yellow-500">+91 8623038373</a>
                    <p className="text-sm text-gray-500">Mon-Sun, 24/7 Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:ashpakhyd@gmail.com" className="text-gray-600 hover:text-yellow-500">ashpakhyd@gmail.com</a>
                    <br />
                    <a href="mailto:SUGroupEmail@gmail.com" className="text-gray-600 hover:text-yellow-500">SUGroupEmail@gmail.com</a>
                    <p className="text-sm text-gray-500">We'll reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-600">1st floor, Happy House, Gangakhed<br />Parbhani, Maharashtra-431514</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <FiClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">24/7 Service Available<br />Emergency Support Always Open</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://wa.me/918623038373" className="bg-gray-100 p-3 rounded-full hover:bg-green-500 hover:text-white transition-all">
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-6">Send Message</h2>
              {submitted && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold hover:bg-yellow-600 transition-all flex items-center justify-center gap-2">
                  <FiSend /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us On Map</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.123456789!2d76.5!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3NsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
