import { MainChefDishContainer, ChefDishImage, ChefDishWordsContainer, ChefDishNameLabel } from './ChefDishStyles'
// !Change the props type to an object 
const ChefDish = (props:any) => {
  return (
    <MainChefDishContainer>
      <ChefDishImage alt="" src={props.image} />
      <ChefDishWordsContainer>
        <ChefDishNameLabel>{props.name}</ChefDishNameLabel>
      </ChefDishWordsContainer>
    </MainChefDishContainer>
  )
}

export default ChefDish