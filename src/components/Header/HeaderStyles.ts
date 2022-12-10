import { Link } from "react-router-dom"
import styled from "styled-components";

export const MainHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 46px;
    justify-content: space-between;
    margin: 1vh 10px;
`

export const LeftHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`

export const HeaderLogo = styled.img`
    width: 32px;
    height: 32px;
    padding-right: 10px;
`;

export const Linkto = styled(Link)`
    display: block;
    margin-left:auto;
    margin-right:auto;
    position: absolute;
`;



export const HeaderBigLogo = styled.img`
    
    width: 40px;
    height: 40px;
`

export const MiddleHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
`
export const RightHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`