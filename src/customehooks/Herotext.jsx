import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Herotext = () => {
  return (
    <div className="relative mt-20 px-6 sm:px-12 md:px-20 lg:px-32 text-center">
      <motion.h3
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl">Join Us in Making a Difference</h1>
      </motion.h3>
      <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-xl">
        We invite you to be part of this transformative journey. Whether you're a community leader, an aspiring entrepreneur, or someone passionate about social change, there are many ways to get involved:
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/volunter">
          <a
            href="#"
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Volunteer
          </a>
        </Link>
        <Link to="/donate">
          <a
            href="/donate"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Donate
          </a>
        </Link>
        <Link to="/partners">
          <a
            href="#"
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Partner
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Herotext;
