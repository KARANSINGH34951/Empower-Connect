const AboutUs = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-8'>About Us</h1>
      <p className='text-lg text-gray-800 mb-8'>
        Welcome to our platform! We are a dedicated team passionate about making a difference through volunteering and community support. Our mission is to connect individuals with meaningful opportunities to contribute to society and drive positive change.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            src='https://via.placeholder.com/150'
            alt='Karan Singh D'
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-2'>Karan Singh D</h2>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            src='https://via.placeholder.com/150'
            alt='Tilak P'
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-2'>Tilak P</h2>
            
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            src='https://via.placeholder.com/150'
            alt='Mohith G'
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-2'>Mohith G</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;