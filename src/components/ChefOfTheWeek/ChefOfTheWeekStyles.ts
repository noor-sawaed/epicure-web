import styled from 'styled-components';

export const MainChefOfTheWeekConatainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 16px;
    margin: 20px;
`;

export const MainChefOfTheWeekLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
`;

export const MainChefOfTheWeekImageFrame = styled.div`
    width: 100%;
    height: 262px;
    /* //TODO this is the Chef image for the label of his name */
`;

export const MainChefOfTheWeekNameFrame = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:fit-content;
    background: rgba(255, 255, 255, 0.8);
    bottom: 50px;
`;
export const MainChefOfTheWeekName = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 47px;
    text-align: center;
    letter-spacing: 2.67px;
    color: #000000;
`;


export const MainChefOfTheWeekImage = styled.img`
    width: 100%;
    height: Auto;
    background-color:red;
    /* //TODO this is the Chef image for the label of his name */
`;


export const MainChefOfTheWeekDescription = styled.div`
font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 28px;
    text-align: justify;
    letter-spacing: 1.25px;
    color: #000000;
`;

export const MainChefOfTheWeekDishesHeader = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
    margin-top: 20px;
`;

export const ChefOfTheWeekDishes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    gap: 20px;
    /* padding-right: 20px;   */

`