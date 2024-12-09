import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPassport, FaFileContract, FaHome, FaUserGraduate } from 'react-icons/fa';
import { MdHealthAndSafety, MdWork } from 'react-icons/md';
import workPermitImage from "../../images/ServicesImg/workpermit.jpg";
import services from "../../images/ServicesImg/services.jpg";
import { useNavigate } from 'react-router-dom';

const NorwayPermitServices = () => {
  const navigate = useNavigate()
  const handleclick = () =>{
    navigate("/contact")
    scroll(0,0)
  }
  const [activeTab, setActiveTab] = useState('process');

  const TabContent = ({ id, active, children }) => (
    <motion.div
      className={`tab-content ${active ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className=" min-h-screen"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#872341] mb-8"
          style={{ fontFamily: "Playwrite HR Lijeva" }}
        >
          Norway Permit
        </motion.h1>

        <motion.div
          className="relative rounded-lg shadow-xl overflow-hidden mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={workPermitImage}
            alt="Work Permit in Norway"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233587d0] to-transparent flex items-center">
            <div className="text-white p-8">
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-4 text-white bg-[#872341c0] text-center rounded-lg"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Work Permit Services
              </motion.h2>
              <p className="text-xl">Your gateway to professional opportunities in Norway</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-[#872341] mb-4">Expert Consultancy Services</h2>
          <p className="text-lg text-gray-700">
            We specialize in assisting individuals and businesses in obtaining work permits for Norway.
            Let us guide you through the process with our expertise and personalized support.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#872341] mb-4">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <MdWork className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Work Permit Advisory</h4>
                <p className="text-gray-700">Guidance on eligibility, documentation, and procedures for Norwegian work permits.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileContract className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Application Assistance</h4>
                <p className="text-gray-700">Meticulous preparation and submission to meet all regulatory standards.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaUserGraduate className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Support for Employers</h4>
                <p className="text-gray-700">Solutions for businesses recruiting international talent, including compliance with Norwegian labor laws.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaHome className="text-3xl text-[#872341] mr-4" />
              <div>
                <h4 className="font-semibold mb-2">Relocation Guidance</h4>
                <p className="text-gray-700">Assistance with housing, navigating local services, and cultural integration.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h3 className="text-2xl font-semibold text-[#872341] mb-4">Types of Work Permits</h3>
          <p className="text-gray-700">
          Currently we are hiring :
          </p>
          <img src={services} alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <div className="flex border-b">
            <button
              className={`flex-1 py-2 px-4 text-lg font-semibold ${
                activeTab === 'process' ? 'text-[#872341] border-b-2 border-[#872341]' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('process')}
            >
              Application Process
            </button>
            <button
              className={`flex-1 py-2 px-4 text-lg font-semibold ${
                activeTab === 'documents' ? 'text-[#872341] border-b-2 border-[#872341]' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('documents')}
            >
              Required Documents
            </button>
          </div>

          <TabContent id="process" active={activeTab === 'process'}>
            <ol className="list-decimal ml-8 text-gray-700 mt-6">
              <li className="mb-3"><strong>Job Offer:</strong> Secure a position with a Norwegian employer.</li>
              <li className="mb-3"><strong>Employer Submission:</strong> The employer initiates the process with the Norwegian Directorate of Immigration (UDI) or local police office.</li>
              <li className="mb-3"><strong>Documentation:</strong> Submit essential documents like passports, employment contracts, and health insurance.</li>
              <li className="mb-3"><strong>Fee Payment:</strong> Complete the required application fee.</li>
              <li><strong>Processing and Approval:</strong> Applications are typically reviewed within weeks to months.</li>
            </ol>
          </TabContent>

          <TabContent id="documents" active={activeTab === 'documents'}>
            <ul className="grid md:grid-cols-2 gap-4 mt-6">
              <li className="flex items-center"><FaPassport className="text-[#872341] mr-2" /> A valid passport</li>
              <li className="flex items-center"><FaPassport className="text-[#872341] mr-2" /> Recent passport-sized photographs</li>
              <li className="flex items-center"><FaPassport className="text-[#872341] mr-2" /> National ID</li>
              <li className="flex items-center"><FaUserGraduate className="text-[#872341] mr-2" /> Proof of qualifications (diplomas, certificates, etc.)</li>
              <li className="flex items-center"><FaFileContract className="text-[#872341] mr-2" /> Police clearance certificate</li>
              <li className="flex items-center"><MdHealthAndSafety className="text-[#872341] mr-2" /> Health insurance documentation</li>
              <li className="flex items-center"><FaFileContract className="text-[#872341] mr-2" /> Employment contract</li>
              <li className="flex items-center"><FaHome className="text-[#872341] mr-2" /> Proof of accommodation</li>
            </ul>
          </TabContent>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#872341]">Need Professional Assistance?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us be your trusted partner on your journey to working in Norway. Contact us today for expert guidance and support.
          </p>
          <a
            onClick={handleclick }
            className="bg-[#872341] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#bd325c] transition duration-300 inline-flex items-center"
          >
            Contact Us
            <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NorwayPermitServices;
