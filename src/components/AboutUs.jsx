import img from "../utilis/images/hachathon.jpg"
import img2 from "../utilis/images/tilak.jpg"
import img3 from "../utilis/images/mohith.jpg"
const AboutUs = () => {
  return (
    <div className='container mx-auto px-4 py-16 bg-white'>
      <h1 className='text-4xl  font-bold text-center mb-8'>About Us</h1>
      <p className='text-lg text-black mb-8'>
        Welcome to our platform! We are a dedicated team passionate about making a difference through volunteering and community support. Our mission is to connect individuals with meaningful opportunities to contribute to society and drive positive change.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            src={img}
            alt='Karan Singh D'
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-2'>Karan Singh D</h2>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            src={img2}
            alt='Tilak P'
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold mb-2'>Tilak P</h2>
            
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-lg overflow-hidden'>
          <img
            src={img3}
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