import React from 'react';

export type TitleType = {
  children?: React.ReactNode
  color?: string
  fontSize?: string
}

export type FlexType = {
  direction?: string
  children?: React.ReactNode
  margin?: string
  align?: string
  justify?: string
}

export type ConsoleType = {
  color?: string
}


export type ButtonType = {
  children?: React.ReactNode
  align?: string
  primary?: boolean
  color?: string
  background?: string
  outlined?: boolean
}

export type LineType = {
  children?: React.ReactNode
  color?: string
}
