import Herotext from '../customehooks/Herotext';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={1000} 
    >
      <div className='w-full h-full'>
      <img 
          src="https://th.bing.com/th/id/OIP.Gtl2G3rnRbERaYZkxT1fPQHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
          className='w-full h-full object-cover absolute' 
          alt="slide1" 
        />
      </div>

      <div className='w-full h-full'>
      <img 
          src="https://th.bing.com/th/id/OIP.kyi3w76t83xEt32VGC4UnAHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
          className='w-full h-full object-cover' 
          alt="slide1" 
        />
      </div>

      <div className='w-full h-full'>
      <img 
          src="https://th.bing.com/th/id/OIP.Gtl2G3rnRbERaYZkxT1fPQHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
          className='w-full h-full object-cover' 
          alt="slide1" 
        />
      
      </div>

      <div className='w-full h-full'>
      <img 
          src="https://th.bing.com/th/id/OIP.kyi3w76t83xEt32VGC4UnAHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" 
          className='w-full h-full object-cover' 
          alt="slide1" 
        />
        
      </div>

      </AutoplaySlider>
  );
};

export default SliderComponent;
