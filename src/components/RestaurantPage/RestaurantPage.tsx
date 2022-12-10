import allDishes from "../../api/dishes.json"
import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import {
  DishesContent,
  Linkto,
  MainRestaurantPageContainer,
  MainRestaurantPageImage,
  OpenLogo,
  RestaurantContent,
  RestaurantDetails,
  RestaurantName
} from "./RestPageStyle"
import TimeLogo from "../../Assets/Time.svg"
import { Box, Tabs, Tab } from "@mui/material"
import DishInRestaurantPage from "../DishInRestaurantPage/DishInRestaurantPage"
import moment from "moment"

const RestaurantPage = () => {
  const mainRestaurant = useLocation()
  const { currentRestaurant }: any = mainRestaurant.state
  const restaurant = currentRestaurant
  const [dishFilter, setDishFilter] = React.useState<string>("Breakfast")
  const [showDish, setShowDish] = React.useState<any>([])
  

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setDishFilter(newValue)
  }

  const openCloseState = () => {
    const today = moment().format("dddd")
    let time = moment(moment().format("LT"), "hh:mm a")
    const beforeTime = moment(restaurant.workHours[today].open, "hh:mm")
    const afterTime = moment(restaurant.workHours[today].close, "hh:mm")
    if (time.isBetween(beforeTime, afterTime)) {
      return true
    }

    return false
  }

  useEffect(() => {
    if (dishFilter === "Breakfast") {
      setShowDish(
        allDishes.map((d: any) => {
          if (d.type === "Breakfast") return d
        })
      )
    } else if (dishFilter === "Lunch") {
      setShowDish(
        allDishes.map((d: any) => {
          if (d.type === "Lunch") return d
        })
      )
    } else if (dishFilter === "Dinner") {
      setShowDish(
        allDishes.map((d: any) => {
          if (d.type === "Dinner") return d
        })
      )
    }
  }, [dishFilter])

  useEffect(() => {
    openCloseState()
  }, [])

  return (
    <>
      <Header />
      <MainRestaurantPageContainer>
        <MainRestaurantPageImage src={restaurant.image} alt="" />
        <RestaurantContent>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantDetails>{restaurant.Chef}</RestaurantDetails>
          <RestaurantDetails>
            <OpenLogo src={TimeLogo} />{" "}
            {openCloseState() ? "Open Now" : "Closed"}
          </RestaurantDetails>
          <Box>
            <Tabs
              value={dishFilter}
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
                "& button.Mui-selected": {
                  color: "black",
                  fontWeight: "400"
                },
                "& .MuiTabs-flexContainer": {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "10px"
                },
                "& .MuiTabs-root": { height: "20px" },
                "& .MuiTabs-scroller": { height: "30px" },
                width: "100%"
              }}
            >
              <Tab value="Breakfast" label="Breakfast" />
              <Tab value="Lunch" label="Lunch" />
              <Tab value="Dinner" label="Dinner" />
            </Tabs>
          </Box>
          <DishesContent>
            {showDish.map((dish: any) =>
              dish?.type === dishFilter ? (
                <Linkto
                  to={
                    "/restaurants/restaurant/" +
                    restaurant.id +
                    "/dish/" +
                    dish.id
                  }
                  state={{ dish }}
                >
                  <DishInRestaurantPage
                    key={dish.id}
                    name={dish?.name}
                    image={dish?.image}
                    description={dish?.description}
                    price={dish?.price}
                    DishId={dish?.id}
                  />
                </Linkto>
              ) : null
            )}
          </DishesContent>
        </RestaurantContent>
      </MainRestaurantPageContainer>
      <Footer />
    </>
  )
}

export default RestaurantPage
