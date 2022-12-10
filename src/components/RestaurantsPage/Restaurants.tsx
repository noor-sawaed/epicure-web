import restaurants from "../../api/restaurants.json"
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

const Restaurants = () => {
  const [filter, setFilter] = React.useState("all")
  const [filteredRestaurants, setFilteredRestaurants] = React.useState<any>([])
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setFilter(newValue)
  }

  useEffect(() => {
    if (filter === "all") {
      setFilteredRestaurants(restaurants)
    } else if (filter === "new") {
      let newRes = restaurants.sort((res: any, res2) => {
        return res2.dateAdded < res.dateAdded ? -1 : 1
      })
      setFilteredRestaurants([newRes[0], newRes[1], newRes[2]])
    } else if (filter === "popular") {
      let newRes = restaurants.sort((res: any, res2) => {
        return res2.visits < res.visits ? -1 : 1
      })
      setFilteredRestaurants(newRes)
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
  },[filter])

  // const restaurants = [
  //   {
  //     id: 1,
  //     name: "1 claro",
  //     image:
  //       "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
  //     Chef: "moshe yakov",
  //     dateAdded: 975771728000,
  //     visits: 10,
  //     workHours: {
  //       Sunday: { open: "08:00", close: "19:30" },
  //       Monday: { open: "09:00", close: "20:30" },
  //       Tuesday: { open: "08:00", close: "19:30" },
  //       Wednesday: { open: "08:00", close: "19:30" },
  //       Thursday: { open: "08:00", close: "19:30" },
  //       Friday: { open: "08:00", close: "19:30" },
  //       Saturday: { open: "08:00", close: "19:30" }
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: "2 oi come eat",
  //     image:
  //       "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
  //     Chef: "moshe yakov",
  //     dateAdded: 1291304528000,
  //     visits: 129,
  //     workHours: {
  //       Sunday: { open: "08:00", close: "19:30" },
  //       Monday: { open: "09:00", close: "15:30" },
  //       Tuesday: { open: "08:00", close: "19:30" },
  //       Wednesday: { open: "20:00", close: "00:00" },
  //       Thursday: { open: "08:00", close: "19:30" },
  //       Friday: { open: "08:00", close: "19:30" },
  //       Saturday: { open: "08:00", close: "19:30" }
  //     }
  //   },
  //   {
  //     id: 3,
  //     name: "3 fishhhh",
  //     image:
  //       "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
  //     Chef: "moshe yakov",
  //     dateAdded: 1606923728000,
  //     visits: 44,
  //     workHours: {
  //       Sunday: { open: "08:00", close: "19:30" },
  //       Monday: { open: "09:00", close: "15:30" },
  //       Tuesday: { open: "08:00", close: "19:30" },
  //       Wednesday: { open: "19:00", close: "19:30" },
  //       Thursday: { open: "08:00", close: "19:30" },
  //       Friday: { open: "08:00", close: "19:30" },
  //       Saturday: { open: "08:00", close: "19:30" }
  //     }
  //   },
  //   {
  //     id: 4,
  //     name: "4 lock ",
  //     image:
  //       "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
  //     Chef: "moshe yakov",
  //     dateAdded: 1133538128000,
  //     visits: 2,
  //     workHours: {
  //       Sunday: { open: "08:00", close: "19:30" },
  //       Monday: { open: "09:00", close: "19:50" },
  //       Tuesday: { open: "08:00", close: "19:30" },
  //       Wednesday: { open: "19:00", close: "19:30" },
  //       Thursday: { open: "08:00", close: "19:30" },
  //       Friday: { open: "08:00", close: "19:30" },
  //       Saturday: { open: "08:00", close: "19:30" }
  //     }
  //   }
  // ]

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
          {filteredRestaurants.map((currentRestaurant: any) => (
          <Linkto to={"restaurant/" + currentRestaurant.id} state={{ currentRestaurant }}>
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
