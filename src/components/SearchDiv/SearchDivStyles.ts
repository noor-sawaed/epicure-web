import styled from 'styled-components';

export const SearchTextBarContainer = styled.div`
    display: flex;
    width: 90%;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border: 1px solid black;
    border-radius: 5px;
    align-items: center;
    padding-right: 5px;
    gap: 30px;  
`;

export const SmallSearchLogo = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 2%;
`
export const SearchTextInput = styled.input`
    width: 90%;
    border: none;
    background-color: transparent;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.29px;
`;

