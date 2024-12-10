import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import HeroSec from './Components/HeroSec'
import Footer from './Components/Footer'
import Editors from './Editors pick/page'
import Featured from './Featured products/page'
import Cart from './Cart/page'
import Univers from './univers/page'
import Posts from './Featured Posts/page'

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
