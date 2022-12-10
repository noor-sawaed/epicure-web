import restaurants from "../../api/restaurants.json"
import Restaurant from "../Restaurant/Restaurant"
import vectorLogo from "../../Assets/Vector.svg"
import {
  BottomPopularAllRestaurantsLink,
  Linkto,
  LinkToAllRestaurants,
  MainPopularRestaurantsDiv,
  MainPopularRestaurantsHeader,
  PopularRestaurantsCollection,
  VectorLogo
} from "./PopularRestaurantsStyles"
const PopularRestaurants = () => {

  return (
    <MainPopularRestaurantsDiv>
      <MainPopularRestaurantsHeader>
        popular restaurant in epicure:
      </MainPopularRestaurantsHeader>
      <PopularRestaurantsCollection>
        {restaurants.map((currentRestaurant) => (
          <Linkto to={"restaurants/restaurant/"+currentRestaurant.id} state={{ currentRestaurant }}>
            <Restaurant
            name={currentRestaurant.name}
            image={currentRestaurant.image}
            location={currentRestaurant.Chef}
          />
          </Linkto>
        ))}
      </PopularRestaurantsCollection>
      <BottomPopularAllRestaurantsLink>
      <Linkto to="restaurants">
        <LinkToAllRestaurants>All Restaurants</LinkToAllRestaurants>
        <VectorLogo
          src={vectorLogo}
          alt="Victor"
        />
        </Linkto>
      </BottomPopularAllRestaurantsLink>
    </MainPopularRestaurantsDiv>
  )
}

export default PopularRestaurants
