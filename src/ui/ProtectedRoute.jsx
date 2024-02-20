import React, { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the authenticated user from the server
  const { isAuthenticated, isLoading, fetchStatus } = useUser();

  //2. If the user is not authenticated, redirect to the login page
  useEffect(() => {
	if (!isLoading && !isAuthenticated && fetchStatus !== "fetching") {
		navigate("/login");
	}
}, [isLoading, isAuthenticated, fetchStatus, navigate]);
  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        {" "}
        <Spinner />
      </FullPage>
    );

  //4. If there is an user

 if(isAuthenticated) return children;
}

export default ProtectedRoute;
