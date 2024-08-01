import { useSelector } from 'react-redux';
import Bgvideoplayer from '../components/Bgvideoplayer';
import FeaturesSection from '../components/FeaturesSection';
import TwoColumnSection from '../components/TwoColumnSection';
import Counter from '../components/Counter';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Bgvideoplayer />
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
