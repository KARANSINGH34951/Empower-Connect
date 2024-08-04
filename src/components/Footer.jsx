import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-4 border-red-600 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold mb-4 text-green-600'>Empower Connect</h2>
            <p className='text-gray-400'>Transforming lives, one connection at a time.</p>
          </div>

          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold mb-4 text-blue-600'>Quick Links</h2>
            <ul className='space-y-2'>
              <li>
                <Link to="/" className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/signup" className='hover:underline'>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/contactus" className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full md:w-1/3'>
            <h2 className='text-2xl font-bold mb-4 text-orange-600'>Contact Us</h2>
            <p className='text-gray-400'>Email: ceitkaransingh2026@gmail.com
            </p>
            <p className='text-gray-400'>Phone: 8015773495</p>
            <div className='mt-4 flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center border-t border-gray-700 pt-4'>
          <p className='text-gray-400'>&copy; 2024 Empower Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
