import XLogo from "../../Assets/x.svg"
import SearchDiv from "../SearchDiv/SearchDiv"
import {
  MainSearchBarContainer,
  TopSearchHeader,
  SearchLogo,
  SearchTextTitle,
  SearchResults,
  SearchLabelResults,
  SearchLabel
} from "./SearchBarStyles"
const SearchBar = (props: any) => {
  return (
    <MainSearchBarContainer>
      <TopSearchHeader>
        <SearchLogo src={XLogo} alt="Xlogo" onClick={props.closeSearch} />
        <SearchTextTitle htmlFor="search">Search</SearchTextTitle>
      </TopSearchHeader>
      <SearchDiv />
      <SearchResults>
        {/* //TODO must  add results for search*/}
        <SearchLabel>Resturants:</SearchLabel>
        {/* <Link to="/"></Link> */}
        <SearchLabelResults htmlFor="">Tiger lau</SearchLabelResults>
        <SearchLabel>Dishes:</SearchLabel>
        <SearchLabelResults htmlFor="">Pizza</SearchLabelResults>
        <SearchLabelResults htmlFor="">hazia pato'n</SearchLabelResults>
        <SearchLabel>Cusine:</SearchLabel>
        <SearchLabelResults htmlFor="">Thai</SearchLabelResults>
      </SearchResults>
    </MainSearchBarContainer>
  )
}

export default SearchBar
