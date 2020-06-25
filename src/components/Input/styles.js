import styled from 'styled-components';

export const MaterialInputContainer = styled.div`
  position: relative;
  color: #802DD0;

  input {
    border: 0;
    border-bottom: 2px solid #802DD0;
    outline: none;
    transition: .2s ease-in-out;
    box-sizing: border-box;
  }
  
  label {
    top: 0;
    left: 0; right: 0;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
  }
  
  input,
  label {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  }
  
  input:valid + label,
  input:focus + label {
    font-size: .8rem;
    top: -30px;
    pointer-events: none;
  }
`;