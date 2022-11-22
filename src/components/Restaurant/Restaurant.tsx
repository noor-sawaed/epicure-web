import {
  MainRestaurantContainer,
  RestaurantImage,
  RestaurantLocationLabel,
  RestaurantNameLabel,
  RestaurantWordsContainer
} from "./RestaurantsStyles"
const Restaurant = (props: {
  name: string
  image: string
  location: string
}) => {
  return (
    <MainRestaurantContainer>
      <RestaurantImage alt="" src={props.image} />
      <RestaurantWordsContainer>
        <RestaurantNameLabel>{props.name}</RestaurantNameLabel>
        <RestaurantLocationLabel>{props.location}</RestaurantLocationLabel>
      </RestaurantWordsContainer>
    </MainRestaurantContainer>
  )
}

export default Restaurant
