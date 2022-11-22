import SignatureLogo from "../../Assets/Spicy.svg"
import vectorLogo from "../../Assets/Vector.svg"
import Dish from "../Dish/Dish"
import {
  MainSignatureDishDiv,
  MainSignatureDishHeader,
  SignatureDishCollection,
  BottomSignatureDishesLink,
  LinkToAllDishes,
  VectorLogo
} from "./SignatureDishStyles"

const SignatureDish = () => {
  const ListofDishes = [
    {
      name: "shmoal",
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
      signatureLogo:
        "https://github.com/noor-sawaed/epicure-web/blob/1a652b61b3d4e61f0119a94d577fc23b141a5097/src/Assets/logo.svg?raw=true",
      price: 88
    },
    {
      name: "shmoal",
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
      signatureLogo:
        "https://github.com/noor-sawaed/epicure-web/blob/1a652b61b3d4e61f0119a94d577fc23b141a5097/src/Assets/logo.svg?raw=true",
      price: 88
    },
    {
      name: "shmoal",
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
      signatureLogo:
        "https://github.com/noor-sawaed/epicure-web/blob/1a652b61b3d4e61f0119a94d577fc23b141a5097/src/Assets/logo.svg?raw=true",
      price: 88
    },
    {
      name: "shmoal",
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
      signatureLogo:
        "https://github.com/noor-sawaed/epicure-web/blob/1a652b61b3d4e61f0119a94d577fc23b141a5097/src/Assets/logo.svg?raw=true",
      price: 88
    },
    {
      name: "shmoal",
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      image:
        "https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/claro.png?raw=true",
      signatureLogo:
        "https://github.com/noor-sawaed/epicure-web/blob/1a652b61b3d4e61f0119a94d577fc23b141a5097/src/Assets/logo.svg?raw=true",
      price: 88
    }
  ]

  return (
    <MainSignatureDishDiv>
      <MainSignatureDishHeader>Signature Dish Of:</MainSignatureDishHeader>
      <SignatureDishCollection>
        {ListofDishes.map((d) => (
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
          All Dishes
          <VectorLogo
            src={vectorLogo}
            alt="Victor"
            // onClick={}
          />
        </LinkToAllDishes>
      </BottomSignatureDishesLink>
    </MainSignatureDishDiv>
  )
}

export default SignatureDish
