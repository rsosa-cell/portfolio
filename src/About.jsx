import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-8">
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">About Me</h2>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          I'm a passionate software engineer with a love for creating intuitive and user-friendly web applications. 
          Over the years, I have honed my skills in full-stack web development, focusing on creating seamless user experiences and efficient codebases.
        </p>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          I specialize in building responsive, scalable applications using technologies like React, Node.js, and MongoDB. 
          I thrive in collaborative environments, working alongside designers and other engineers to bring ideas to life. 
          Whether I'm building a small feature or architecting a full application, I prioritize writing clean, maintainable code that stands the test of time.
        </p>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          In addition to my technical expertise, I enjoy diving into new challenges and continuously learning. I believe in the power of open-source software and regularly contribute to projects that benefit the developer community. 
          I’m constantly exploring new programming paradigms and frameworks to stay on top of the latest trends in tech.
        </p>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          Outside of coding, I have a strong interest in design and UX, which allows me to understand the user perspective and create applications that are not only functional but also visually appealing. 
          When I'm not coding, I enjoy taking on personal projects, contributing to online communities, and experimenting with new technologies to further my skill set.
        </p>
        <p className="text-lg sm:text-xl mt-4 text-gray-400">
          My goal is to work on impactful projects that challenge my skills and help me grow as a developer. I am excited about collaborating with like-minded professionals to build innovative solutions that make a real-world impact.
        </p>
      </div>
    </section>
  );
};

export default About;

