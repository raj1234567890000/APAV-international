import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import Products from './Components/Products '
import About from './Components/About'
import ServicesPage from './Components/ServicesPage'
import ContactPage from './Components/ContactPage'



const App = () => {
  return (
    <>
  <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Product" element={<Products/>} />
         <Route path="/about" element={<About/>} />
          <Route path="/services" element={<ServicesPage/>} />
           <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      
    </BrowserRouter>
 
    </>
  )
}

export default App
