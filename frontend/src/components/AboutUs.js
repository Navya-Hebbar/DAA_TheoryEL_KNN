import React from 'react'
import Header from './ui/Header'
import { FaUserCircle } from 'react-icons/fa';  // Import Font Awesome user circle icon

const AboutUs = () => {
  return (
    <>
      <Header />
      <section id="about-us" className="relative bg-black text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 animate-gradient-bg"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-blue-400 text-shadow-xl animate-glow">About Us</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">We are a team of enthusiastic students from the 4th semester of Computer Science and Engineering - Data Science, at RV College of Engineering, Bangalore. Our goal is to create innovative solutions that contribute to the tech community.</p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Member 1: Navya */}
            <div className="about-member bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="mb-4">
                {/* Profile Icon */}
                <FaUserCircle className="text-7xl text-blue-500 mx-auto mb-4 group-hover:text-blue-400 transition-colors duration-300 glow-effect" />
                <h3 className="text-3xl font-semibold text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300 animate-glow">Navya Gopalkrishna Hebbar</h3>
              </div>
              <p className="text-lg mb-4 text-gray-300">I am a passionate computer science student with a keen interest in machine learning, artificial intelligence, and web development. I love to explore different technologies and work on innovative projects. I am excited to be a part of the ever-growing tech field and contribute to impactful projects.</p>
              <p className="mt-4 text-md text-gray-400">Skills: Machine Learning, Web Development, AI, Data Science</p>

              {/* Glowing border on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
            </div>

            {/* Member 2: Yashaswini */}
            <div className="about-member bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <div className="mb-4">
                {/* Profile Icon */}
                <FaUserCircle className="text-7xl text-blue-500 mx-auto mb-4 group-hover:text-blue-400 transition-colors duration-300 glow-effect" />
                <h3 className="text-3xl font-semibold text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300 animate-glow">Yashaswini S</h3>
              </div>
              <p className="text-lg mb-4 text-gray-300">I am an aspiring data scientist with a deep interest in data analytics and the application of machine learning algorithms to solve real-world problems. I am passionate about uncovering patterns in data and using them to build smarter solutions. I aim to work on projects that make a difference in the world.</p>
              <p className="mt-4 text-md text-gray-400">Skills: Data Science, Machine Learning, Data Analytics, Python</p>

              {/* Glowing border on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-300">We are working on innovative projects and continually improving our skills to meet the demands of the rapidly evolving tech landscape. Stay tuned for more exciting updates!</p>
          <p className="mt-8 text-lg text-gray-300">This project is created under the guidance of Chetana Murthy and Nagraj </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
