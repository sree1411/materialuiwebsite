import React from 'react'
import Navbar from '../components/navbarSection/Navbar'
import Container from '@mui/material/Container';
import { Box } from '@mui/material'
import HeroBanner from '../components/heroSection/HeroBanner';
import AccordionSection from '../components/accordionSection/AccordionSection';
import Abc from '../components/tabSection/Abc';
import Footer from '../components/footerSection/Footer';
 

const LandingPage = ({mode, setMode}) => {
  return (
    <Container maxWidth="md">
    <Box>

    <Navbar mode={mode} setMode={setMode}/>
    <HeroBanner/>
    <AccordionSection/>
    <Abc/>
     <Footer/>
    </Box>
  </Container>
       
  )
}

export default LandingPage