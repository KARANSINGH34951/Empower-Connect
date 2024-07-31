import video from "../utilis/video/invideo-ai-720 Empower Connect_ Bridging the Gap to End 2024-07-28.mp4"
import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";


const Bgvideoplayer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".cta-buttons",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.5 }
    );
  }, []);
  return (

    <div className='bg-container overflow-hidden a w-full h-screen'>
    <video autoPlay muted loop id='myVideo' className='absolute w-full object-cover'>
      <source src={video} type='video/mp4' />
    </video>

    <div className="w-full max-w-4xl mx-auto text-center py-8">
      <h1 className="text-6xl font-bold text-gray-800 hero-text">
        Empower Connect: Join the Fight Against Poverty
      </h1>
      <p className="mt-4 text-3xl text-gray-600 hero-text">
        Our platform connects individuals with resources and opportunities to improve their lives and lift themselves out of poverty.
      </p>
      <div className="mt-8 cta-buttons flex justify-center space-x-4">
        <Link to="/signup">
          <button className="px-6 py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </Link>
      </div>
    </div>

  </div>
  )
}

export default Bgvideoplayer