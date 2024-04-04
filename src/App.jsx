import { useEffect, useState } from 'react'
import './App.css'
import Lenis from "@studio-freight/lenis";
import Home from './home.jsx'

function App() {
  useEffect(()=>{
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  },[]);

  return (
    <div id="app-container">
      <Home/>
    </div>
  )
}

export default App
