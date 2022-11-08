import React from "react";
import { ThemeProvider } from "@mui/material";
import { Router } from "./Routes/router";
import theme from "./Constants/theme";
import { GlobalStyle } from "./GlobalStyled";
import { GlobalState } from "./Global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
