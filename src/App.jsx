import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import "./App.css";

const theme = {
  text: "#271a1a",
  bg: "#fff",
  brand: "#25EA50",
  brandDark: "#0D902A",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
