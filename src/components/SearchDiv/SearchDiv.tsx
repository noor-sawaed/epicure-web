import searchLogo from "../../Assets/search.svg"
import { SearchTextBarContainer,SmallSearchLogo,SearchTextInput } from "./SearchDivStyles"
const SearchDiv = (props:any) => {

  
  return (
    <SearchTextBarContainer>
        <SmallSearchLogo src={searchLogo} alt="searchlogo" />
        <SearchTextInput
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          value={props.searchText}
          onChange={(e)=> {props.setsearch(e.currentTarget.value)}}
        />
      </SearchTextBarContainer>
    )
}

export default SearchDiv