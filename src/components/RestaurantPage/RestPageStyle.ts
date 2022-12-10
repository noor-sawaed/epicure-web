import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainRestaurantPageContainer = styled.div`
    border: 1px solid #F2F2F2;
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
export const RestaurantDetails = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1.97px;
    color: #000000;
    display:flex;
    align-items: center;
    gap:8px;
`;


export const MainRestaurantPageImage = styled.img`
width: 100%;
`;

export const RestaurantContent = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px;
    gap: 10px;
`;

export const OpenLogo = styled.img`
    width: 17px;
    height: 17px;
`;

export const DishesContent = styled.div`
    display:flex;
    flex-direction:column;
    gap: 10px;
`;

export const Linkto = styled(Link)`
    text-decoration: none;
    color: black;
`;

