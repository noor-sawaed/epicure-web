import React from "react"
import { useLocation } from "react-router-dom"
import { DishSignatureImage } from "../Dish/DishStyles"
import {
  DishInRestaurantDescriptionLabel,
  DishInRestaurantDivider,
  DishInRestaurantDividerContainer,
  DishInRestaurantImage,
  DishInRestaurantNameLabel,
  DishInRestaurantPageMainContainer,
  DishInRestaurantPriceLabel,
  DishInRestaurantWordsContainer
} from "./DishInRestaurantStyles"

const DishInRestaurantPage = (props: any) => {
  return (
    <DishInRestaurantPageMainContainer>
      <DishInRestaurantImage alt="" src={props.image} />
      <DishInRestaurantWordsContainer>
        <DishInRestaurantNameLabel>{props.name}</DishInRestaurantNameLabel>
        <DishInRestaurantDescriptionLabel>
          {props.description}
        </DishInRestaurantDescriptionLabel>
        <DishInRestaurantDividerContainer>
          <DishInRestaurantPriceLabel>
            ${props.price}
          </DishInRestaurantPriceLabel>
          <DishInRestaurantDivider variant="middle"/>
        </DishInRestaurantDividerContainer>
      </DishInRestaurantWordsContainer>
    </DishInRestaurantPageMainContainer>
  )
}

export default DishInRestaurantPage
