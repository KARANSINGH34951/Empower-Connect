import { useSelector } from 'react-redux';
import Bgvideoplayer from '../components/Bgvideoplayer';
import FeaturesSection from '../components/FeaturesSection';
import TwoColumnSection from '../components/TwoColumnSection';
import Counter from '../components/Counter';
import Slider from '../components/Slider';
import StorySection from '../components/StorySection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {!user.loggedIn &&  <Bgvideoplayer />}
      {user.loggedIn &&   <Slider/>}
      {user.loggedIn &&    <StorySection />}   
      {user.loggedIn &&  <ProjectSection/>}   
      {!user.loggedIn && <Counter />}
      <FeaturesSection />
      {!user.loggedIn && ( 
      <TwoColumnSection />      
      )}
    </div>
  );
};

export default Home;
