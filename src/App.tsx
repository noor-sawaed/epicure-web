import { MainContainer } from "./AppStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"

function App() {
  
  return (
    <MainContainer  >
      {/* <Outlet /> */}
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="/details" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
    </MainContainer>
  )
}

export default App
