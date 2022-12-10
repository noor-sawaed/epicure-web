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
  SignUpButton,
  ExitLogo,
  ExitLogoContainer
} from "./SignInTypes"
import { useState } from "react"
export const SignIn = (props: any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <MainSignInContainer>
      <ExitLogoContainer>
        <ExitLogo src={XLogo} alt="Xlogo" onClick={props.closeSignIn} />
      </ExitLogoContainer>
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
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <SignInInput
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </MainSignInInputHeader>
      <MainSignInDiv>
        <SignInButton
          disabled={email && password ? false : true}
          onClick={() => console.log("pattern")}
        >
          login
        </SignInButton>
        <SignInForgotPassword>Forgot Password?</SignInForgotPassword>
      </MainSignInDiv>
      <SignInLinedOr>
        <SignInOrDivider>or</SignInOrDivider>
      </SignInLinedOr>
      <SignUpButton>Sign Up</SignUpButton>
    </MainSignInContainer>
  )
}
