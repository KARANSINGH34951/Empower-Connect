import './App.css'
import Bgvideoplayer from './components/Bgvideoplayer'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
     <div className="bg-blue-100 min-h-screen"> {/* Change bg-blue-100 to your preferred Tailwind color class */}
      <nav className="bg-gray-800">
        <Navbar/>
      </nav>
      <main>
        <Bgvideoplayer/>
        {/* Your main content */}
      </main>
    </div>
    </>
  )
}

export default App
