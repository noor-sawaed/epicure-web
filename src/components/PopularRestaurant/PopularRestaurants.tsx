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
import { useEffect, useState } from "react"
import axios from "axios"
const PopularRestaurants = () => {
  const [restaurants, setRestaurants] = useState<any>([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: "get",
          url: "//us-central1-epicure-5a13c.cloudfunctions.net/app/api/restaurants/getPopularRestaurants",
          params: {}
        })
        setRestaurants(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  },[])

  return (
    <MainPopularRestaurantsDiv>
      <MainPopularRestaurantsHeader>
        popular restaurant in epicure:
      </MainPopularRestaurantsHeader>
      <PopularRestaurantsCollection>
        {restaurants.map((currentRestaurant:any) => (
          <Linkto to={"restaurants/restaurant/"+ currentRestaurant.id} state={{ currentRestaurant }}>
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
