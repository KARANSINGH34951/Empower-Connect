
const TwoColumnSection = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='flex flex-wrap lg:flex-nowrap items-center'>
        <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
          <div className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img src='https://th.bing.com/th/id/OIP.srRlg0TPHCnuF6S2UoqYUgHaDt?w=300&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt='Description' className='w-full h-64 object-cover' />
            <div className='p-6'>
              {/* <h2 className='text-2xl font-bold mb-2'>Card Title</h2>
              <p className='text-gray-700 mb-4'>A brief description or subtitle for the card.</p> */}
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Learn More
              </button>
            </div>
            
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:pl-8'>
          <h2 className='text-3xl font-bold mb-4'>Empowering Change</h2>
          <p className='text-gray-700 mb-4'>
            The image illustrates the harsh reality faced by many individuals who find themselves homeless and jobless. It serves as a stark reminder of the urgent need for comprehensive support systems.
          </p>
          <p className='text-gray-700 mb-4'>
            Empower Connect aims to bridge the gap by providing access to job opportunities, skills training, and financial resources. Our platform is dedicated to uplifting those in need and fostering a community of support and empowerment.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
