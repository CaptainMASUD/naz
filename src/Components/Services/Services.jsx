import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPaintBrush, FaChartLine, FaServer, FaMobileAlt, FaShieldAlt, FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa';

const serviceItems = [
  { icon: FaCode, title: 'Web Development', description: 'Custom web applications tailored to your business needs.', price: '$5000' },
  { icon: FaPaintBrush, title: 'UI/UX Design', description: 'Intuitive and attractive designs that enhance user experience.', price: '$3000' },
  { icon: FaChartLine, title: 'Digital Marketing', description: 'Strategies to boost your online presence and reach.', price: '$2000' },
  { icon: FaServer, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for your applications.', price: '$4000' },
  { icon: FaMobileAlt, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications.', price: '$6000' },
  { icon: FaShieldAlt, title: 'Cybersecurity', description: 'Protect your digital assets with our advanced security solutions.', price: '$5500' },
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredItems = serviceItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSeeMore = () => {
    setVisibleItems(prevVisible => Math.min(prevVisible + 3, serviceItems.length));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-12 text-center text-[#872341]"
      >
        Our Services
      </motion.h1>

      <div className="flex justify-between items-center mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#872341]"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-[#872341] text-white px-4 py-2 rounded-full flex items-center"
        >
          <FaFilter className="mr-2" />
          Filter
        </motion.button>
      </div>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 bg-gray-100 p-4 rounded-lg"
          >
            {/* Add filter options here */}
            <p>Filter options will go here</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.slice(0, visibleItems).map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <service.icon className="text-5xl mb-4 text-[#872341]" />
            <h2 className="text-2xl font-semibold mb-2 text-[#872341]">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-[#872341]">{service.price}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#872341] text-white px-4 py-2 rounded-full flex items-center"
              >
                Learn More
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleItems < filteredItems.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={handleSeeMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#872341] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#872341] transition duration-300 flex items-center mx-auto"
          >
            See More
            <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#872341]">Need a Custom Solution?</h2>
        <p className="text-xl text-gray-600 mb-8">
          We specialize in tailoring our services to meet your unique business requirements.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#872341] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#872341] transition duration-300 inline-flex items-center"
        >
          Contact Us
          <FaArrowRight className="ml-2" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Services;

