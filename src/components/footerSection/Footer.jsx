import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function Footer({mode, setMode}) {

    
  const [darkMode, setDarkMode] = React.useState(false)

  const handleBtn =()=>{
    setDarkMode(!darkMode)
    setMode(darkMode ?"dark":"light")
  }

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Thanks for the visiting the website
            <Switch {...label} onChange={handleBtn}/>
            {
              darkMode ? "Dark" :"Light"
            }
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
