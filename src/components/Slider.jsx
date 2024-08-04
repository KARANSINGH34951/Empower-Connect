import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => {
  return (
    <AutoplaySlider 
      className="relative w-full h-[500px] lg:h-[600px]"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
    >
      <div className="w-full h-full relative">
        <img 
          src="https://images.pexels.com/photos/3782228/pexels-photo-3782228.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-full h-full object-cover absolute" 
          alt="slide1" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <p className="bg-black bg-opacity-75 text-white text-lg md:text-2xl lg:text-3xl font-bold text-center p-4 rounded">
            "Empower Connect: Bridging the gap between potential and opportunity. Together, we can change destinies."
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <img 
          src="https://images.pexels.com/photos/6565756/pexels-photo-6565756.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className="w-full h-full object-cover absolute" 
          alt="slide2" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <p className="bg-black bg-opacity-75 text-white text-lg md:text-2xl lg:text-3xl font-bold text-center p-4 rounded">
            "Unlocking potential, fostering growth, and ensuring equitable access to resources for all."
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <img 
          src="https://media.istockphoto.com/id/1521120441/photo/group-of-young-traditional-indian-women-wearing-sari-learn-to-use-laptop-or-computer.jpg?b=1&s=612x612&w=0&k=20&c=RqsGehmrJu1bpK7TqUmB8kBizpsIzlpH89fgWYuEkhA=" 
          className="w-full h-full object-cover absolute" 
          alt="slide3" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <p className="bg-black bg-opacity-75 text-white text-lg md:text-2xl lg:text-3xl font-bold text-center p-4 rounded">
            "Transforming lives through education, job opportunities, and community support."
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <img 
          src="https://images.pexels.com/photos/735446/pexels-photo-735446.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className="w-full h-full object-cover absolute" 
          alt="slide4" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <p className="bg-black bg-opacity-75 text-white text-lg md:text-2xl lg:text-3xl font-bold text-center p-4 rounded">
            "Empower Connect: Your pathway to a brighter future, where every step counts."
          </p>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default SliderComponent;
