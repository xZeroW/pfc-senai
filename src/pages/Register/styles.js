import styled from 'styled-components';

export const RegisterBigText = styled.h1`
  color: #FFF;
  font-size: 80px;
`;

export const RegisterCombo = styled.div`

  padding-top: 1.5rem;
  margin-left: 5rem;
  @media screen and (max-width: 993px) {
    display: none !important;
  }
`;

export const RegisterFormCard = styled.div.attrs({
  className: 'rounded'
})`
  margin-right: 3rem;
  padding: 1.5rem;
  margin: 5%;
  background-color: #FFF;
`;