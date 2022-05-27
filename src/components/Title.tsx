import React, {FC} from 'react';
import styled from 'styled-components';
import {PropsTypes} from '../types';

const StyledTitle = styled.h1<PropsTypes.TitleType>`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: ${({fontSize}) => fontSize };
  
`



export const Title:FC<PropsTypes.TitleType> = (props) => {
  return (
    <StyledTitle {...props} />
    // <StyledTitle color={color}>
    //   {children}
    // </StyledTitle>
  );
};

