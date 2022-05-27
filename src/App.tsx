import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';
import {Flex} from './components/Flex';
import {Console} from './components/Console';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  padding: 2rem;
`

export const App = () => {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title color={'green'} fontSize={'24px'}>
          Console from RinalinDS
        </Title>
      </Flex>
      <Flex justify={'center'}>
        <Console/>
      </Flex>

    </AppWrapper>
  );
}


