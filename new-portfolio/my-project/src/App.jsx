// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  return <>
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-lime-300 selection:bg-lime-800">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>      
    <Navbar />
    <Hero/>
    </div>
  </>
}

export default App
