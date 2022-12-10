import React from "react"
import XLogo from "../../Assets/x.svg"
import Footer from "../Footer/Footer"
import {
  BottomHamburberDiv,
  HamburberButton,
  MainHamburberContainer,
  ExitLogoImg,
  TopHamburberDiv,
  Linkto
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
        <Linkto to="/restaurants"><HamburberButton>Restaurants</HamburberButton></Linkto>
        <Linkto to="/chefs"><HamburberButton>Chefs</HamburberButton></Linkto>
      </TopHamburberDiv>
      <BottomHamburberDiv>
        <Footer />
      </BottomHamburberDiv>
    </MainHamburberContainer>
  )
}

export default Hamberbur
