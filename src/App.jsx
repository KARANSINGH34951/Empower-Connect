import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
     <div > {/* Change bg-blue-100 to your preferred Tailwind color class */}
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      
    </div>
    </>
  )
}

export default App
