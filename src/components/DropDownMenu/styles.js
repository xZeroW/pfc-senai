import styled from 'styled-components';

export const DropDown = styled.div.attrs({
  className: 'btn-group'
})``;

export const DropDownButton = styled.button.attrs(props => ({
  className: 'btn dropdown-toggle'
}))`
  &&& {
    color: #fff;
    background-color: ${props => props.bgColor};
  }
`;

export const DropDownMenuItem = styled.a.attrs({
  className: 'dropdown-item'
})`
  &:hover {
    color: #802DD0
  }
`;