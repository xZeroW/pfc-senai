import React, {useState } from 'react';
import { DropdownMenu, DropdownDivider } from 'styled-dropdown-component';

import { authenticationService } from '_services/auth.service';
import { history } from '_helpers/history';

import { DropDown, DropDownButton, DropDownMenuItem } from 'components/DropDownMenu/styles';
import { Container, Logo, RightMenu, Ul, Li, A } from './styles';
import { LogoWhite } from 'components/Icons/styles';
import { NoBlueLink } from 'components/Link/styles';

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
      <Logo to="/">MyProject</Logo>
      <RightMenu>
        { currentUser ?
          <DropDown>
            <DropDownButton bgColor='#802DD0' onClick={() => setHidden(!hidden)}>
              {currentUser.user.first_name} {currentUser.user.last_name}
            </DropDownButton>
            <DropdownMenu right hidden={hidden} toggle={() => setHidden(!hidden)}>
              <NoBlueLink to="/dashboard">
                <DropDownMenuItem>Meus projetos</DropDownMenuItem>
              </NoBlueLink>
              <DropdownDivider />
              <NoBlueLink to="#" onClick={logout}>
                <DropDownMenuItem>Sair</DropDownMenuItem>
              </NoBlueLink>
            </DropdownMenu>
          </DropDown>
          :
          <Ul>  
            <Li as="li">
              <A to="/login">Entrar</A>
            </Li>
            <Li as="li">
              <A to="/register">Cadastrar</A>
            </Li>
          </Ul>
        }
      </RightMenu>
    </Container>
  );
}
