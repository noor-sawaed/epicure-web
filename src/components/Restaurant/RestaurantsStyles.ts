import styled from 'styled-components';

export const MainRestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 0px 20px;
`;

export const RestaurantWordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:16px;
    gap: 10px;
    background: #F9F4EA;
`;
export const RestaurantImage = styled.img`
    width: 245px;
    height: 150px;
`
export const RestaurantNameLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    align-items:center;
`;
export const RestaurantLocationLabel = styled.label`
    font-family: 'Helvetica Neue';
    align-items:center;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
`;

