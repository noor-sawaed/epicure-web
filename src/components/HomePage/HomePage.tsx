import { MainHomePageContainer } from "./HomePageStyles"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import HomeSearch from "../HomeSearch/HomeSearch"
import PopularRestaurants from "../PopularRestaurant/PopularRestaurants"
import SignatureDish from "../SignatureDish/SignatureDish"
import SignatureIcons from "../SignatureIcons/SignatureIcons"
import { AboutUs } from "../AboutUs/AboutUs"
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek"
const HomePage = () => {
  return (
    <MainHomePageContainer>
      <Header />
      <HomeSearch />
      <PopularRestaurants />
      <SignatureDish />
      <SignatureIcons />
      <ChefOfTheWeek />
      <AboutUs />
      <Footer />
    </MainHomePageContainer>
  )
}

export default HomePage
