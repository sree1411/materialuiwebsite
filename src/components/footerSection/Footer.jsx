import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          
           
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
             Thanks for the visiting the website 
          </Typography>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
