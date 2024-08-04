import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Donate = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  // Simulate live updating of the donation amount
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalAmount(prevAmount => prevAmount + Math.floor(Math.random() * 100) + 1);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          className=" p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <div className='bg-gray-200 p-10 rounded-md'>
         <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">Make a Difference: Donate Today</h1>
          <p className="text-gray-700 text-base mb-4">
            Your donation helps us to continue our mission of fighting poverty and supporting those in need. Every contribution, no matter the size, makes a significant impact. Join us in making a difference.
          </p>
         </div>
        </motion.div>

        <motion.div
          className="bg-green-100 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-600">Current Donations</h2>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800 mb-2">Total Raised:</p>
              <p className="text-4xl font-bold text-blue-700">
                ${totalAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 text-center">How to Contribute</h2>
          <form action="/submit-donation" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="amount" className="block text-gray-700">Donation Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                min="1"
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Donate Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;
