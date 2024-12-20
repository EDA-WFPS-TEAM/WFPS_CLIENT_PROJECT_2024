/** @jsxImportSource @emotion/react */
import React, {useEffect} from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";

const pageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4; 
  padding: 20px;
`;

const buttonStyle = css`
  background-color: #205831; 
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #174a28; 
    transform: translateY(-2px); 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(32, 88, 49, 0.4); 
  }
`;

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "Log-In";
  }, []);

  return (
    <div css={pageStyle}>
      <LoginForm />
      <button
        type="button"
        css={buttonStyle}
        onClick={() => {
          history.push("/registration");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default LoginPage;
