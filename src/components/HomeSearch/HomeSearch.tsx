import React from 'react'
import SearchDiv from '../SearchDiv/SearchDiv'
import { HomeSearchContent, MainHomeSearchContainer ,HomeSearchHeader} from './HomeSearchStyles'
const HomeSearch = () => {
  return (
    <MainHomeSearchContainer>
        <HomeSearchContent>
            <HomeSearchHeader>Epicure works with the top<br/>chef restaurants in Tel Aviv</HomeSearchHeader>
            <SearchDiv/>
        </HomeSearchContent>
    </MainHomeSearchContainer>
  )
}

export default HomeSearch