import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
 
 
 
const card = (
  <React.Fragment>
    <CardContent >
      <Typography sx={{ fontSize: 20,
       backgroundImage: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)',
       webkitBackgroundClip: 'text',
       backgroundClip:'text',
       color:'transparent',
       fontWeight:'500'


      }} color="red" gutterBottom>
      Learn Web Development Couse 
      </Typography>
      <Typography sx={{color:"blue"}}>
         <h4>HTML</h4>
         <h4>CSS</h4>
         <h4>Java script</h4>
         <h4>React Js</h4>
      </Typography>
       
      
    </CardContent>
   
  </React.Fragment>
);

export default function LeftSide() {


 

  return (
    <Box 
>
      <Card variant="outlined" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "300px",
        widows:"100%"
      }}>{card}</Card>
    
    </Box>
  );
}
