import React, {FC} from 'react';
import styled from 'styled-components';
import {PropsTypes} from '../types';

const StyledConsole = styled.textarea<PropsTypes.ConsoleType>`
  width: 100%;
  height: 70vh;
  background: black;
  border: none;
  font-size: 24px;
  color: ${props => props.color || 'white'};
  resize: none;
  &:focus {
    outline: none;
  }
`


export const Console: FC<PropsTypes.ConsoleType> = (props) => {
  return (
    <StyledConsole {...props} spellCheck={'false'}/>
  );
};
