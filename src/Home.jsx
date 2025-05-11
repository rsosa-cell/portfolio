import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white">
      <div className="max-w-4xl text-center px-4">
        <h1 className="text-5xl sm:text-7xl font-bold mt-2">Raphael Sosa.</h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mt-2">
          I’m a software engineer.
        </h2>
        <p className="text-gray-400 mt-4">
          I specialize in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block px-6 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
