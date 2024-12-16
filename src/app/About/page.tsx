import React from 'react';
import Link from 'next/link';
import Header from '../About/Header'
import Hero from '../About/Hero'
import Footer from '../About/Footer'
import FeatureProducts from '../About/Featured products/page'
import Shop from '../About/Shop/page'
import Logo from '../About/logo/page'
import  Result  from '../About/result/page'




const page = () => {
  return (
    <div>
       
      <Header/>
      <Hero/>
      <Result/>
      <Shop/>
       <Logo/>
      <Footer/>
      <FeatureProducts/>
    </div>
  )
}

export default page
