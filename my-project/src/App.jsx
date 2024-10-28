// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Three from "./components/Three"
import { Html } from "@react-three/drei"
import Mystack from "./components/Mystack"
// import Experience from "./components/Experience"
import WhatsappButton from "./components/WhatsappButton"
import Card from "./components/Card"
// import Cube from "./components/Cube"
// import Scene from "./components/Scene"


function App() {
  return <>
    <div className="min-h-screen h-full text-neutral-300 antialised selection:bg-lime-300 selection:bg-green-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="overflow-x-hidden absolute inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(160%_160%_at_50%_20%,#000_40%,#00ff00_100%)]"></div>
      </div>
      <WhatsappButton/>
      <Navbar />
      <Hero />
      <About />
      <Three>
        <Html fullscreen>
      
        </Html>
      </Three>
      <Mystack/>
      {/* <Experience/> */}
      <Card/>
      {/* <Scene /> */}
      
    </div>

  </>
}

export default App
