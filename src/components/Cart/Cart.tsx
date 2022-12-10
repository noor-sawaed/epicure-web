import React from "react"
import cartLogo from "../../Assets/cart.svg"
import { EmptyCartBigLogo, EmptyCartLabel, MainCartContainer } from "./CartStyles"

const Cart = () => {
  return (
    <MainCartContainer>
      <EmptyCartBigLogo src={cartLogo} alt="EmptyCartLogo" />
      <EmptyCartLabel>Your bag is empty</EmptyCartLabel>
    </MainCartContainer>
  )
}

export default Cart
