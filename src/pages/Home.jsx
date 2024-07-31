import Navbar from '../components/Navbar'
import Bgvideoplayer from '../components/Bgvideoplayer'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import TwoColumnSection from '../components/TwoColumnSection'
import Counter from '../components/Counter'

const Home = () => {
  return (
    <div>     
    
      <Bgvideoplayer/>
      <Counter/>
      <FeaturesSection/> 
      <TwoColumnSection/>   
      
      
    </div>
  )
}

export default Home