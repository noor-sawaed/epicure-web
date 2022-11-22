import React from "react"
import {
  MainSignatureIconImage,
  MainSignatureIconsContainer,
  MainSignatureIconsHeader,
  MainSignatureIconTypeLabel
} from "./SignatureIconsStyles"
import spicy from "../../Assets/Spicy.svg"
import Vegan from "../../Assets/Vegan.svg"
import Vegitarian from "../../Assets/Vegitarian.svg"
const SignatureIcons = () => {
  return (
    <MainSignatureIconsContainer>
      <MainSignatureIconsHeader>Signature Dish Of:</MainSignatureIconsHeader>
      <MainSignatureIconImage src={spicy} />
      <MainSignatureIconTypeLabel>Spicy</MainSignatureIconTypeLabel>
      <MainSignatureIconImage src={Vegitarian} />
      <MainSignatureIconTypeLabel>Vegitarian</MainSignatureIconTypeLabel>
      <MainSignatureIconImage src={Vegan} />
      <MainSignatureIconTypeLabel>Vegan</MainSignatureIconTypeLabel>
    </MainSignatureIconsContainer>
  )
}

export default SignatureIcons
