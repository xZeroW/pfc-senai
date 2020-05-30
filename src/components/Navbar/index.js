import React from 'react';

import { Container, Logo, RightMenu, Ul, Li, A } from './styles';
import { LogoWhite } from 'components/Icons/styles';

export default function Navbar() {
  return (
    <Container>
      <LogoWhite width="64px" height="64px" />
      <Logo href="/">MyProject</Logo>
      <RightMenu>
        <Ul>  
          <Li as="li">
            <A as="a" href="/login">Entrar</A>
          </Li>
          <Li as="li">
            <A as="a" href="/register">Cadastrar</A>
          </Li>
        </Ul>
      </RightMenu>
    </Container>
  );
}
