import React from "react"
import {
  AboutUsDescription,
  AboutUsGetAppImage,
  AboutUsHeaderTitle,
  AboutUsImageTitle,
  MainAboutUsContainer,
  MainAboutUsGetAppContainer
} from "./AboutUsStyles"

export const AboutUs = () => {
  return (
    <MainAboutUsContainer>
      <AboutUsImageTitle src="https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/Logo-Title.svg?raw=true" />
      <MainAboutUsGetAppContainer>
        <AboutUsGetAppImage src="https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/AppStore.svg?raw=true" />
        <AboutUsGetAppImage src="https://github.com/noor-sawaed/epicure-web/blob/main/src/Assets/GooglePlay.svg?raw=true" />
      </MainAboutUsGetAppContainer>
      <AboutUsHeaderTitle>About US:</AboutUsHeaderTitle>
      <AboutUsDescription>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        architecto iure cumque doloremque minima fuga optio, atque qui quaerat!
        Dolor est odio necessitatibus recusandae. Ipsam porro animi eveniet
        reiciendis dolor.
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Facere pariatur deleniti est voluptatum voluptates eius
        necessitatibus architecto maiores omnis ab deserunt amet, consectetur
        itaque, veritatis cum! In id dolorem soluta!
      </AboutUsDescription>
    </MainAboutUsContainer>
  )
}
