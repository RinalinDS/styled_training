import React, {FC, KeyboardEvent, useState} from 'react';
import styled from 'styled-components';
import {PropsTypes} from '../types';
import {Flex} from './Flex';
import {Line} from './Line';

const StyledConsole = styled.textarea<PropsTypes.ConsoleType>`
  width: 100%;
  height: 70vh;
  background: black;
  border: none;
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};
  resize: none;

  &:focus {
    outline: none;
  }
  @media ${props => props.theme.media.phone} {
    color: ${props => props.theme.colors.secondary}
  }
  @media ${props => props.theme.media.tablet} {
    color: yellow;
  }
  
  
`


export const Console: FC<PropsTypes.ConsoleType> = ({color, ...props}) => {
  const [lines, setLines] = useState(['C/RinalinDS/styled>'])
  const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      setLines([...lines, 'C/RinalinDS/styled>'])
    }
  }
  return (
    <Flex>
      <Flex direction={'column'} margin='0 10px'>
        {lines.map((m, i) => <Line color={color} key={i}>{m}</Line>)}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} {...props} spellCheck={'false'}/>
    </Flex>
    // <StyledConsole {...props} spellCheck={'false'}/>
  );
};
