import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'

const Routing = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/dishes" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing