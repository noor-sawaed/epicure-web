import { FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainDishPageContainer = styled.div`

`;

export const ExitLogoContainer = styled.div`
    width: 100%;
    height:46px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
`;


export const ExitLogo = styled.img`
    width: 32px;
    height: 32px;
    padding: 10px;
`;

export const MainDishImage = styled.img`
    width:100%;
    
`;

export const DishHeaderLabelContainer = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 2.67px;
    color: #000000;
`;


export const DishDescriptionContainer = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1.97px;
    color: #000000;
`;

export const MainDishTextContainer = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SmallHeaderContainer = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
    border-bottom: 1px solid rgba(222, 146, 0, 0.9);
    width: fit-content;
`;

export const FormControlLabelEdited = styled(FormControlLabel)`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
`;

export const OptionsList = styled.div`
    display: flex;
    flex-direction: row;
    padding:10px;
    gap:10px;
`;

export const OptLabel = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
`;

export const LinkTo = styled(Link)`
    text-decoration: none;
`;

export const OptInput = styled.input`

`;
