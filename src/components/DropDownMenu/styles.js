import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DropDown = styled.div.attrs({
  className: 'dropdown'
})``;

export const DropDownButton = styled.button.attrs({
  className: 'btn dropdown-toggle'
})`
  &&& {
    color: #fff;
    background-color: ${props => props.bgColor};
  }
`;

export const DropDownMenuItem = styled(motion.div).attrs({
  className: 'dropdown-item'
})`
  &&&:hover {
    color: #FFF;
    background-color: #802DD0
  }
`;