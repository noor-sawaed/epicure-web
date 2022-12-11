import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainSearchBarContainer = styled.div`
    top: 0;
`
export const TopSearchHeader = styled.div`
    display: flex;
    margin: 3% 2%;
    align-items: center;
`
export const searchTextHeader = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

export const SearchLogo = styled.img`
    width: 32px;
    height: 32px;
`

export const SearchTextTitle = styled.label`
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

export const SearchResults = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    overflow-y: auto;
    overflow-x:hidden;
`
export const SearchLabel = styled.h3`
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.29px;
    color: #000000;
    margin-left: 10vw;
`
export const SearchLabelResults = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1.29px;
    margin-left: 10vw;
`
export const LinkTo = styled(Link)`
    color: #000000;
    text-decoration: none;
`;