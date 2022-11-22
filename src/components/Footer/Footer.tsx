import React from 'react'
import { FooterContentButton, MainFooterContainer } from "./FooterStyles"
const Footer = () => {
  return (
    <MainFooterContainer>
      <FooterContentButton>Contact Us</FooterContentButton>
      <FooterContentButton>Term of Use</FooterContentButton>
      <FooterContentButton>Privacy Policy</FooterContentButton>
    </MainFooterContainer>
  )
}

export default Footer