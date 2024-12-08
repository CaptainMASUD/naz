import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'flowbite-react';
import { FaPassport, FaUsers, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const banner1 = "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg";
const banner2 = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D";
const banner3 = "https://purisconsulting.com/wp-content/uploads/2019/01/Company-Branding_team-work.png";
const norwayFlag = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg";
const bangladeshFlag = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg";
const rightImage = "https://t4.ftcdn.net/jpg/02/32/46/55/360_F_232465533_iyzj4gVUBSa99Xq6rhwQdxu5VH9iOo6w.jpg";

const Home = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      {/* Slider Section */}
      <Carousel className="h-64 sm:h-96 xl:h-120 2xl:h-144 mb-12 overflow-hidden">
        <img src={banner1} alt="Service 1" className="object-cover w-full h-full" />
        <img src={banner2} alt="Service 2" className="object-cover w-full h-full" />
        <img src={banner3} alt="Service 3" className="object-cover w-full h-full" />
      </Carousel>

      {/* Welcome Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-[#872341]">Welcome to NAJ</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
          We provide work permit services for various European countries
        </p>
        <motion.button
          onClick={() => handleNavigation('/services')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#872341] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#6d1c34] transition duration-300"
        >
          Explore Our Services
        </motion.button>
      </motion.section>

      {/* Work Permit Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 gap-6"
      >
        {/* Card Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <motion.img
              src={norwayFlag}
              alt="Norway Flag"
              className="h-20 w-20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.img
              src={bangladeshFlag}
              alt="Bangladesh Flag"
              className="h-[58px] w-24 mt-3"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#872341]">Work Permit Services</h3>
          <p className="text-gray-600 mb-6">
            Get expert guidance and support to secure your work permits for Norway and Bangladesh. 
            We ensure a smooth process with personalized assistance at every step.
          </p>
          <motion.button
            onClick={() => handleNavigation('/services')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#872341] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#6d1c34] transition duration-300 inline-flex items-center"
          >
            <FaPassport className="mr-2 text-lg" />
            Learn More
          </motion.button>
        </div>

        {/* Image Section */}
        <motion.img
          src={rightImage}
          alt="Work Permit Services"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.section>
    </motion.div>
  );
};

export default Home;
