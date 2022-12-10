import Divider from '@mui/material/Divider';
import styled from 'styled-components';

export const DishInRestaurantPageMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: 20px 0px 0px 20px; */
    /* width: 245px; */
`;

export const DishInRestaurantImage = styled.img`
    width: 100%;
    /* height: 150px; */
`
export const DishInRestaurantWordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:16px;
    gap: 10px;
    background: #F9F4EA;
`;
export const DishInRestaurantNameLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    align-items:center;
`;
export const DishInRestaurantDescriptionLabel = styled.label`
    font-family: 'Helvetica Neue';
    align-items:center;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
`;
export const DishInRestaurantPriceLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 1.97px;
`;

export const DishInRestaurantDivider = styled(Divider)`
    width:80%;
    color: #979797;
    
`;

export const DishInRestaurantDividerContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.97px;
    align-items: center;
`;