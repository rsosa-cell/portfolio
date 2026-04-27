import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-white px-8">
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-pink-600">Experience</h2>
        <div className="mt-8 space-y-8">

          {/* H&R Block */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Client Systems & Operations Assistant — H&R Block</h3>
            <p className="text-gray-400 mt-2">February 2025 – April 2025</p>
            <ul className="list-disc text-gray-400 mt-4 pl-6 space-y-2">
              <li>Managed scheduling and customer data across internal CRM and digital systems.</li>
              <li>Supported tax professionals by troubleshooting software issues and automating intake processes.</li>
              <li>Optimized client intake procedures, improving speed and reducing manual steps.</li>
              <li>Tracked workflow metrics and reported data trends to improve daily operations.</li>
            </ul>
          </div>

          {/* Freelance Software Engineer */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Software Engineer — Freelance Projects</h3>
            <p className="text-gray-400 mt-2">2023 – Present</p>
            <ul className="list-disc text-gray-400 mt-4 pl-6 space-y-2">
              <li>Developed full-stack web applications with secure authentication and scalable cloud backends.</li>
              <li>Led collaborative projects, focusing on code quality, maintainability, and accessibility improvements.</li>
              <li>Implemented system debugging and performance optimization strategies.</li>
            </ul>
          </div>


          {/* Target */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Service & Engagement Executive Team Leader — Target</h3>
            <p className="text-gray-400 mt-2">May 2023 – August 2024</p>
            <ul className="list-disc text-gray-400 mt-4 pl-6 space-y-2">
              <li>Led retail team operations, ensuring outstanding customer service and efficiency.</li>
              <li>Trained and developed team members to meet business and guest satisfaction goals.</li>
            </ul>
          </div>

          {/* Pace University */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Receptionist — Pace University Counseling Center</h3>
            <p className="text-gray-400 mt-2">January 2022 – September 2023</p>
            <ul className="list-disc text-gray-400 mt-4 pl-6 space-y-2">
              <li>Provided administrative support, scheduling appointments and maintaining client confidentiality.</li>
              <li>Assisted students and visitors by handling inquiries and coordinating with counseling staff.</li>
            </ul>
          </div>

             {/* UPS */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-bold text-white">Database Administrator Intern — United Parcel Service (UPS)</h3>
            <p className="text-gray-400 mt-2">May 2021 – August 2021</p>
            <ul className="list-disc text-gray-400 mt-4 pl-6 space-y-2">
              <li>Managed and optimized critical databases to improve performance and data integrity.</li>
              <li>Developed query optimizations and improved reporting efficiency through better data structures.</li>
            </ul>
          </div>

        </div>

        {/* View Resume Button */}
        <div className="mt-12">
          <a
            href="/Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition duration-300"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
