import React from "react"
import "./Restaurant.css"
const Restaurant = (props: {
  name: string
  image: string
  location: string
}) => {
  return (
    <div className="RestaurantContainer">
      <img alt="" src={props.image} className="RestaurantImage" />
      <div className="RestaurantWords">
        <label className="RestaurantName">{props.name}</label>
        <label className="RestaurantLocation">{props.location}</label>
      </div>
    </div>
  )
}

export default Restaurant
