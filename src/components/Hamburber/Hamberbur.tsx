import React from "react"
import XLogo from "../../Assets/x.svg"

const Hamberbur = (props:any) => {
  return (
    <div className="searchDiv">
      <img className="searchLogo" src={XLogo} alt="Xlogo" onClick={props.closeHamburber} />
      <div className="topHamburber">
        <button className="hamburberButton">Restaurants</button>
        <button className="hamburberButton">Chefs</button>
      </div>
      {/* //! add Footer */}
    </div>
  )
}

export default Hamberbur
