import React from 'react'
import Nav from './nav'
import Footer from './Footer'
const layout = ({children}) => {
  return (
    <>
    <Nav />
    {children}
    <Footer />
    </>
  )
}

export default layout