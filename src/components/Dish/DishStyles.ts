import styled from 'styled-components';

export const MainDishContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 0px 20px;
    width: 245px;
`;

export const DishWordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:16px;
    gap: 10px;
    background: #F9F4EA;
`;
export const DishImage = styled.img`
    width: 245px;
    height: 150px;
`
export const DishNameLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    align-items:center;
`;
export const DishDescriptionLabel = styled.label`
    font-family: 'Helvetica Neue';
    align-items:center;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
`;
export const DishPriceLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 1.97px;
`;

export const DishSignatureImage = styled.img`
    width: 30px;
    height: 24px;
`;