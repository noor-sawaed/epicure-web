import React from "react"
import Restaurant from "../Restaurant/Restaurant"
import vectorLogo from "../../Assets/Vector.svg"
import {
  BottomPopularAllRestaurantsLink,
  LinkToAllRestaurants,
  MainPopularRestaurantsDiv,
  MainPopularRestaurantsHeader,
  PopularRestaurantsCollection,
  VectorLogo
} from "./PopularRestaurantsStyles"
const PopularRestaurants = () => {
  const rests = [
    {
      name: "shmoal",
      location: "bear shevaa",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "pipaya",
      location: "karmeil",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "abu shaker",
      location: "deir-el assad",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "shmoal",
      location: "bear shevaa",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "pipaya",
      location: "karmeil",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "abu shaker",
      location: "deir-el assad",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    }
  ]
  return (
    <MainPopularRestaurantsDiv>
      <MainPopularRestaurantsHeader>
        popular restaurant in epicure:
      </MainPopularRestaurantsHeader>
      <PopularRestaurantsCollection>
        {rests.map((restaurant) => (
          <Restaurant
            name={restaurant.name}
            image={restaurant.image}
            location={restaurant.location}
          />
        ))}
      </PopularRestaurantsCollection>
      <BottomPopularAllRestaurantsLink>
        <LinkToAllRestaurants>All Restaurants</LinkToAllRestaurants>
        <VectorLogo
          src={vectorLogo}
          alt="Victor"
          // onClick={}
        />
      </BottomPopularAllRestaurantsLink>
    </MainPopularRestaurantsDiv>
  )
}

export default PopularRestaurants
