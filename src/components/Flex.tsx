import React, {FC} from 'react';
import styled from 'styled-components';
import {PropsTypes} from '../types';

const StyledFlex = styled.div<PropsTypes.FlexType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
`



export const Flex: FC<PropsTypes.FlexType> = (props) => {
  return (
    <StyledFlex {...props} />
  );
};
