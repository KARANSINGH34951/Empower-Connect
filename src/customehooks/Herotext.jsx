import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Herotext = () => {
  return (
   
       <div className="text-2xl relative mt-52 text-center px-32">
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h1 className='text-6xl'>Join Us in Making a Difference</h1>
        </motion.h3>
        <p className="text-gray-700 mb-6">
          We invite you to be part of this transformative journey. Whether you're a community leader, an aspiring entrepreneur, or someone passionate about social change, there are many ways to get involved:
        </p>
        <div className="flex justify-center gap-4">
         <Link to="/volunter">
         <a
            href="#"
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Volunteer
          </a>
         </Link>
          <a
            href="/donate"
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Donate
          </a>
          <a
            href="/partner"
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Partner
          </a>
        </div>
      </div> 
    
  )
}

export default Herotext