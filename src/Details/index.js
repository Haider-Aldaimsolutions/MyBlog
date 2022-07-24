
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router';
function Details() {
    const location = useLocation()
  const { title } = location.state;
  const { image } = location.state;
  const { description1 } = location.state;
  const { description2 } = location.state;
  const { description3 } = location.state;
  return (
    <Box sx={{backgroundColor:'yellow',pb:10,pt:3}}>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={image} style={{height:"60vh",width:{md:"50",xs:'100%'},borderRadius:'10px' }}/>
    </Box>
    <Box sx={{backgroundColor:'#eee',color:'gray',borderRadius:'30px',marginTop:3,marginX:{md:20}}}>
    <Typography variant={'h4'} align={'center'} fontWeight={'900'} sx={{color:'tomato'}}>
        {title}
    </Typography>
    <Typography variant={'h5'} align={'center'} fontWeight={'200'} sx={{}}>
    {description1}
    </Typography>
    <Typography variant={'h5'} align={'center'} fontWeight={'200'} sx={{}}>
    {description2}
    </Typography>
    <Typography variant={'h5'}  fontWeight={'200'} sx={{}}>
    {description3}
 </Typography>
 </Box>
   
   
    </Box>

    );
}

export default Details;









