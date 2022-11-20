import React from 'react'
import SearchDiv from '../SearchDiv/SearchDiv'
import "./HomeSearch.css"
const HomeSearch = () => {
  return (
    <div className="MainHomeSearchContainer">
        <div className="HomeSearchContent">
            <label className="homeSearchHeader">Epicure works with the top<br/>chef restaurants in Tel Aviv</label>
            <SearchDiv/>
        </div>
    </div>
  )
}

export default HomeSearch