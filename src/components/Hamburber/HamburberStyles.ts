import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainHamburberContainer = styled.div`
    margin:3%;
    display: flex;
    flex-direction: column;
`;
export const TopHamburberDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`;
export const HamburberButton = styled.button`
    display: flex;
    background-color:rgba(255, 255, 255, 0.88);
    border:none;
    font-size:larger;
    align-items:flex-start;
    padding: 20px;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
`;

export const BottomHamburberDiv = styled.div`
    margin-top: 0px;
`;

export const ExitLogoImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const Linkto = styled(Link)`
    text-decoration: none;
`;
