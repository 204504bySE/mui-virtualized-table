import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

addDecorator(storyFn => (
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  </React.Fragment>
));
