import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';
import {Flex} from './components/Flex';
import {Console} from './components/Console';
import {Button} from './components/Button';

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
        <Title fontSize={'24px'}>
          Console from RinalinDS
        </Title>
      </Flex>
      <Flex direction={'column'} margin={'10px 0'}>
        <Console/>
        <Button align={'flex-end'}>Send</Button>
      </Flex>
    </AppWrapper>
  );
}


