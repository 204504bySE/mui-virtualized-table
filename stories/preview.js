import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme();

export const decorators = [
  (Story) => (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Story />
      </MuiThemeProvider>
    </React.Fragment>
  )
];
