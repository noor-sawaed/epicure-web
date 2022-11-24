import React from "react"
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
  const dishess = [
    {
      name: "hot BBQ",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "MilkShake",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "I dont Know",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "hot BBQ",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "MilkShake",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    },
    {
      name: "I dont Know",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true"
    }
  ]
  //!it sould use a useEffect that fetches the chef of the week from the database and reRenders the component
  //TODO add fetch for the ChefOfTheWeek
  return (
    <MainChefOfTheWeekConatainer>
      <MainChefOfTheWeekLabel>Chef of the week:</MainChefOfTheWeekLabel>
      
      <MainChefOfTheWeekImageFrame>
      <MainChefOfTheWeekImage src="https://www.ecpi.edu/sites/default/files/Aug%2022%20CIV.png"/>
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
        {dishess.map((cotwd) => (
          <ChefDish name={cotwd.name} image={cotwd.image} />
        ))}
      </ChefOfTheWeekDishes>
    </MainChefOfTheWeekConatainer>
  )
}

export default ChefOfTheWeek
