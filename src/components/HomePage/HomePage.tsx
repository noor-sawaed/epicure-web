import {MainHomePageContainer} from "./HomePageStyles"
import { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Dialog } from "@mui/material"
import Hamburber from "../Hamburber/Hamberbur"
import SearchBar from "../SearchBar/SearchBar"
import HomeSearch from "../HomeSearch/HomeSearch"
import PopularRestaurants from '../PopularRestaurant/PopularRestaurants'
const HomePage = () => {
  const [searchBarStatus, setSearchBarStatus] = useState(false)
  const [HamburberStatus, setHamburberStatus] = useState(false)
  const [CartStatus,setCartStatus] = useState(false)

  const handleCloseCart = () => {
    setCartStatus(false);
  }

  const handleOpenCart = () => {
    setCartStatus(true);
  }

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
    <MainHomePageContainer>
      <Header openSearch={handleOpenSearchBar} openHmaburber={handleOpenHamburber}/>
        <Dialog
        open={searchBarStatus}
        onClose={handleCloseSearchBar}
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
        style={{height:"376px"}}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Hamburber closeHamburber={handleCloseHamburber}/>
      </Dialog>
      {/* <Dialog
        open={CartStatus}
        onClose={handleCloseCart}
        style={{height:"376px"}}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      > */}
        {/* <Hamburber closeHamburber={handleCloseHamburber}/> */}
        {/* //? Adding Cart Component with dialog */}
      {/* </Dialog> */}
      <HomeSearch/>
      <PopularRestaurants/>
      <Footer/>
    </MainHomePageContainer>
  )
}

export default HomePage