import React from 'react';

import { Container, Logo, RightMenu, Ul, Li, A } from './styles';
import { LogoWhite } from 'components/Icons/styles';

export default function Navbar() {
  return (
    <Container>
      <LogoWhite />
      <Logo>MyProject</Logo>
      <RightMenu>
        <Ul>  
          <Li as="li"><A as="a" href="/">sdfsd</A></Li>
        </Ul>
      </RightMenu>
    </Container>
  );
}
