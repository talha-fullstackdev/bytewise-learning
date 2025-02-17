import React from 'react'
import Header from '../components/header/Header'
import Hero from "../components/hero/Hero.jsx"
import Portfolio from '../components/portfolio/Portfolio.jsx'
import ProductsCards from '../components/products/ProductsCards.jsx'
const HomePage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Portfolio/>
    <ProductsCards/>
    </>
  )
}

export default HomePage