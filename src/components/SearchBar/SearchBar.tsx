import XLogo from "../../Assets/x.svg"
import SearchDiv from "../SearchDiv/SearchDiv"
import {
  MainSearchBarContainer,
  TopSearchHeader,
  SearchLogo,
  SearchTextTitle,
  SearchResults,
  SearchLabelResults,
  SearchLabel,
  LinkTo
} from "./SearchBarStyles"
import restaurants from "../../api/restaurants.json"
import dishes from "../../api/dishes.json"
import { useEffect, useState } from "react"
const SearchBar = (props: any) => {
  const [searchText, setsearchText] = useState("")
  const [filteredRestaurants, setfilteredRestaurants] = useState<any>([])
  const [filteredDishes, setfilteredDishes] = useState<any>([])
  // const [filteredCusine,setfilteredCusine] = useState<any>()

  useEffect(() => {
    setfilteredRestaurants([])
    setfilteredDishes([])
    // setfilteredCusine([])
    if (searchText !== "") {
      restaurants.map((restaurant:any) => {
        if (restaurant.name.includes(searchText)) setfilteredRestaurants([...filteredRestaurants,restaurant])
      })
      
      dishes.map((dish) => {
        if (dish.name.includes(searchText)) setfilteredDishes([...filteredDishes,dish])
      })
    }
  }, [searchText])

  return (
    <MainSearchBarContainer>
      <TopSearchHeader>
        <SearchLogo src={XLogo} alt="Xlogo" onClick={props.closeSearch} />
        <SearchTextTitle htmlFor="search">Search</SearchTextTitle>
      </TopSearchHeader>
      <SearchDiv searchText={searchText} setsearch={setsearchText} />
      <SearchResults>
        {filteredRestaurants.length !== 0 ? (
          <SearchLabel>Resturants:</SearchLabel>
        ) : null}
        {/* <Link to="/"></Link> */}
        {filteredRestaurants.map((res: any) => (
          <LinkTo to={"restaurants/restaurant/" + res?.id}>
            <SearchLabelResults htmlFor="">{res?.name}</SearchLabelResults>
          </LinkTo>
        ))}
        {filteredDishes.length !== 0 ? (
          <SearchLabel>Dishes:</SearchLabel>
        ) : null}

        {filteredDishes.map((dish: any) => (
          <LinkTo to={"restaurants/restaurant/1/dish/" + dish?.id}>
            <SearchLabelResults htmlFor="">{dish?.name}</SearchLabelResults>
          </LinkTo>
        ))}
        {/*//TODO with more data should add Cusine filter: <SeardishchLabel>Cusine:</SeardishchLabel> */}
        {/* <SearchLabelResults htmlFor="">Thai</SearchLabelResults> */}
      </SearchResults>
    </MainSearchBarContainer>
  )
}

export default SearchBar
