import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { useEffect, useState } from "react";
import SignupFormOnLogin from "../features/authentication/SignupFormOnLogin";
// import SignupFormOnLogin from "../features/authentication/SignupFormOnLogin";



const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  function handleSignupSuccess() {
    setShowSignup(false);
    
  }
  function toggleSignup() {
    setShowSignup(prevShowSignup => !prevShowSignup);
  }

  useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        setShowSignup(false);
      }
    }

    window.addEventListener("keydown", handleEscKey);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [])

  return <LoginLayout>
  <Logo/>
  <Heading as="h4" > Log in to your account </Heading>
    <LoginForm />
    <div>
        Not account yet?
        <span
          onClick={toggleSignup}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {" "}
          Sign up 
        </span>
      </div>
      {showSignup && <SignupFormOnLogin  onSignupSuccess={handleSignupSuccess} />}
  </LoginLayout>;
}

export default Login;
