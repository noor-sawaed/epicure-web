import searchLogo from "../../Assets/search.svg"
import { SearchTextBarContainer,SmallSearchLogo,SearchTextInput } from "./SearchDivStyles"
// import "./SearchDiv.css"
const SearchDiv = () => {
  return (
    <SearchTextBarContainer>
        <SmallSearchLogo src={searchLogo} alt="searchlogo" />
        <SearchTextInput
          type="text"
          placeholder="Search for restaurant cuisine, chef"
        />
      </SearchTextBarContainer>
    )
}

export default SearchDiv