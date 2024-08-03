import { Link } from 'react-router-dom';

const TwoColumnSection = () => {
  return (
    
    <div className='container mx-auto px-4 py-16'>
      <div className='flex flex-wrap lg:flex-nowrap items-center'>
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
          <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img src='https://th.bing.com/th/id/OIP.srRlg0TPHCnuF6S2UoqYUgHaDt?w=300&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='Description' className='w-full h-64 object-cover' />
            <div className='p-6'>
              <Link to="/signup">
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:pl-8'>
          <h2 className='text-3xl font-bold mb-4 text-blue-600 '>Empowering Change</h2>
          <div className='space-y-4'>
            <p className='text-xl text-white font-semibold pl-5'>
              <span className='text-blue-600 '>Bridging Gaps,</span> Building Futures
            </p>
            <p className='text-xl text-white font-semibold pl-10'>
              Job <span className='text-blue-600 '>Opportunities</span> for All
            </p>
            
            <p className='text-xl text-white font-semibold pl-20'>
              Skills Training for <span className='text-blue-600 '>Empowerment</span>
            </p>
           
           
            <p className='text-xl text-white font-semibold pl-32'>
              Financial Resources for <span className='text-blue-600 '>Growth</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
