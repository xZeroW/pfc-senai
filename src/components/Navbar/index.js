import React, { useState } from 'react';
import { DropdownMenu, DropdownDivider } from 'styled-dropdown-component';
import { useAuth0 } from '@auth0/auth0-react';

import { DropDown, DropDownButton, DropDownMenuItem } from 'components/DropDownMenu/styles';
import { Container, Logo, RightMenu, Ul, Li, A } from './styles';
import { LogoWhite } from 'components/Icons/styles';
import { NoBlueLink } from 'components/Link/styles';

export default function Navbar() {

  const [hidden, setHidden] = useState(true);

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <Container>
      <LogoWhite width="64px" height="64px" alt="MyProjectIcon" />
      <Logo to="/">MyProject</Logo>
      <RightMenu>
        { isAuthenticated ?
          <DropDown>
            <DropDownButton bgColor='#802DD0' onClick={() => setHidden(!hidden)}>
              {user.name}
            </DropDownButton>
            <DropdownMenu right hidden={hidden} toggle={() => setHidden(!hidden)}>
              <NoBlueLink to="/dashboard">
                <DropDownMenuItem>Meus projetos</DropDownMenuItem>
              </NoBlueLink>
              <DropdownDivider />
              <NoBlueLink to="#" onClick={() => logoutWithRedirect()}>
                <DropDownMenuItem>Sair</DropDownMenuItem>
              </NoBlueLink>
            </DropdownMenu>
          </DropDown>
          :
          <Ul>  
            <Li as="li">
              <A to="#" onClick={() => loginWithRedirect()}>Entrar</A>
            </Li>
            <Li as="li">
              <A to="#" onClick={() => loginWithRedirect()}>Cadastrar</A>
            </Li>
          </Ul>
        }
      </RightMenu>
    </Container>
  );
}
