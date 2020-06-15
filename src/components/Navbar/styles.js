import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div.attrs({
  className: 'navbar fixed-top'
})`
  background-color: #ffffff;
  box-shadow: 0px 0px 5px grey;
`;

export const Logo = styled(Link)`
  margin-right: auto;
  margin-left: 10px;
  font-size: 24px;

  color: #802DD0;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  transition: all 300ms ease-in-out 0s;

  &&:hover {
    color: rgba(138, 5, 190, 0.7);
  }

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const RightMenu = styled.nav`
  display: block;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 5px;
`;

export const Li = styled(Ul)`
  padding: 0px 20px;
`;

export const A = styled(Link)`
  color: #802DD0;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  transition: all 300ms ease-in-out 0s;

  &&:hover {
    color: rgba(138, 5, 190, 0.7);
  }

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const UserName = styled.h5`
  margin-right: 10px;
  color: #000;
  text-align: center;
`;