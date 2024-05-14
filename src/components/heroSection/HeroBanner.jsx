import React from 'react'
import Stack from '@mui/material/Stack';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const HeroBanner = () => {
  return (
     <>
        <Stack direction="column" spacing={2} margin={2} width="100%" >
         <LeftSide />
         <RightSide/>
   
      </Stack>
     
     </>
  )
}

export default HeroBanner