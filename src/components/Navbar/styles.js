import styled from 'styled-components';

export const Container = styled.div`
  color: #802DD0;
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

export const A = styled(Ul)`
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