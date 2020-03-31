import styled, { keyframes } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #f0f0f5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  background: #f0f0f5;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  padding: 95px;

  height: 580px;
  width: 100%;
  max-width: 1120px;

  img {
    width: 190px;
    height: 80px;
  }

  animation: ${animation} 0.7s linear;
`;

export const InfoContainer = styled.div`
  margin: 65px 0 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 385px;
  height: 130px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    color: #13131a;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #737380;
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  color: #41414d;

  svg {
    margin-right: 5px;
  }
`;

export const FormWrapper = styled.form`
  align-self: flex-start;
  width: 100%;
  max-width: 450px;

  input {
    width: 450px;
    height: 60px;
    background: #ffffff;
    border: 1.5px solid #dcdce6;
    box-sizing: border-box;
    border-radius: 8px;

    padding: 0 25px;

    margin-bottom: 10px;

    :focus {
      border-color: #e02041;
      transition: border-color 0.5s;
    }
  }

  .address {
    display: flex;
    justify-content: space-between;

    input {
      max-width: 370px;
    }

    input + input {
      padding: 0 20px;
      max-width: 70px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 450px;
    height: 60px;
    background: #e02041;
    border-radius: 8px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    text-align: center;
    color: #f0f0f5;

    :hover {
      filter: brightness(90%);
      transition: filter 0.2s;
    }
  }
`;
