import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  height: 580px;

  padding: 95px 95px 100px;

  background: #f0f0f5;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  img {
    width: 190px;
    height: 80px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container-register {
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
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #41414d;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 450px;

  input {
    width: 450px;
    height: 60px;

    padding: 0 24px;

    background: #ffffff;
    border: 1.5px solid #dcdce6;
    box-sizing: border-box;
    border-radius: 8px;

    :focus {
      border-color: #e02041;
      transition: border-color 0.5s;
    }

    margin-bottom: 8px;
  }

  textarea {
    height: 175px;
    width: 450px;
    resize: vertical;

    padding: 20px 24px;

    background: #ffffff;
    border: 1.5px solid #dcdce6;
    box-sizing: border-box;
    border-radius: 8px;
    line-height: 24px;

    :focus {
      border-color: #e02041;
      transition: border-color 0.5s;
    }

    margin-bottom: 8px;
  }

  .button-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 265px;
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
  }
`;

export const BackButton = styled(RouterLink)`
  width: 170px;
  height: 60px;

  border: 2.5px solid #dcdce6;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #41414d;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
