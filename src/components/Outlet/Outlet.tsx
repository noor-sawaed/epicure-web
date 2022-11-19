import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Outlet = () => {
  return (
     <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/details" element={<Details />} /> */}
      </Routes>
    </BrowserRouter> 
  )
}

export default Outlet