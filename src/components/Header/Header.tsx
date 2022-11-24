import {
  HeaderBigLogo,
  HeaderLogo,
  LeftHeaderContainer,
  MainHeaderContainer,
  MiddleHeaderContainer,
  RightHeaderContainer
} from "./HeaderStyles"
import resturantLogo from "../../Assets/logo.svg"
import accountLogo from "../../Assets/account.svg"
import hamburberLogo from "../../Assets/hamburber.svg"
import searchLogo from "../../Assets/search.svg"
import cartLogo from "../../Assets/cart.svg"
import { Badge, createTheme, ThemeProvider } from "@mui/material"

const Header = (props: any) => {
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

  return (
    <MainHeaderContainer>
      <LeftHeaderContainer>
        <HeaderLogo
          src={hamburberLogo}
          alt="ham"
          onClick={props.openHmaburber}
        />
      </LeftHeaderContainer>
      <MiddleHeaderContainer>
        <HeaderBigLogo src={resturantLogo} alt="home" />
      </MiddleHeaderContainer>
      <RightHeaderContainer>
        <HeaderLogo src={searchLogo} alt="search" onClick={props.openSearch} />
        <HeaderLogo src={accountLogo} alt="account" onClick={props.openSignIn} />
        <ThemeProvider theme={theme}>
          <Badge
            color="primary"
            badgeContent={10}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
          >
            <HeaderLogo src={cartLogo} alt="logo" onClick={props.siwtchCart} />
          </Badge>
        </ThemeProvider>
      </RightHeaderContainer>
    </MainHeaderContainer>
  )
}

export default Header
