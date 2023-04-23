import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout