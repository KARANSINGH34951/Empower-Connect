import { useSelector } from 'react-redux';
import Bgvideoplayer from '../components/Bgvideoplayer';
import FeaturesSection from '../components/FeaturesSection';
import TwoColumnSection from '../components/TwoColumnSection';
import Counter from '../components/Counter';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from '../components/Slider';
import StorySection from '../components/StorySection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
        <Slider/>
        <StorySection />
        <ProjectSection />
       
      {!user.loggedIn &&  <Bgvideoplayer />}
      {!user.loggedIn && <Counter />}
      <FeaturesSection />
      {!user.loggedIn && (
        <ScrollAnimation animateIn="fadeIn">
          <TwoColumnSection />
        </ScrollAnimation>
      )}
    </div>
  );
};

export default Home;
