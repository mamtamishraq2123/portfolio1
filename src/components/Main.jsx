import React from 'react'
import Nav from "./Nav"
import Hero from './Hero'
import Project from './Project'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Main = () => {
  return (
    <div className="bg-indigo-600">
 <Nav/>
 <Hero/>
 <Project/>
 <Testimonials/>
 <Footer/>

    </div>
  )
}

export default Main