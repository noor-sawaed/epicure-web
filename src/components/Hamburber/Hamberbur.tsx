import React from "react"
import XLogo from "../../Assets/x.svg"
import Footer from "../Footer/Footer"
import "./Hamburber.css"
const Hamberbur = (props: any) => {
  return (
    <div className="HamburberDiv">
      <img
        className="searchLogo"
        src={XLogo}
        alt="Xlogo"
        onClick={props.closeHamburber}
      />
      <div className="topHamburber">
        <button className="hamburberButton">Restaurants</button>
        <button className="hamburberButton">Chefs</button>
      </div>
      <div className="bottomHamburber">
        <Footer />
      </div>
    </div>
  )
}

export default Hamberbur
