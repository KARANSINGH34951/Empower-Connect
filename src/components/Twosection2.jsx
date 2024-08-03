import img3 from "../utilis/images/img3.jpg"
import {Link} from 'react-router-dom'
const TwoColumnSection = () => {
  return (
    <div className='container mx-auto px-4 py-16 text-white'>
      <div className='flex flex-wrap lg:flex-nowrap items-center'>
        <div className='w-full lg:w-1/2 lg:pr-8'>
          <h2 className='text-3xl font-bold mb-4 text-blue-600'>Join Us in Volunteering and Support</h2>
          <div className='space-y-4'>
            <p className='text-xl text-white font-semibold'>
              <span className='text-blue-600'>Support Communities,</span> Make a Real Difference
            </p>
            <p className='text-xl text-white font-semibold'>
              <span className='text-blue-600'>Provide Assistance</span> to Those in Need
            </p>
            <p className='text-xl text-white font-semibold'>
              <span className='text-blue-600'>Empower Individuals</span> Through Skill Development
            </p>
            <p className='text-xl text-white font-semibold'>
              <span className='text-blue-600'>Create Opportunities</span> for Growth and Learning
            </p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
          <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img
              src={img3}
              alt='Volunteering'
              className='w-full h-64 object-cover'
            />
            <div className='p-6'>
              <Link to="/signup">
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
