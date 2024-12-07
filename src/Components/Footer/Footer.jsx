import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../logo/N.png"
const FooterComponent = () => {
  return (
    <footer className="bg-[#1c1b1b] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img src={logo} alt="NAZ Logo" className="h-10 w-10 rounded-full mr-2" />
              <span className="text-xl font-bold">NAZ</span>
            </div>
            <p className="text-sm text-gray-300">
              Providing innovative solutions and exceptional service since 2010.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Consulting</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Development</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Design</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Support</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-sm" />
                <span className="text-sm">123 Business St, City, Country</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-sm" />
                <span className="text-sm">+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-sm" />
                <span className="text-sm">info@naz.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-300 mb-4 sm:mb-0"
          >
            © 2023 NAZ™. All Rights Reserved.
          </motion.span>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebook, href: "#" },
              { icon: FaTwitter, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaLinkedin, href: "#" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

