import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #8A05BE;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  padding: 5px 10px;
  box-shadow: 0px 0px 5px grey;
`;

export const Logo = styled.a`
  margin-right: auto;
  font-size: 24px;
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

export const A = styled(Ul)`
  color: #8A05BE;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  transition: all 300ms ease-in-out 0s;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;