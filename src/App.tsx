import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainContainer } from "./AppStyle"
import DishPage from "./components/DishPage/DishPage"
import Header from "./components/Header/Header"
import HomePage from "./components/HomePage/HomePage"
import RestaurantPage from "./components/RestaurantPage/RestaurantPage"
import Restaurants from "./components/RestaurantsPage/Restaurants"

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="restaurants/" element={<Restaurants />} />
            <Route path="chefs/" element={<Header />} />
            <Route path="restaurants/restaurant/:id" element={<RestaurantPage />} />
            <Route path="restaurants/restaurant/:id/dish/:did" element={<DishPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContainer>
  )
}

export default App
