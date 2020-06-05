import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoBlueLink = styled(Link)`
  color: #000;

  &:hover {
    color: #FFF;
    text-decoration: none;
  }
`;

export const BlackLink = styled(Link)`
  color: #000;

  &:hover {
    color: #000;
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  color: #802DD0;

  &:hover {
    color: #802DD0;
    text-decoration: none;
  }
`;