
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"

function App() {
  
  return (
    <div className="mainContainer" >
      {/* <Outlet /> */}
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/details" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
