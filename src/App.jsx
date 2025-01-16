import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/contact'

export default function App() {
  return (
    <div>
    <Navbar/>
    <hr/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
  )
}
