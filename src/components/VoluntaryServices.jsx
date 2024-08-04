import React from 'react';
import { motion } from 'framer-motion';

const VoluntaryServices = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center py-10 ">
      <div className="container mx-auto px-4">
        <motion.div
          className=" p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">Join Our Voluntary Services</h1>
          <p className=" text-base mb-4 text-white">
            Volunteering with us means more than just giving your time. It’s about making a lasting impact in the fight against poverty. We offer a range of opportunities for you to contribute in meaningful ways. Explore how you can be part of our mission to create positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="border border-white text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-600">Community Outreach</h2>
            <p className=" mb-4">
              Engage directly with communities in need. Help organize events, distribute resources, and provide support where it’s needed most. Your efforts will directly impact lives and foster stronger community bonds.
            </p>
            <a
              href="/volunteer/community-outreach"
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="border border-white text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-600">Educational Support</h2>
            <p className=" mb-4">
              Assist in tutoring and mentoring programs. Share your knowledge and skills to help individuals build a better future through education. Your contribution can inspire and empower the next generation.
            </p>
            <a
              href="/volunteer/educational-support"
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="border border-white text-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-600">Event Coordination</h2>
            <p className=" mb-4">
              Help organize and manage events that support our mission. From fundraising galas to community workshops, your skills in planning and coordination will help us achieve our goals and reach more people.
            </p>
            <a
              href="/volunteer/event-coordination"
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="border border-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-600">Administrative Support</h2>
            <p className="mb-4 text-white">
              Provide essential support behind the scenes. Help with data entry, organizing files, and managing communications. Your efforts will ensure that our operations run smoothly and efficiently.
            </p>
            <a
              href="/volunteer/administrative-support"
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <motion.div
            className="bg-blue-500 text-white p-6 rounded-lg shadow-lg inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get Involved</h3>
            <p className="text-white mb-6">
              Ready to make a difference? Choose an opportunity that aligns with your passion and skills. Together, we can build a brighter future for all.
            </p>
            <a
              href="/signup"
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Join us On Social-Media
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VoluntaryServices;
