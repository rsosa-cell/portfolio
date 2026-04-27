import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white"
      >
        <motion.div
          className="max-w-4xl text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-7xl font-bold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Raphael Sosa.
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I’m a{" "}
            <span className="text-pink-600">
              <ReactTyped
                strings={["Software Engineer", "Full-Stack Developer", "Problem Solver"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I specialize in building (and occasionally designing) exceptional digital experiences. 
            Currently, I’m focused on building responsive full-stack web applications.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;