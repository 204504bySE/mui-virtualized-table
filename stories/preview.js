import React from 'react';
import { addDecorator } from '@storybook/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme();

addDecorator(storyFn => (
  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      {storyFn()}
    </MuiThemeProvider>
  </CssBaseline>
));
