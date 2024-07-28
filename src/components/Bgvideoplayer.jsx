import video from "../utilis/video/invideo-ai-720 Empower Connect_ Transforming Lives, One 2024-07-27.mp4"

const Bgvideoplayer = () => {
  return (
    <div className='relative bg-container h-[500px] overflow-hidden'>
    <video autoPlay muted loop id='myVideo' className='absolute w-full h-full object-cover'>
      <source src={video} type='video/mp4' />
    </video>

    <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-black'>
      <h1 className='text-7xl font-bold mb-5 '>Empower Connect</h1>
      <p className='text-4xl mb-5'>Transforming Lives, One Connection at a Time</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Get Started
      </button>
    </div>
  </div>
  )
}

export default Bgvideoplayer