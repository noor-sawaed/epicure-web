import { SearchLogo } from "../SearchBar/SearchBarStyles"
import XLogo from "../../Assets/x.svg"
import {
  MainSignInContainer,
  MainSignInHeaderTitle,
  MainSignInHeaderDetails,
  MainSignInInputHeader,
  SignInInput,
  MainSignInHeader,
  SignInButton,
  MainSignInDiv,
  SignInForgotPassword,
  SignInLinedOr,
  SignInOrDivider,
  SignUpButton
} from "./SignInTypes"
export const SignIn = (props: any) => {
  return (
    <MainSignInContainer>
      <SearchLogo src={XLogo} alt="Xlogo" onClick={props.closeSignIn} />

      <MainSignInHeader>
        <MainSignInHeaderTitle>Sign in</MainSignInHeaderTitle>
        <MainSignInHeaderDetails>
          To continue the order, please sign in
        </MainSignInHeaderDetails>
      </MainSignInHeader>
      <MainSignInInputHeader>
        <SignInInput
          id="standard-email-input"
          label="Email address"
          type="email"
          autoComplete="current-email"
          variant="standard"
        />
        <SignInInput
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </MainSignInInputHeader>
      <MainSignInDiv>
        <SignInButton>login</SignInButton>
        <SignInForgotPassword>Forgot Password?</SignInForgotPassword>
      </MainSignInDiv>
      <SignInLinedOr>
        <SignInOrDivider>or</SignInOrDivider>
      </SignInLinedOr>
        <SignUpButton>Sign Up</SignUpButton>
    </MainSignInContainer>
  )
}
