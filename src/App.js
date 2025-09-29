import React from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import TopNav from './Components/TopNav'


const App = () => {
  return (
    <>
  <BrowserRouter>
      <TopNav /> 
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
 
    </>
  )
}

export default App
