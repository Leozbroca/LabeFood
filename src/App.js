import React from 'react';
import Router from './router/Router';
import { ThemeProvider } from '@material-ui/core';
import theme from './constants/theme';
import { GlobalState } from './globalContext/GlobalState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
