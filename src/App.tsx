import React, { useState } from "react"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Outlet from "./components/Outlet/Outlet"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const [searchBarStatus, setSearchBarStatus] = useState(false)

  return (
    <div className="mainContainer">
      <Header />
      {/* <Outlet /> */}
      <SearchBar />
      <Footer />
    </div>
  )
}

export default App
