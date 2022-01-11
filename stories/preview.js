import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

export const decorators = [
  (storyFn) => (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {storyFn()}
      </ThemeProvider>
    </React.Fragment>
  )
];
