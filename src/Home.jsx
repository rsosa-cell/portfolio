import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white">
      
      <motion.div
        className="max-w-4xl text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Name */}
        <motion.h1 
          className="text-5xl sm:text-7xl font-bold mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Raphael Sosa.
        </motion.h1>

        {/* Typing Effect */}
        <motion.h2 
          className="text-4xl sm:text-6xl font-bold text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I’m a{' '}
          <span className="text-pink-600">
            <ReactTyped
              strings={['Software Engineer', 'Full-Stack Developer', 'Problem Solver']}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I specialize in building (and occasionally designing) exceptional digital experiences. 
          Currently, I’m focused on building responsive full-stack web applications.
        </motion.p>

        {/* Button */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Work
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;