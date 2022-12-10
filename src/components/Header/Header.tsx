import {
  HeaderBigLogo,
  HeaderLogo,
  LeftHeaderContainer,
  Linkto,
  MainHeaderContainer,
  MiddleHeaderContainer,
  RightHeaderContainer
} from "./HeaderStyles"
import Hamburber from "../Hamburber/Hamberbur"
import SearchBar from "../SearchBar/SearchBar"
import resturantLogo from "../../Assets/logo.svg"
import accountLogo from "../../Assets/account.svg"
import hamburberLogo from "../../Assets/hamburber.svg"
import searchLogo from "../../Assets/search.svg"
import cartLogo from "../../Assets/cart.svg"
import { Badge, createTheme, Dialog, ThemeProvider } from "@mui/material"
import { useState } from "react"
import Cart from "../Cart/Cart"
import { SignIn } from "../SignIn/SignIn"

const Header = () => {
  const [searchBarStatus, setSearchBarStatus] = useState(false)
  const [HamburberStatus, setHamburberStatus] = useState(false)
  const [CartStatus, setCartStatus] = useState(false)
  const [SignInStatus, setSignInStatus] = useState(false)
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000"
      },
      secondary: {
        main: "#000000"
      }
    }
  })

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
    <MainHeaderContainer>
      <Dialog
        open={searchBarStatus}
        onClose={handleCloseSearchBar}
        style={{ height: "376px" }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
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
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
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
        style={{ height: "280px",marginTop: "62px"}}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Cart/>
      </Dialog>
      <Dialog
        open={SignInStatus}
        onClose={handleCloseSignIn}
        style={{ height: "fit-content" }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        scroll="body"
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <SignIn closeSignIn={handleCloseSignIn} />
      </Dialog>
      <LeftHeaderContainer>
        <HeaderLogo
          src={hamburberLogo}
          alt="ham"
          onClick={handleOpenHamburber}
        />
      </LeftHeaderContainer>
      <MiddleHeaderContainer>
        <Linkto to="/">
          <HeaderBigLogo src={resturantLogo} alt="home" />
        </Linkto>
      </MiddleHeaderContainer>
      <RightHeaderContainer>
        <HeaderLogo src={searchLogo} alt="search" onClick={handleOpenSearchBar} />
        <HeaderLogo
          src={accountLogo}
          alt="account"
          onClick={handleOpenSignIn}
        />
        <ThemeProvider theme={theme}>
          <Badge
            color="primary"
            badgeContent={0}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
          >
            <HeaderLogo src={cartLogo} alt="logo" onClick={handleSwitchCartState} />
          </Badge>
        </ThemeProvider>
      </RightHeaderContainer>
    </MainHeaderContainer>
  )
}

export default Header
