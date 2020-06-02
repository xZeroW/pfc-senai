import styled from 'styled-components';

import ImgTransparent from 'assets/img/Logo.svg';
import ImgWhite from 'assets/img/Logo-2.svg';
import ImgLixeira from 'assets/img/Lixeira.svg';
import ImgLupa from 'assets/img/Lupa.svg';
import ImgCalendario from 'assets/img/Calendario.svg';

export const LogoTransparent = styled.img.attrs({
  src: ImgTransparent,
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const LogoWhite = styled.img.attrs({
  src: ImgWhite,
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const LogoLixeira = styled.div.attrs({
  src: ImgLixeira,
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const LogoLupa = styled.div.attrs({
  src: ImgLupa,
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const LogoCalendario = styled.div.attrs({
  src: ImgCalendario,
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
