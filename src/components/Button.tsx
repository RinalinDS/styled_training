import React, {FC} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {PropsTypes} from '../types';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const StyledButton = styled.button<PropsTypes.ButtonType>`
  border: none;
  min-height: 50px;
  min-width: 120px;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${rotateAnimation} 1s 1 linear;
    // имя анимации, сколько секунд занимает анимация, сколько раз 
    // повторяется(infinite было), какая функция управляет анимацией
  }

  align-self: ${props => props.align || 'stretch'};
  ${props => props.primary && css<PropsTypes.ButtonType>`
    color: ${(props) => props.color || 'white'};
    background: ${props => props.background || 'white'};`}

  ${props => props.outlined && css<PropsTypes.ButtonType>`
    // без отдельной типизации функции css выдавало ошибку на пропсы, 
    // TODO сократить как-то , чтобы не везде писать типизацию
    color: ${(props) => props.color || 'white'};
    border: 1px solid ${props => props.color};
    background: transparent;
  `}
`

// Внизу как бы наследование
const LargeButton = styled(StyledButton)`
  font-size: 32px;
`


export const Button: FC<PropsTypes.ButtonType> = (props) => {
  return (
    <LargeButton {...props} />
  );
};
