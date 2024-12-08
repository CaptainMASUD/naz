import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, Card } from 'flowbite-react';
import { FaTools, FaUserTie, FaChartLine, FaCog } from 'react-icons/fa';
// import banner1 from "../../images/banner/banner1.png"
// import banner2 from "../../images/banner/banner2.png"
// import banner3 from "../../images/banner/banner3.png"

const banner1 = "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
const banner2 = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
const banner3 = "https://purisconsulting.com/wp-content/uploads/2019/01/Company-Branding_team-work.png"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4"
    >
      <Carousel className="h-64 sm:h-96 xl:h-120 2xl:h-144 mb-12 rounded-lg overflow-hidden">
        <img src={banner1} alt="Service 1" className="object-cover w-full h-full" />
        <img src={banner2} alt="Service 2" className="object-cover w-full h-full" />
        <img src={banner3} alt="Service 3" className="object-cover w-full h-full" />
      </Carousel>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-[#872341]">Welcome to NAJ</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
          NAJ is a leading service provider company dedicated to delivering exceptional solutions to our clients. With our expertise and commitment to excellence, we strive to meet and exceed your expectations in every project we undertake.
        </p>
        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#872341] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#6d1c34] transition duration-300"
        >
          Explore Our Services
        </motion.a>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { icon: FaTools, title: "Expert Services", description: "We offer a wide range of professional services tailored to your needs." },
          { icon: FaUserTie, title: "Experienced Team", description: "Our team of experts brings years of industry experience to every project." },
          { icon: FaChartLine, title: "Proven Results", description: "We have a track record of delivering outstanding results for our clients." },
          { icon: FaCog, title: "Customized Solutions", description: "We tailor our services to meet your specific requirements and goals." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition duration-300">
              <div className="flex flex-col items-center text-center">
                <item.icon className="text-5xl mb-4 text-[#872341]" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-16 bg-gray-100 rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#872341]">Why Choose NAJ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Comprehensive Services", description: "We offer a wide range of solutions to meet all your business needs." },
            { title: "Dedicated Support", description: "Our team is always ready to assist you with any questions or concerns." },
            { title: "Innovative Approach", description: "We stay ahead of the curve with cutting-edge solutions and technologies." },
            { title: "Competitive Pricing", description: "We offer high-quality services at competitive and transparent prices." },
            { title: "Timely Delivery", description: "We understand the importance of deadlines and always deliver on time." },
            { title: "Client-Centric Approach", description: "Your success is our priority, and we tailor our services to your needs." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#872341]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;

