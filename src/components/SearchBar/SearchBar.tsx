import React, { useEffect, useState } from "react"
import XLogo from "../../Assets/x.svg"
import SearchDiv from "../SearchDiv/SearchDiv"
import "./SearchBar.css"
const SearchBar = (props:any) => {

  return (
    <div className="SearchBarTotal">
      <div className="searchDiv">
        <img className="searchLogo" src={XLogo} alt="Xlogo" onClick={props.closeSearch}/>
        <label htmlFor="search" className="searchText">
          Search
        </label>
      </div>
      <SearchDiv/>
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
