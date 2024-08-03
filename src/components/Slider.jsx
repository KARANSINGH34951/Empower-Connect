import Herotext from '../customehooks/Herotext';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => {
  return (
    <AutoplaySlider className="relative w-full h-[500px]"
      play={true}
      cancelOnInteraction={false}
      interval={1000} 
    >
      <div className='w-full h-full'>
      <img 
          src="https://images.pexels.com/photos/3782228/pexels-photo-3782228.jpeg?auto=compress&cs=tinysrgb&w=600"
          className='w-full h-full object-cover absolute ' 
          alt="slide1" 
        />
      </div>

      
      <div className='w-full h-full'>
      <img 
          src="https://images.pexels.com/photos/6565756/pexels-photo-6565756.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className='w-full h-full object-cover' 
          alt="slide1" 
        />
      </div>

      <div className='w-full h-full'>
      <img 
          src="https://images.pexels.com/photos/6646897/pexels-photo-6646897.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className='w-full h-full object-cover' 
          alt="slide1" 
        />
      
      </div>

      <div className='w-full h-full'>
      <img 
          src="https://images.pexels.com/photos/735446/pexels-photo-735446.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className='w-full h-full object-cover' 
          alt="slide1" 
        />
        
      </div>

      </AutoplaySlider>
  );
};

export default SliderComponent;
