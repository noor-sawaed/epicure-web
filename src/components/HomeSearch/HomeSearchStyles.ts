import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainHomeSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 273px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    background-image: url("https://github.com/noor-sawaed/epicure-web/blob/99159873c30b15219780a5941e5eca872263f44c/src/Assets/hompePage_img.png?raw=true");
    background-size: cover;
    background-position:75% 25%  ;

`;

export const HomeSearchContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    padding: 10px;
    letter-spacing: 1.97px;
    height: 144px;
    background-color: rgba(255, 255, 255, 0.88);
`;
export const HomeSearchHeader = styled.label`
`;

export const SearchResults = styled.div`
    background-color: rgba(255, 255, 255, 0.95);
    width:300px ;
    height: 150px;
    overflow-y: auto;
    overflow-x:hidden;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
    padding:10px;
    top: 155px;
    position: relative;
    overflow-y: auto;
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