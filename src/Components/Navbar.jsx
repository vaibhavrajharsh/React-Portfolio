import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex gap-8 justify-center p-5 font-semibold bg-emerald-500 text-white'>
       <Link to="/">Home</Link> 
       <Link to="/about">About</Link> 
       <Link to="/skills">Skills</Link> 
       <Link to="/projects">Projects</Link> 
       <Link to="/contact">Contact</Link> 
    </nav>
    </>
  )
}

export default Navbar