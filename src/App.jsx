import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import img from "../src/utilis/images/GRID BACKGROUND.jpg"

import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
     <div  
     style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
      > 
      <Navbar/>
      <main >
        <Outlet/>
      </main>
      <Footer/>
      
    </div>
    </>
  )
}

export default App
