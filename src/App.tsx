import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  padding: 2rem;
`

export const App = () => {
  return (
    <AppWrapper>
      <Title color={'green'}>
        TRULALA
      </Title>
    </AppWrapper>
  );
}


