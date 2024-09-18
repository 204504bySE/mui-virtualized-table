import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

export const decorators = [
  (Story) => (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </React.Fragment>
  )
];
export const tags = ['autodocs'];
