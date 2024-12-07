'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPhone, FaFile, FaLink } from 'react-icons/fa';

const ContactMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', message: 'Hello, I need your services.', files: ['document.pdf'], links: ['https://example.com'] },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-4 rounded shadow"
          >
            <div className="flex items-center mb-2">
              <FaUser className="mr-2 text-[#BE3144]" />
              <span className="font-semibold">{message.name}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-[#BE3144]" />
              <span>{message.email}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 text-[#BE3144]" />
              <span>{message.phone}</span>
            </div>
            <p className="mb-2">{message.message}</p>
            {message.files.length > 0 && (
              <div className="flex items-center mb-2">
                <FaFile className="mr-2 text-[#BE3144]" />
                <span>{message.files.join(', ')}</span>
              </div>
            )}
            {message.links.length > 0 && (
              <div className="flex items-center">
                <FaLink className="mr-2 text-[#BE3144]" />
                <span>{message.links.join(', ')}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactMessages;
