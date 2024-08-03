// ContactUs.js
import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactUs = () => {
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
    gsap.from(imageRef.current, { opacity: 0, x: -50, duration: 1, ease: 'power3.out', delay: 0.5 });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div ref={imageRef} className="w-full md:w-1/2 p-4">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div ref={formRef} className="w-full md:w-1/2 p-4">
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
