import React, { useEffect, useState } from "react"
import XLogo from "../../Assets/x.svg"
import searchLogo from "../../Assets/search.svg"
import "./SearchBar.css"
const SearchBar = () => {

  return (
    <div className="SearchBarTotal">
      <div className="searchDiv">
        <img className="searchLogo" src={XLogo} alt="Xlogo" />
        <label htmlFor="search" className="searchText">
          Search
        </label>
      </div>
      <div className="searchTextBar">
        <img className="smallLogo" src={searchLogo} alt="Xlogo" />
        <input
          type="text"
          className="searchTextInput"
          placeholder="Search for restaurant cuisine, chef"
        />
      </div>
      <div className="results">
        {/* //TODO must  add results for search*/}
        <h3 className="searchLabel">Resturants:</h3>
        {/* <Link to="/"></Link> */}
        <label htmlFor="" className="searchedresult">
          Tiger lau
        </label>
        <h3 className="searchLabel">Dishes:</h3>
        <label htmlFor="" className="searchedresult">
          Pizza
        </label>
        <label htmlFor="" className="searchedresult">
          hazia pato'n
        </label>
        <h3 className="searchLabel">Cusine:</h3>
        <label htmlFor="" className="searchedresult">
          Thai
        </label>
      </div>
    </div>
  )
}

export default SearchBar
