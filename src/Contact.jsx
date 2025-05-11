import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-8">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">Contact</h2>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          Let’s get in touch! You can reach out to me via email or connect with me on LinkedIn.
        </p>
        <div className="mt-8">
          <a
            href="mailto:raphaelsosa926@gmail.com"


            className="inline-block px-6 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/raphael-sosa-b83868260/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 inline-block px-6 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
