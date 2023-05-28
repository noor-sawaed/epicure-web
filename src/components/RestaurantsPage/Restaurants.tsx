// import restaurants from "../../api/restaurants.json"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import React, { useEffect } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import {
  Linkto,
  MainRestaurantsPageContainer,
  MainRestaurantsPageHeader,
  RestaurantImage,
  RestaurantChef,
  RestaurantName,
  RestaurantsCard,
  RestaurantsCollection,
  RestaurantsPageButtonCollection,
  RestaurantTextsDiv
} from "./RestaurantsStyles"
import Tabs from "@mui/material/Tabs"
import moment from "moment"
import axios from "axios"
const Restaurants = () => {
  const [filter, setFilter] = React.useState("all")
  const [filteredRestaurants, setFilteredRestaurants] = React.useState<any>([])
  const [restaurants, setRestaurants] = React.useState<any>([])

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: "get",
          url: "//us-central1-epicure-5a13c.cloudfunctions.net/app/api/restaurants/getRestaurants",
          params: {}
        })
        setRestaurants(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  },[])

  useEffect(() => {
    if (filter === "all") {
      setFilteredRestaurants(restaurants)
    } else if (filter === "new") {
      let newRes = restaurants.sort((res: any, res2: any) => {
        return res2.dateAdded < res.dateAdded ? -1 : 1
      })
      setFilteredRestaurants([newRes[0], newRes[1], newRes[2]])
    } else if (filter === "popular") {
      const fetchNewRestaurants = async ()=> {
        let { data: newRes } = await axios({
          method: "get",
          url: "//us-central1-epicure-5a13c.cloudfunctions.net/app/api/restaurants/getPopularRestaurants",
          params: {}
        })
        setFilteredRestaurants(newRes)
      }
      fetchNewRestaurants();
    } else if (filter === "open") {
      const today = moment().format("dddd") // eslint-disable-next-line
      let newRes = restaurants.filter((res: any) => {
        let time = moment(moment().format("LT"), "hh:mm a")
        const beforeTime = moment(res.workHours[today].open, "hh:mm")
        const afterTime = moment(res.workHours[today].close, "hh:mm")
        if (time.isBetween(beforeTime, afterTime)) {
          return res
        }
        // eslint-disable-next-line
        return
      })
      setFilteredRestaurants(newRes)
    }
  }, [filter,restaurants])

  return (
    <>
      <Header />
      <MainRestaurantsPageContainer>
        <MainRestaurantsPageHeader>Restaurants</MainRestaurantsPageHeader>
        <RestaurantsPageButtonCollection>
          <Box>
            <Tabs
              value={filter}
              onChange={handleChange}
              aria-label="secondary"
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "rgba(222, 146, 0, 0.9)",
                  height: "1.8px"
                }
              }}
              sx={{
                "& button": {
                  margin: "0px",
                  padding: "0 10px",
                  color: "black",
                  fontWeight: "200",
                  height: "30px",
                  minWidth: "auto",
                  minHeight: "unset",
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingBottom: "5px"
                },
                "& button.Mui-selected": { color: "black", fontWeight: "400" },
                "& .MuiTabs-flexContainer": {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                },
                "& .MuiTabs-root": { height: "20px" },
                "& .MuiTabs-scroller": { height: "30px" },
                width: "100%"
              }}
            >
              <Tab value="all" label="All" />
              <Tab value="new" label="New" />
              <Tab value="popular" label="Most Popular" />
              <Tab value="open" label="Open Now" />
            </Tabs>
          </Box>
        </RestaurantsPageButtonCollection>
        <RestaurantsCollection>
          {restaurants && filteredRestaurants.map((currentRestaurant: any) => (
            <Linkto
              to={"restaurant/" + currentRestaurant.id}
              state={{ currentRestaurant }}
            >
              <RestaurantsCard key={currentRestaurant.name}>
                <RestaurantImage src={currentRestaurant.image} />
                <RestaurantTextsDiv>
                  <RestaurantName>{currentRestaurant.name}</RestaurantName>
                  <RestaurantChef>{currentRestaurant.Chef}</RestaurantChef>
                </RestaurantTextsDiv>
              </RestaurantsCard>
            </Linkto>
          ))}
        </RestaurantsCollection>
      </MainRestaurantsPageContainer>
      <Footer />
    </>
  )
}

export default Restaurants
