import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainPopularRestaurantsDiv = styled.div`
display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-top:20px;
`;
export const MainPopularRestaurantsHeader = styled.label`
    display: flex;
    justify-content: center;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

export const PopularRestaurantsCollection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    padding-right: 20px;    
`;

export const LinkToAllRestaurants = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    align-items: center;
    text-align: right;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: #000000;
`;

export const BottomPopularAllRestaurantsLink = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    margin:20px;
`;

export const VectorLogo = styled.img`
    width: 20px;
    height: 20px;
    align-self: center;
    padding-left: 5px;
`;

export const Linkto = styled(Link)`
    text-decoration: none;
    color: #000000;
`;


