import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.section`
  margin: 0 130px 0 0;
  .logo {
    margin-bottom: 100px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 350px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    color: #13131a;
  }

  input {
    margin: 30px 0 15px;

    height: 60px;
    width: 100%;

    background: #ffffff;
    border: 1.5px solid #dcdce6;
    box-sizing: border-box;
    border-radius: 8px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #a8a8b3;

    padding: 0 25px;

    :focus {
      color: #000;
      border-color: #e02041;
      transition: border-color 0.4s;
    }
  }

  button {
    height: 60px;
    width: 350px;
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

  a {
    margin-top: 40px;

    display: flex;
    align-items: center;
    text-decoration: none;

    font-size: 18px;
    line-height: 21px;
    color: #41414d;

    svg {
      margin-right: 8px;
    }
  }
`;
