import Herotext from '../customehooks/Herotext';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => {
  return (
    <AutoplaySlider 
      className="relative w-full h-[500px]"
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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-4xl lg:text-6xl font-bold text-center p-4">
            "Poverty is not an accident. Like slavery and apartheid, it is man-made and can be removed by the actions of human beings."
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <img 
          src="https://images.pexels.com/photos/6565756/pexels-photo-6565756.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className="w-full h-full object-cover absolute" 
          alt="slide2" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-4xl lg:text-6xl font-bold text-center p-4">
            "Ending poverty is not just about charity, but about justice and equity."
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <img 
          src="https://media.istockphoto.com/id/1521120441/photo/group-of-young-traditional-indian-women-wearing-sari-learn-to-use-laptop-or-computer.jpg?b=1&s=612x612&w=0&k=20&c=RqsGehmrJu1bpK7TqUmB8kBizpsIzlpH89fgWYuEkhA=" 
          className="w-full h-full object-cover absolute" 
          alt="slide3" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-4xl lg:text-6xl font-bold text-center p-4">
            "Poverty is the worst form of violence."
          </p>
        </div>
      </div>

      <div className="w-full h-full relative">
        <img 
          src="https://images.pexels.com/photos/735446/pexels-photo-735446.jpeg?auto=compress&cs=tinysrgb&w=600" 
          className="w-full h-full object-cover absolute" 
          alt="slide4" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <p className="text-white text-4xl lg:text-6xl font-bold text-center p-4">
            "We can end poverty by ensuring everyone has the opportunity to thrive."
          </p>
        </div>
      </div>

    </AutoplaySlider>
  );
};

export default SliderComponent;
