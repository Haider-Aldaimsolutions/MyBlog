
import * as React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Catagories from './components/Catagories';
import Recents from './components/Recents';
import { Box, Container } from '@mui/system';
import { Divider, Stack } from '@mui/material';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
function Home() {
  return (
    <>
     
     <Hero/>
     <Catagories/>
     <hr/>
     <Stack direction={{md:"row",xs:"column"}}>

    <Box flex={2} sx={{p:{md:8,xs:2}  }}>  
    <Recents />
    </Box>
    
    {/* <Box flex={1} sx={{m:{md:8,xs:0},backgroundColor:'black',borderRadius:'30px',height:'100%'}}> */}
    <RightBar/>
    {/* </Box>   */}

    </Stack>
    
     </>

    );
}

export default Home;









