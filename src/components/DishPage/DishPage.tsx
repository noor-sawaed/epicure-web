import {
  SelectContainer,
  DishDescriptionContainer,
  DishHeaderLabelContainer,
  ExitLogo,
  ExitLogoContainer,
  MainDishImage,
  MainDishPageContainer,
  MainDishTextContainer,
  SmallHeaderContainer,
  OptionsList,
  OptLabel,
  LinkTo,
  OptInput
} from "./DishPageStyles"
import XLogo from "../../Assets/x.svg"
import { useLocation } from "react-router-dom"
const DishPage = () => {
  const mainRestaurant = useLocation()
  const { dish }: any = mainRestaurant.state
  const mainDish = dish

  const TosfotApi = [
    {
      dishType: "Meat",
      inputType: "radio",
      tasName: "sides",
      displayText: "Choose a side",
      Options: [
        { optName: "whiteBread", optId: 1 },
        { optName: "Spicy Rice", optId: 2 },
        { optName: "Banana Bread", optId: 3 }
      ]
    },
    {
      dishType: "Salads",
      inputType: "checkbox",
      tasName: "Toppings",
      displayText: "Choose a Topping",
      Options: [
        { optName: "wee", optId: 1 },
        { optName: "foo Rice", optId: 2 },
        { optName: "Banana ", optId: 3 }
      ]
    }
  ]

  

  return (
    <MainDishPageContainer>
      <ExitLogoContainer>
        <LinkTo to="/">
          <ExitLogo src={XLogo} alt="Xlogo" />
        </LinkTo>
      </ExitLogoContainer>
      <MainDishImage src={mainDish.image} alt="dish image" />
      <MainDishTextContainer>
        <DishHeaderLabelContainer>{mainDish.name}</DishHeaderLabelContainer>
        <DishDescriptionContainer>
          {mainDish.description}
        </DishDescriptionContainer>
        <SelectContainer>
          <SmallHeaderContainer>Choose a side</SmallHeaderContainer>
          {TosfotApi.map((tosefet) => {
            return <OptionsList>
              <OptInput
                type={tosefet.inputType}
                name="side"
                value="Spicy Rice"
              />
              <OptLabel>haha</OptLabel> 
            </OptionsList>
          })}
        </SelectContainer>
      </MainDishTextContainer>
    </MainDishPageContainer>
  )
}

export default DishPage
