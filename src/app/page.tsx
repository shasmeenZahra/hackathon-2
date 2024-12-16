import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import HeroSec from './Components/HeroSec'
import Footer from './Components/Footer'
import Editors from './Components/Editors pick/page'
import Featured from './Components/Featured products/page'
import Cart from './Components/Cart/page'
import Univers from './Components/univers/page'
import Posts from './Components/Featured Posts/page'


const page = () => {
  return (
     <>
    
      <Header/>
        <Hero/>
        <HeroSec/>
        <Editors/>
        <Featured/>
        <Cart/> 
        <Univers/>
        <Posts/>
         <Footer/>
    </>
  )
}

export default page
