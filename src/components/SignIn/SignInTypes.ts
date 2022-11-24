import { Divider, TextField } from '@mui/material';
import styled from 'styled-components';

export const MainSignInContainer = styled.div`
    height:fit-content;
    display:flex;
    flex-direction:column;
    justify-content: center;
    gap: 50px;
    padding:10px;
    margin-bottom: 40px;
`;

export const MainSignInHeader = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    gap: 14px;
`;

export const MainSignInHeaderTitle = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #000000;
`;

export const MainSignInHeaderDetails = styled.label`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
`

export const MainSignInInputHeader = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    gap: 60px;
`;


export const SignInInput = styled(TextField)`
    border: none;
    border-bottom: 1px solid #000000;
    width: 90%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.97px;
    color: #000000;
    padding:10px;
    margin: 0 auto;
`;

export const MainSignInDiv = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    gap: 14px;
`;

export const SignInButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 24px;
    gap: 10px;
    width: 206px;
    height: 48px;
    background: #000000;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

export const SignInForgotPassword = styled.a`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
`;

export const SignInLinedOr = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SignInOrDivider = styled(Divider)`
    width:100%;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #979797;
`;

export const SignUpButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 24px;
    gap: 10px;
    width: 206px;
    height: 48px;
    background: white;
    border: 1px solid #000000;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    color: #000000;
    align-self: center;
`;