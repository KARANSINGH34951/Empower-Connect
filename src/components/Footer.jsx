import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4'>Empower Connect</h2>
            <p>Transforming lives, one connection at a time.</p>
          </div>

          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
            <ul>
              <li><a href='#home' className='hover:underline'>Home</a></li>
              <li><a href='#about' className='hover:underline'>About Us</a></li>
              <li><a href='#services' className='hover:underline'>Services</a></li>
              <li><a href='#contact' className='hover:underline'>Contact</a></li>
            </ul>
          </div>

          <div className='w-full md:w-1/3'>
            <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
            <p>Email: karan@empowerconnect.com</p>
            <p>Phone: 1234567890</p>
            <div className='mt-4'>
              <a href='#' className='text-gray-400 hover:text-white mr-4'><i className='fab fa-facebook-f'></i></a>
              <a href='#' className='text-gray-400 hover:text-white mr-4'><i className='fab fa-twitter'></i></a>
              <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-linkedin-in'></i></a>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <p>&copy; 2024 Empower Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
