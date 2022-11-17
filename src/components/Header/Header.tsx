import "./Header.css"
import resturantLogo from "../../Assets/logo.svg"
import accountLogo from "../../Assets/account.svg"
import hamburberLogo from "../../Assets/hamburber.svg"
import searchLogo from "../../Assets/search.svg"
import cartLogo from "../../Assets/cart.svg"
import { Badge, createTheme, ThemeProvider } from "@mui/material"

const Header = () => {
    
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#000000"
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#000000"
      }
    }
  })

  return (
    <div className="mainHeaderContainer">
      <div className="leftContainer">
        <img className="logo" src={hamburberLogo} alt="ham" />
      </div>
      <div className="middleContainer">
        <img className="biglogo" src={resturantLogo} alt="home" />
      </div>
      <div className="RightContainer">
        <img className="logo" src={searchLogo} alt="acc" />
        <img className="logo" src={accountLogo} alt="logo" />
        <ThemeProvider theme={theme}>
          <Badge
            color="primary"
            badgeContent={10}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
          >
            <img className="logo" src={cartLogo} alt="logo" />
          </Badge>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
