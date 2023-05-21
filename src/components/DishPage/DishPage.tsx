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
  OptInput,
  OpSingle,
  OptQuantityBtn,
  AddToBagBtn
} from "./DishPageStyles"
import XLogo from "../../Assets/x.svg"
import { useLocation } from "react-router-dom"
import TosfotApi from "./../../api/mealExtras.json"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "../Footer/Footer"
const DishPage = () => {
  const [loadingExtras, setloadingExtras] = useState<Boolean>(false)
  const [MainDish, setMainDish] = useState<any>({})
  const [MainExtras, setMainExtras] = useState<any[]>()
  const [quantityNumber, setQuantityNumber] = useState(1)
  const mainRestaurant = useLocation()
  const { dish }: any = mainRestaurant.state
  const mainDish = dish

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: "get",
          url: "//localhost:8080/api/dishes/getDish",
          params: { dishID: mainDish.id }
        })
        setMainDish(response) //!from database
        const me = TosfotApi.filter(
          (tosefet: any) => tosefet.dishType === MainDish.dishType
        );
        if (me.length > 0) {
          setMainExtras(me[0].extras);
        }
        setloadingExtras(true);
        
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    try {
        const me = TosfotApi.filter((tosefet: any) => tosefet.dishType === MainDish.dishType)
        if (me.length > 0) {
          setMainExtras(me[0].extras);
        }
        setloadingExtras(true);
    } catch (error) {
      console.log(error)
    }
  }, [MainDish])

  const removeOne= ()=> { 
    if(quantityNumber>1)
      setQuantityNumber(quantityNumber-1)
  }

  const addOne= ()=> { 
    setQuantityNumber(quantityNumber+1)
  }

  // console.log("MainDish:", MainDish);
  // console.log("MainExtras:", MainExtras);

  return (
    <MainDishPageContainer>
      <ExitLogoContainer>
        <LinkTo to="/">
          <ExitLogo src={XLogo} alt="Xlogo" />
        </LinkTo>
      </ExitLogoContainer>
      <MainDishImage src={MainDish && MainDish.image} alt="dish image" />
      <MainDishTextContainer>
        <DishHeaderLabelContainer>
          {MainDish && MainDish.name}
        </DishHeaderLabelContainer>
        <DishDescriptionContainer>
          {MainDish && MainDish.description}
        </DishDescriptionContainer>

        <SelectContainer>
          {(loadingExtras && MainExtras && MainExtras.length > 0) ?(
            MainExtras.map((tosefet: any) => {
              return (
                <>
                  <OptionsList>
                    <SmallHeaderContainer>
                      {tosefet.displayText}
                    </SmallHeaderContainer>

                    {tosefet.Options.map((option: any) => {
                      return(
                      <OpSingle>
                        <OptInput
                          type={tosefet.inputType}
                          name={tosefet.tasName}
                          value={option.optId}
                        />
                        <OptLabel>{option.optName}</OptLabel>
                       </OpSingle>
                       )
                    })}

                  </OptionsList>
                </>
              )
            })
              
           ) :<div>loading...</div>}
            <OptionsList>
              <SmallHeaderContainer>
                Quantity
              </SmallHeaderContainer>
              <OpSingle>
                  <OptQuantityBtn
                    name="quantity"
                    value="-"
                    onClick={removeOne}
                  >-</OptQuantityBtn>
                  <OptLabel> {`${quantityNumber}`} </OptLabel>
                  <OptQuantityBtn
                    name="quantity"
                    value="+"
                    onClick={addOne}
                  >+</OptQuantityBtn>
                </OpSingle>
            </OptionsList>
            <AddToBagBtn>Add To Bag</AddToBagBtn>
        </SelectContainer>    
      </MainDishTextContainer>
      <Footer/>
    </MainDishPageContainer>
  )
}

export default DishPage
