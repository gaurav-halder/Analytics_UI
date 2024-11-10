import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SocialCompanies from './components/SocialCompanies'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Trail from './components/Trail'
import Footer from './Footer'
import FAQ from './components/FAQ'
import BlogPosts from './components/Blogpost'
import Features2 from './components/Features2'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <SocialCompanies/>
        <Features/>
        <Testimonial/>
        <Features2/>
        <FAQ/>
        <BlogPosts/>
        <Trail/>
        <Footer/>
    </div>
  )
}

export default Home