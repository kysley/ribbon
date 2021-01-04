import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import TypingAreaCompsition from './components/compositions/TypingArea/composition';
import {DevTools} from './components/DevTools';
import {themeFactory} from './themes/default';
import {Box} from './components/Box';

const AppWrapper = styled.div`
  width: 90vw;
  max-width: 90vw;
  margin: auto;
`;

const AppContainer = styled.main`
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: 90px 1fr 100px;
  justify-content: center;
  min-height: 100vh;
`;

const theme = themeFactory({
  primary: '#e2b714',
  secondary: '#646669',
  text: '#d1d0c5',
  background: '#323437',
  error: '#ca4754',
  error2: '#7e2a33',
});

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="text" bg="background" width="100vw" margin="auto">
        <AppContainer>
          {/* <TypingAreaCompsition /> */}
          <DevTools />
          <Routes>
            <Route path="/" element={<TypingAreaCompsition />} />
          </Routes>
        </AppContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
