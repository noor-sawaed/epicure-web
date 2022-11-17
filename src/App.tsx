import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="mainContainer">
      <Header />
      {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter> */}
      <Footer />
    </div>
  )
}

export default App
