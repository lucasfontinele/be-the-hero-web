import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #f0f0f5;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;

  padding: 35px 0 0;

  width: 100%;
  max-width: 1120px;

  div {
    display: flex;
    align-items: center;

    button {
      border: 1.5px solid #dcdce6;
      box-sizing: border-box;
      border-radius: 8px;

      width: 60px;
      height: 60px;
    }
  }

  img {
    height: 60px;
    width: 145px;
  }
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    color: #13131a;

    margin-left: 50px;
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  margin-right: 24px;

  height: 60px;
  width: 260px;
  background: #e02041;
  border-radius: 8px;

  text-decoration: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #f0f0f5;
`;

export const Content = styled.div`
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  width: 100%;
  max-width: 1120px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    color: #13131a;
  }
`;

export const Incidents = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
`;
