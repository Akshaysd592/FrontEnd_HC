import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header/> 
        <Outlet/>
        <Footer/>
    </>
    // Header and Footer remains Same only changes in <Outlet/> tag area 
  )
}

export default Layout