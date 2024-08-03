import { useSelector } from 'react-redux';
import Bgvideoplayer from '../components/Bgvideoplayer';
import FeaturesSection from '../components/FeaturesSection';
import TwoColumnSection from '../components/TwoColumnSection';
import Counter from '../components/Counter';
import Slider from '../components/Slider';
import StorySection from '../components/StorySection';
import ProjectSection from '../components/ProjectSection';
import Herotext from '../customehooks/Herotext';
import TwoColumnSection2 from '../components/Twosection2';
import Resource from "../components/EducationComponent"

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {!user.loggedIn &&  <Bgvideoplayer />}
      {user.loggedIn &&   <Slider/>}
      <Herotext/>
      {user.loggedIn &&    <StorySection />}   
      {user.loggedIn &&  <ProjectSection/>}   
      {!user.loggedIn && <Counter />}
     
      <FeaturesSection />
      {!user.loggedIn && ( 
      <TwoColumnSection />      
      )}
      {!user.loggedIn && ( 
      <TwoColumnSection2 />      
      )}
      <Resource/>
    </div>
  );
};

export default Home;
