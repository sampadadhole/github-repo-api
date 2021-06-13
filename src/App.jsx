import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import "./App.css";

const theme = {
  brand: "#25EA50",
  brandDark: "#0D902A",
};

const light = {
  text: "#271a1a",
  bg: "#fff",
};

const dark = {
  bg: "#271a1a",
  text: "#fff",
};

const GlobalStyles = createGlobalStyle`
body {
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  transition: all 0.50s linear;
}
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? dark : light;
  console.log(currentTheme);
  return (
    <div className="App">
      <ThemeProvider theme={{ ...theme, ...currentTheme }}>
        <GlobalStyles />
        <button type="button" onClick={() => setIsDark(!isDark)}>
          switch
        </button>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
