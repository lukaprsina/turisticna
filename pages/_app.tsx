import type { AppProps } from 'next/app'
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#198754"
    },
    secondary: {
      main: "#2196f3"
    }
  },
  typography: {
    h1: {
      fontFamily: "Bebas Neue",
      letterSpacing: "10px",
      padding: "20px",
      paddingBottom: "10px"
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
