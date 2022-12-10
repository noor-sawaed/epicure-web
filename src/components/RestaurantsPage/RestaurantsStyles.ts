import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainRestaurantsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin:20px;
`;

export const MainRestaurantsPageHeader = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
`;

export const RestaurantsPageButtonCollection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:20px;
`;

export const RestaurantsButton = styled.button`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    border:none;
    background-color:transparent;
`;
export const RestaurantsButtonActive = styled.button`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
    border:none;
    border-bottom:1px solid rgba(222, 146, 0, 0.9);
    background-color:transparent;
    width:fit-content;
`;

export const RestaurantsCollection = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:30px;
`;

export const RestaurantsCard = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:7px;
    width:auto;
    background-color:#F9F4EA;
`;

export const RestaurantImage = styled.img`

`;

export const RestaurantTextsDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    gap:10px;
    width:auto;
    background-color:#F9F4EA;
    margin:10px 0px 10px 20px;
    /* height: 290.38px; */
`;

export const RestaurantName = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;
`;
export const RestaurantChef = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1.97px;
    color: #000000;
`;


export const Linkto = styled(Link)`
    text-decoration: none;
`;
