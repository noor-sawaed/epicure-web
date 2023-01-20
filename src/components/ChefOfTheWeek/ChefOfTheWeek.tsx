import axios from "axios"
import React, { useEffect, useState } from "react"
import ChefDish from "../ChefDish/ChefDish"
import {
  ChefOfTheWeekDishes,
  MainChefOfTheWeekConatainer,
  MainChefOfTheWeekDescription,
  MainChefOfTheWeekDishesHeader,
  MainChefOfTheWeekImage,
  MainChefOfTheWeekImageFrame,
  MainChefOfTheWeekLabel,
  MainChefOfTheWeekName,
  MainChefOfTheWeekNameFrame
} from "./ChefOfTheWeekStyles"

const ChefOfTheWeek = () => {
  const [dishess, setDishess] = useState<any>([])
  const dishes = [
    {
      name: "hot BBQ",
      image:
        "https://media.timeout.com/images/105545433/1372/1029/image.jpg"
    },
    {
      name: "MilkShake",
      image:
        "https://media.timeout.com/images/105610317/1372/1029/image.jpg"
    },
    {
      name: "Fish",
      image:
        "https://media.timeout.com/images/105325315/1372/1029/image.jpg"
    },
    
  ]
  useEffect(() => {
    const fetchdishes = async () => {
      try {
        const dataa = {
          restaurantId:1,
        };
        let { data: newRes } = await axios({
          method: "get",
          url: "//localhost:8080/api/dishes/getDishesByRestaurantID",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify(dataa)
        })
        setDishess(newRes)
      } catch (error) {
      console.error(error);
      }

    }

    fetchdishes()
  }, [])

  //!it sould use a useEffect that fetches the chef of the week from the database and reRenders the component
  //TODO add fetch for the ChefOfTheWeek
  return (
    <MainChefOfTheWeekConatainer>
      <MainChefOfTheWeekLabel>Chef of the week:</MainChefOfTheWeekLabel>
      <MainChefOfTheWeekImageFrame>
        <MainChefOfTheWeekImage src="https://www.ecpi.edu/sites/default/files/Aug%2022%20CIV.png" />
        <MainChefOfTheWeekNameFrame>
          <MainChefOfTheWeekName>Yossi Shitrit</MainChefOfTheWeekName>
        </MainChefOfTheWeekNameFrame>
      </MainChefOfTheWeekImageFrame>
      <MainChefOfTheWeekDescription>
        Chef Yossi Shitrit has been living and breathing his culinary dreams for
        more than two decades, including running the kitchen in his first
        restaurant, the fondly-remembered Violet, located in Moshav Udim.
        Shitrit's creativity and culinary acumen born of long experience are
        expressed in the every detail of each and every dish.
      </MainChefOfTheWeekDescription>
      <MainChefOfTheWeekDishesHeader>
        Chef of the week:
      </MainChefOfTheWeekDishesHeader>
      <ChefOfTheWeekDishes>
        {dishes.map((cotwd: any) => (
          <ChefDish name={cotwd.name} image={cotwd.image} />
        ))}
      </ChefOfTheWeekDishes>
    </MainChefOfTheWeekConatainer>
  )
}

export default ChefOfTheWeek
