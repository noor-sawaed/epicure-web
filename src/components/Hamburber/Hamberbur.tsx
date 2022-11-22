import React from "react"
import XLogo from "../../Assets/x.svg"
import Footer from "../Footer/Footer"
import {
  BottomHamburberDiv,
  HamburberButton,
  MainHamburberContainer,
  ExitLogoImg,
  TopHamburberDiv
} from "./HamburberStyles"
const Hamberbur = (props: any) => {
  return (
    <MainHamburberContainer>
      <ExitLogoImg
        src={XLogo}
        alt="Xlogo"
        onClick={props.closeHamburber}
      />
      <TopHamburberDiv>
        <HamburberButton>Restaurants</HamburberButton>
        <HamburberButton>Chefs</HamburberButton>
      </TopHamburberDiv>
      <BottomHamburberDiv>
        <Footer />
      </BottomHamburberDiv>
    </MainHamburberContainer>
  )
}

export default Hamberbur
