import vectorLogo from "../../Assets/Vector.svg"
import Dish from "../Dish/Dish"
import {
  MainSignatureDishDiv,
  MainSignatureDishHeader,
  SignatureDishCollection,
  BottomSignatureDishesLink,
  LinkToAllDishes,
  VectorLogo,
  Linkto
} from "./SignatureDishStyles"
import ListofDishes from "../../api/dishes.json"
import { useEffect, useState } from "react"
import axios from "axios"
const SignatureDish = () => {
  const [ListofDishes, setListofDishes] = useState<any>([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: "get",
          url: "//us-central1-epicure-5a13c.cloudfunctions.net/app/api/dishes/getDishes",
          params: {}
        })
        setListofDishes(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  },[])
  
  return (
    <MainSignatureDishDiv>
      <MainSignatureDishHeader>Signature Dish Of:</MainSignatureDishHeader>
      <SignatureDishCollection>
        {ListofDishes.map((d:any) => (
          <Dish
            name={d.name}
            image={d.image}
            description={d.description}
            signatureLogo={d.signatureLogo}
            price={d.price}
          />
        ))}
      </SignatureDishCollection>
      <BottomSignatureDishesLink>
        <LinkToAllDishes>
        <Linkto to="restaurants">
          All Restaurants
          <VectorLogo
            src={vectorLogo}
            alt="Victor"
            // onClick={}
          />
          </Linkto>
        </LinkToAllDishes>
      </BottomSignatureDishesLink>
    </MainSignatureDishDiv>
  )
}

export default SignatureDish
