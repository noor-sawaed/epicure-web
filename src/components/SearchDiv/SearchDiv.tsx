import React from 'react'
import searchLogo from "../../Assets/search.svg"
import "./SearchDiv.css"
const SearchDiv = () => {
  return (
    <div className="searchTextBar">
        <img className="smallLogo" src={searchLogo} alt="searchlogo" />
        <input
          type="text"
          className="searchTextInput"
          placeholder="Search for restaurant cuisine, chef"
        />
      </div>
    )
}

export default SearchDiv