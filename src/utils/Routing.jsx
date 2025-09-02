import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Contact from '../Components/Contact'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import About from '../Components/About'
import Home from '../Components/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Routing