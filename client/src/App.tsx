import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Title} from './components/Title';
import './styles/main.sass';
import {Filters} from './components/Filters/Filters';
import {Flex} from './utils/styled-components/Flex';

const theme = {
  color: {
    accent: '#0d6db1',
    mainBg: '#ffffff',
    secondaryBg: '#fafbfb',
    stroke: '#dee5e8',
    primary: '#333333',
    selectedBoxShadow: '#f1f4f6'
  }
};

const Container = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  padding-top: 3rem;
  
`;

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <Flex justify="flex-start">
            <Filters theme={theme} />
            <Title theme={theme} />
          </Flex>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
