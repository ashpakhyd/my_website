import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">S.U.GROUP</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for all home services. Quality, reliability, and customer satisfaction guaranteed.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-yellow-500 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-yellow-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Electrician</li>
              <li className="text-gray-400">Plumber</li>
              <li className="text-gray-400">Carpenter</li>
              <li className="text-gray-400">AC Repair</li>
              <li className="text-gray-400">Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <FiPhone className="text-yellow-500" />
                <a href="tel:+918623038373" className="hover:text-yellow-500">+91 8623038373</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail className="text-yellow-500" />
                <a href="mailto:ashpakhyd@gmail.com" className="hover:text-yellow-500">ashpakhyd@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FiMail className="text-yellow-500" />
                <a href="mailto:SUGroupEmail@gmail.com" className="hover:text-yellow-500">SUGroupEmail@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <FiMapPin className="text-yellow-500 mt-1" />
                <span>1st floor, Happy House, Gangakhed<br />Parbhani, Maharashtra-431514</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Ashfaq Ahemad Shaikh. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-yellow-500">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-yellow-500">Terms of Service</Link>
          </div>
        </div>
      </div>

      <a href="https://wa.me/918623038373" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50">
        <FaWhatsapp size={28} />
      </a>
    </footer>
  );
}
