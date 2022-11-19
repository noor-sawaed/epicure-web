import { Dialog } from "@mui/material"
import React, { useState } from "react"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hamburber from "./components/Hamburber/Hamberbur"
import Outlet from "./components/Outlet/Outlet"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
  const [searchBarStatus, setSearchBarStatus] = useState(false)
  const [HamburberStatus, setHamburberStatus] = useState(false)

  const handleCloseHamburber = () => {
    setHamburberStatus(false);
  }

  const handleOpenHamburber = () => {
    setHamburberStatus(true);
  }
  const handleCloseSearchBar = () => {
    setSearchBarStatus(false);
  }

  const handleOpenSearchBar = () => {
    setSearchBarStatus(true);
  }
  
  return (
    <div className="mainContainer" >
      <Header openSearch={handleOpenSearchBar} openHmaburber={handleOpenHamburber}/>
      {/* <Outlet /> */}
      <Dialog
        open={searchBarStatus}
        onClose={handleCloseSearchBar}
        // onClose={handleClose}
        style={{height:"376px"}}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <SearchBar closeSearch={handleCloseSearchBar}/>
      </Dialog>
      <Dialog
        open={HamburberStatus}
        onClose={handleCloseHamburber}
        // onClose={handleClose}
        style={{height:"376px"}}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Hamburber closeHamburber={handleCloseHamburber}/>
      </Dialog>

      <Footer />
    </div>
  )
}

export default App
