import React, {FC} from 'react';
import styled from 'styled-components';
import {TitlePropsTypes} from '../types';

const StyledTitle = styled.h1`
  color: ${({color}) => color };
  
`



export const Title:FC<TitlePropsTypes> = (props) => {
  return (
    <StyledTitle {...props} />
    // <StyledTitle color={color}>
    //   {children}
    // </StyledTitle>
  );
};

