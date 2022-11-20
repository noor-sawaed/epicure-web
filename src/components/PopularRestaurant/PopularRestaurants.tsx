import React from "react"
import Restaurant from "../Restaurant/Restaurant"
import "./PopularRestaurants.css"

const PopularRestaurants = () => {
  const rests = [
    {
      name: "shmoal",
      location: "bear shevaa",
      image: "epicure-web/src/Assets/claro.png"
    },
    {
      name: "pipaya",
      location: "karmeil",
      image: "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png"
    },
    {
      name: "abu shaker",
      location: "deir-el assad",
      image: "../../Assets/claro.png"
    },
    {
      name: "shmoal",
      location: "bear shevaa",
      image: "../../Assets/claro.png"
    },
    {
      name: "pipaya",
      location: "karmeil",
      image: "../../Assets/claro.png"
    },
    {
      name: "abu shaker",
      location: "deir-el assad",
      image: "../../Assets/claro.png"
    }
  ]
  return (
    <div className="mainPopularRestaurantsDiv">
      <label className="mainPopularRestaurantsHeader">
        popular restaurant in epicure:
      </label>
      <div className="PopularRestaurantsCollection">
        {rests.map((restaurant) => (
          <Restaurant
            name={restaurant.name}
            image={restaurant.image}
            location={restaurant.location}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularRestaurants
