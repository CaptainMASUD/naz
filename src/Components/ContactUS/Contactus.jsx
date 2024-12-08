import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperclip, FaLink } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [],
    links: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: [...e.target.files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
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
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#872341]">Get in Touch</h2>
          <p className="text-xl mb-8 text-gray-600">
            We'd love to hear from you. Please fill out the form below or use our contact information to reach us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#872341] mr-4 text-2xl" />
              <span>Dhulipara , Cumilla , BD</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-[#872341] mr-4 text-2xl" />
              <span>+880 1744 416607</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#872341] mr-4 text-2xl" />
              <span>info@naz.com</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="+1 234 567 8900"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="shadow-sm focus:ring-[#872341] focus:border-[#872341] mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="files" className="block text-sm font-medium text-gray-700">Attach Files</label>
            <div className="mt-1 flex items-center">
              <label htmlFor="files" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#872341]">
                <FaPaperclip className="inline-block mr-2" />
                Choose files
              </label>
              <input
                type="file"
                name="files"
                id="files"
                className="sr-only"
                multiple
                onChange={handleFileChange}
              />
              <span className="ml-3 text-sm text-gray-500">
                {formData.files.length > 0 ? `${formData.files.length} file(s) selected` : 'No file chosen'}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="links" className="block text-sm font-medium text-gray-700">Relevant Links</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLink className="text-gray-400" />
              </div>
              <input
                type="text"
                name="links"
                id="links"
                className="focus:ring-[#872341] focus:border-[#872341] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="https://example.com, https://another-example.com"
                value={formData.links}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex duration-300 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#872341] hover:bg-[#9E2234] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#872341]"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

