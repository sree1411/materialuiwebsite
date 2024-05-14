import * as React from 'react';
import Card from '@mui/material/Card';
 
import CardMedia from '@mui/material/CardMedia';
 

export default function RightSide() {
  return (
    <Card sx={{width:"320px"}}>
      <CardMedia
        sx={{ height: 300 , width:"100%"}}
        image="assests/reactjs.png"
        title="green iguana"
      />
      
      
    </Card>
  );
}
