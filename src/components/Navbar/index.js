import React, {useState } from 'react';
import { DropDown, DropDownButton, DropDownMenuItem } from 'components/DropDownMenu/styles';
import { DropdownMenu, DropdownDivider } from 'styled-dropdown-component';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

import { Container, Logo, RightMenu, Ul, Li, A } from './styles';
import { LogoWhite } from 'components/Icons/styles';

export default function Navbar() {

  const [currentUser] = useState(authenticationService.currentUserValue);
  const [hidden, setHidden] = useState(true);

  function logout() {
    authenticationService.logout();
    history.go(0);
  }

  return (
    <Container>
      <LogoWhite width="64px" height="64px" alt="MyProjectIcon" />
      <Logo href="/">MyProject</Logo>
      <RightMenu>
        { currentUser ?
          <DropDown>
            <DropDownButton bgColor='#802DD0' onClick={() => setHidden(!hidden)}>
              {currentUser.username}
            </DropDownButton>
            <DropdownMenu right hidden={hidden} toggle={() => setHidden(!hidden)}>
              <DropDownMenuItem href="/dashboard">Meus projetos</DropDownMenuItem>
              <DropDownMenuItem>Outra ação</DropDownMenuItem>
              <DropdownDivider />
              <DropDownMenuItem href="#" onClick={logout}>Sair</DropDownMenuItem>
            </DropdownMenu>
          </DropDown>
          :
          <Ul>  
            <Li as="li">
              <A as="a" href="/login">Entrar</A>
            </Li>
            <Li as="li">
              <A as="a" href="/register">Cadastrar</A>
            </Li>
          </Ul>
        }
      </RightMenu>
    </Container>
  );
}
