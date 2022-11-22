import React from "react"
import {
  MainDishContainer,
  DishImage,
  DishWordsContainer,
  DishNameLabel,
  DishDescriptionLabel,
  DishPriceLabel,
  DishSignatureImage
} from "./DishStyles"

const Dish = (props: {
  name: string
  description: string
  image: string
  signatureLogo: string
  price: number
}) => {
  return (
    <MainDishContainer>
      <DishImage alt="" src={props.image} />
      <DishWordsContainer>
        <DishNameLabel>{props.name}</DishNameLabel>
        <DishDescriptionLabel>{props.description}</DishDescriptionLabel>
        <DishSignatureImage src={props.signatureLogo} />
        <DishPriceLabel>${props.price}</DishPriceLabel>
      </DishWordsContainer>
    </MainDishContainer>
  )
}

export default Dish;
