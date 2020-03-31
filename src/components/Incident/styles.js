import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 545px;
  height: 315px;

  padding: 32px;

  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.26);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      text-transform: uppercase;
      color: #41414d;
    }
    p + p {
      margin-top: 15px;

      text-transform: initial;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      color: #737380;
    }
  }
`;

export const TrashButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  position: absolute;
  right: 0;
  top: 0;

  margin: 24px;
`;
