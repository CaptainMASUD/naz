import React, { useEffect, useState } from 'react';
import { motion ,AnimatePresence} from 'framer-motion';
import { Carousel } from 'flowbite-react';
import { FaPassport, FaUsers, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import b1 from "../../images/banner/b1.jpg"
// import b2 from "../../images/banner/b2.jpg"
import b3 from "../../images/banner/b3.jpg"
import b4 from "../../images/banner/b4.jpg"
import b5 from "../../images/banner/b5.jpg"
import b6 from "../../images/banner/b6.jpg"

const b1 = "https://plus.unsplash.com/premium_photo-1668017178993-4c8fc9f59872?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const b2 = "https://plus.unsplash.com/premium_photo-1661962898863-a953de62bfd8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const norwayFlag = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg";
const bangladeshFlag = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg";
const rightImage = "https://t4.ftcdn.net/jpg/02/32/46/55/360_F_232465533_iyzj4gVUBSa99Xq6rhwQdxu5VH9iOo6w.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: b1, text: "Welcome to Our Company" },
    { src: b2, text: "Expert Work Permit Services" },
    { src: b3, text: "Your Trusted Partner in Employment" },
    { src: b4, text: "Bringing Opportunities Closer to You" },
    { src: b5, text: "Achieve Your Dreams with Us" },
    { src: b6, text: "Your Gateway to Global Careers" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToTop = () => window.scrollTo(0, 0);

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
  };

  const slideAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      {/* Slider Section */}
      <div className="relative h-64 sm:h-96 xl:h-120 2xl:h-144 mb-12 overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8 }}
              >
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
                    {slide.text}
                  </h2>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

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
