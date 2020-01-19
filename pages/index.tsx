import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { compose, spacing, SpacingProps } from '../src';

const Button = styled.button<SpacingProps>(
  compose(
    props => ({
      backgroundColor: props.theme.colors.primary,
      color: props.theme.colors.primaryColor,
      paddingLeft: props.theme.spacing.l,
      paddingRight: props.theme.spacing.l,
      paddingTop: props.theme.spacing.m,
      paddingBottom: props.theme.spacing.m,
    }),
    () => ({
      fontSize: 20,
      borderRadius: 5,
      border: 'none',
    }),
    spacing,
  ),
);

const theme = {
  colors: { primary: 'purple', primaryColor: 'white' },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
  },
};

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button ph={14}>Get started</Button>
      </div>
    </ThemeProvider>
  );
};
