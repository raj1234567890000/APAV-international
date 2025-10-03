Services-service_yq4ldqt
Template-template_0mgkqms
public-89Euqr_oIxBmS02Gq



import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import Products from './Components/Products '
import About from './Components/About'
import ServicesPage from './Components/ServicesPage'
import ContactPage from './Components/ContactPage'
import ScrollToTop from './Components/ScrollToTop'
import SearchDropdown from './Components/SearchDropdown'
import ProductDetail from './Components/ProductDetail'
import ProductDropdown from './Components/ProductDropdown'






const App = () => {
 
const products = [
  { id: 1, name: "RO System Plant", description: "High quality RO System Plant." },
  { id: 2, name: "Customized RO Plant", description: "Tailored RO plant." },
  { id: 3, name: "Water Cooler", description: "Energy-efficient water cooler." },
  { id: 4, name: "UV Purifier", description: "Bacteria-free UV purifier." },
];
  return (
    <>
  <BrowserRouter>
<ScrollToTop/>
 <SearchDropdown />
   <ProductDropdown products={products} /> 
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Product" element={<Products/>} />
         <Route path="/about" element={<About/>} />
          <Route path="/services" element={<ServicesPage/>} />
           <Route path="/contact" element={<ContactPage/>} />
        <Route path="/products/:id" element={<ProductDetail  />} />
 
        
      </Routes>
      
    </BrowserRouter>
 
    </>
  )
}

export default App
