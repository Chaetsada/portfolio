
import { useEffect, useState } from 'react'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [isLoading,setIsLoading] = useState(false)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setIsLoading(!isLoading);
  //   },2000)
  // },[]);

  if(isLoading){
    return (
      <div className='h-screen flex justify-center place-items-center bg-white' >
        <ClimbingBoxLoader 
          color="#FA8072"
          size={25}
          loading={isLoading}
          speedMultiplier={2}
        />
      </div>
    ) 
  }

  return (
    <main>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App
