import { MainHomePageContainer } from "./HomePageStyles"
import { useState } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Dialog } from "@mui/material"
import Hamburber from "../Hamburber/Hamberbur"
import SearchBar from "../SearchBar/SearchBar"
import HomeSearch from "../HomeSearch/HomeSearch"
import Cart from "../Cart/Cart"
import PopularRestaurants from "../PopularRestaurant/PopularRestaurants"
import SignatureDish from "../SignatureDish/SignatureDish"
import SignatureIcons from "../SignatureIcons/SignatureIcons"
import { AboutUs } from "../AboutUs/AboutUs"
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek"
import { SignIn } from "../SignIn/SignIn"
const HomePage = () => {
  const [searchBarStatus, setSearchBarStatus] = useState(false)
  const [HamburberStatus, setHamburberStatus] = useState(false)
  const [CartStatus, setCartStatus] = useState(false)
  const [SignInStatus, setSignInStatus] = useState(false)

  const handleCloseSignIn = () => {
    setSignInStatus(false)
  }

  const handleOpenSignIn = () => {
    setSignInStatus(true)
  }
  const handleSwitchCartState = () => {
    setCartStatus(!CartStatus)
  }

  const handleCloseCart = () => {
    setCartStatus(false)
  }

  const handleCloseHamburber = () => {
    setHamburberStatus(false)
  }

  const handleOpenHamburber = () => {
    setHamburberStatus(true)
  }
  const handleCloseSearchBar = () => {
    setSearchBarStatus(false)
  }

  const handleOpenSearchBar = () => {
    setSearchBarStatus(true)
  }

  return (
    <MainHomePageContainer>
      <Header
        openSearch={handleOpenSearchBar}
        openHmaburber={handleOpenHamburber}
        siwtchCart={handleSwitchCartState}
        openSignIn={handleOpenSignIn}
      />
      <Dialog
        open={searchBarStatus}
        onClose={handleCloseSearchBar}
        style={{ height: "376px" }}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <SearchBar closeSearch={handleCloseSearchBar} />
      </Dialog>
      <Dialog
        open={HamburberStatus}
        onClose={handleCloseHamburber}
        style={{ height: "376px" }}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Hamburber closeHamburber={handleCloseHamburber} />
      </Dialog>
      <Dialog
        open={CartStatus}
        onClose={handleCloseCart}
        style={{ height: "280px" }}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Header
          openSearch={handleOpenSearchBar}
          openHmaburber={handleOpenHamburber}
          siwtchCart={handleSwitchCartState}
        />
        <Cart siwtchCart={handleSwitchCartState} />
        {/* //? Adding Cart Component with dialog */}
      </Dialog>
      <Dialog
        open={SignInStatus}
        onClose={handleCloseSignIn}
        style={{ height: "fit-content" }}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <SignIn closeSignIn={handleCloseSignIn} />
      </Dialog>
      <HomeSearch />
      <PopularRestaurants />
      <SignatureDish />
      <SignatureIcons />
      <ChefOfTheWeek />
      <AboutUs />
      <Footer />
    </MainHomePageContainer>
  )
}

export default HomePage
