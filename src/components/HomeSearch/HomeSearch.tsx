import React, { useEffect, useState } from "react"
import SearchDiv from "../SearchDiv/SearchDiv"
import {
  HomeSearchContent,
  MainHomeSearchContainer,
  HomeSearchHeader,
  SearchLabel,
  SearchResults,
  SearchLabelResults,
  LinkTo
} from "./HomeSearchStyles"
import restaurants from "../../api/restaurants.json"
import dishes from "../../api/dishes.json"

const HomeSearch = () => {
  const [searchText, setsearchText] = useState("")
  const [filteredRestaurants, setfilteredRestaurants] = useState<any>([])
  const [filteredDishes, setfilteredDishes] = useState<any>([])
  // const [filteredCusine,setfilteredCusine] = useState<any>()

  const resetValues = () => {
    setfilteredRestaurants([])
    setfilteredDishes([])
    // setfilteredCusine([])
  }

  useEffect(() => {
    resetValues()
    if (searchText !== "") {
      const TempRest = restaurants.filter((restaurant: any) => {
        if (restaurant.name.includes(searchText)){
          return restaurant
        }
      })
      setfilteredRestaurants(TempRest)

      const TempDish = dishes.filter((dish) => {
        if (dish.name.includes(searchText)){
          return dish
        }
      })
      setfilteredDishes(TempDish)
    }

  }, [searchText])

  
  return (
    <MainHomeSearchContainer>
      <HomeSearchContent>
        <HomeSearchHeader>
          Epicure works with the top
          <br />
          chef restaurants in Tel Aviv
        </HomeSearchHeader>
        <SearchDiv searchText={searchText} setsearch={setsearchText} />
      </HomeSearchContent>
      {searchText && <SearchResults>
        {(filteredRestaurants.length !== 0) ? (
          <SearchLabel>Resturants:</SearchLabel>
        ) : null}
        {filteredRestaurants.map((currentRestaurant: any) => (
          <LinkTo to={"restaurants/restaurant/" + currentRestaurant?.id} state={{currentRestaurant}}>
            <SearchLabelResults htmlFor="">{currentRestaurant?.name}</SearchLabelResults>
          </LinkTo>
        ))}
        {(filteredDishes.length !== 0) ? (
          <SearchLabel>Dishes:</SearchLabel>
        ) : null}

        {filteredDishes.map((dish: any) => (
          <LinkTo to={"restaurants/restaurant/1/dish/" + dish?.id} state={{dish}}>
            <SearchLabelResults htmlFor="">{dish?.name}</SearchLabelResults>
          </LinkTo>
        ))}
        {/*//TODO with more data should add Cusine filter: <SeardishchLabel>Cusine:</SeardishchLabel> */}
        {/* <SearchLabelResults htmlFor="">Thai</SearchLabelResults> */}
      </SearchResults>}
    </MainHomeSearchContainer>
  )
}

export default HomeSearch
