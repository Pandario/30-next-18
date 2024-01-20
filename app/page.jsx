import Hero from './(components)/hero'
import Nav from './(components)/nav'
import { Top } from './(components)/top'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
    
      <div className=" relative w-full h-screen">
      
      <video src='/video/ocean.mp4' loop muted autoPlay className='absolute inset-0 object-cover w-full h-screen -z-10 contrast-125 brightness-90' ></video>
      <Nav/>

      <div className=" absolute top-2/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-center mix-blend-difference  pointer-events-none">
      <div className="">
        <p className=" text-lg  md:text-3xl lg:text-5xl font-bold pb-2 lg:pb-4 font-custom tracking-widest" >Tomorrow matters!</p>
        <p className=" text-lg md:text-3xl lg:text-5xl font-bold whitespace-nowrap pl-16  md:pl-24 pt-4 lg:pl-40 lg:pt-4 font-custom tracking-widest">Just not do it today!</p>
     </div>
    </div>
      </div>
      

      
      <div className="">
          <Hero />
        </div>
      
        <div className="text-center text-gray-800 mt-2 text-xs md:text-sm lg:text-lg font-bold mix-blend-difference">
        © Pandario 2024
        
      </div>
      <Top/>
    </main>
    
  )
}
