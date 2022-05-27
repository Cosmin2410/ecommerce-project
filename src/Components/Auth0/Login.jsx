import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <div
          className="header__loginContainer"
          onClick={() => loginWithRedirect()}
        >
          <FaUser size="1.8rem" color="white" />
          <p>Log In</p>
        </div>
      ) : (
        <div className="header__loginContainer" onClick={() => logout()}>
          <FaUser size="1.8rem" color="white" />
          <p>Log Out</p>
        </div>
      )}
    </div>
  );
};

export default Login;
