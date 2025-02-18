import React from 'react'
import Header from '../components/header/Header'
import Hero from "../components/hero/Hero.jsx"
import Portfolio from '../components/portfolio/Portfolio.jsx'
import ProductsCards from '../components/products/ProductsCards.jsx'
import Faq from '../components/FAQ/Faq.jsx'
import Contact from '../components/contact form/Contact.jsx'
import Footer from '../components/footer/Footer.jsx'
const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Portfolio/>
    <ProductsCards/>
    <Faq/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default HomePage