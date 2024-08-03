import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '../components/AboutUs';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Our Mission: Redefining Possibilities</h2>
            <p className="text-gray-700 text-base mb-4">
              Welcome to <span className="font-semibold text-blue-500">[Your Website Name]</span>, where we believe that poverty is not just a statistic but a challenge we can collectively overcome. Our mission is to transform the way we address poverty by creating innovative solutions and fostering community-driven change.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Who We Are</h3>
            <p className="text-gray-600 text-base mb-4">
              We are a passionate team of dreamers and doers, united by a shared vision of a world where everyone has the opportunity to thrive. Our team brings together diverse expertise from social entrepreneurship, technology, policy-making, and grassroots activism. Each member is committed to leveraging their skills to create impactful and sustainable solutions.
            </p>
          </motion.div>
        </div>

        <div className="mt-10">
          <motion.div
            className="bg-blue-500 text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">What Drives Us</h3>
            <p className="text-white text-base">
              Our drive stems from a fundamental belief that everyone deserves a fair chance at success. We are inspired by stories of resilience and hope, and we are dedicated to turning those stories into a collective reality. Our approach goes beyond traditional methods, focusing on:
            </p>
            <ul className="list-disc ml-5 mt-4 text-white">
              <li>Empowerment Through Education</li>
              <li>Innovative Economic Solutions</li>
              <li>Community Collaboration</li>
            </ul>
          </motion.div>

          
        </div>

      </div>


    </div>
  );
};

export default About;
