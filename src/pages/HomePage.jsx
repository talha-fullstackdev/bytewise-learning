import React from 'react'
import Header from '../components/header/Header'
import Hero from "../components/hero/Hero.jsx"
import Portfolio from '../components/portfolio/Portfolio.jsx'
import ProductsCards from '../components/products/ProductsCards.jsx'
import Faq from '../components/FAQ/Faq.jsx'
const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Portfolio/>
    <ProductsCards/>
    <Faq/>
    </>
  )
}

export default HomePage