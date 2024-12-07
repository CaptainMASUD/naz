import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCogs, FaEnvelope, FaList, FaSignOutAlt } from 'react-icons/fa';
import HomePageManager from './HomePageManager/HomePageManager';
import FooterManager from './FooterManager/FooterManager';
import ServicesManager from './ServicesManager/ServiceManager';
import ContactMessagesManager from './ContactMessage/ContactMessages';
import { FiAirplay } from "react-icons/fi";
import { FiBox } from "react-icons/fi";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'services':
        return <ServicesManager />;
      case 'homepage':
        return <HomePageManager />;
      case 'messages':
        return <ContactMessagesManager />;
      case 'footer':
        return <FooterManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="hidden md:flex flex-col w-64 bg-[#1c1b1b] text-white"
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold flex"><FiAirplay className='mr-2 mt-1'/> Admin Panel</h2>
        </div>
        <nav className="flex-1">
          <ul>
            {[
              { name: 'Dashboard', icon: FaHome, id: 'dashboard' },
              { name: 'Services', icon: FaCogs, id: 'services' },
              { name: 'Home Page', icon: FaHome, id: 'homepage' },
              { name: 'Messages', icon: FaEnvelope, id: 'messages' },
              { name: 'Footer', icon: FiBox, id: 'footer' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveComponent(item.id)}
                  className={`flex items-center w-full px-4 py-2 text-sm hover:bg-[#BE3144] transition-colors ${
                    activeComponent === item.id ? 'bg-[#BE3144]' : ''
                  }`}
                >
                  <item.icon className="mr-2" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button className="flex items-center text-sm hover:text-[#BE3144]">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Top navigation for mobile screens */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="md:hidden bg-[#1c1b1b] text-white p-4"
      >
        <select
          value={activeComponent}
          onChange={(e) => setActiveComponent(e.target.value)}
          className="w-full bg-[#1c1b1b] text-white border border-gray-700 rounded p-2"
        >
          <option value="dashboard">Dashboard</option>
          <option value="services">Services</option>
          <option value="homepage">Home Page</option>
          <option value="messages">Messages</option>
          <option value="footer">Footer</option>
        </select>
      </motion.nav>

      {/* Main content area */}
      <main className="flex-1 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderComponent()}
        </motion.div>
      </main>
    </div>
  );
};

const DashboardOverview = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
    <p>Welcome to the admin panel. Select a section from the sidebar to manage your website content.</p>
  </div>
);

export default AdminPanel;