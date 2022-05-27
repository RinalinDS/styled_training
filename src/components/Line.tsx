import React, {FC} from 'react';
import styled from 'styled-components';
import {PropsTypes} from '../types';


const StyledLine = styled.div`
  font-size: 24px;
  color: ${props => props.color || props.theme.colors.primary};
`

export const Line:FC<PropsTypes.LineType> = (props) => {

  return (
    <StyledLine {...props}/>
  );
};

