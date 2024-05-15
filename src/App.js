import { Box } from "@mui/material";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

 



 

function App() {
 
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"}>
          <LandingPage mode={mode} setMode={setMode} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
