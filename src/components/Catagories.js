
import { Box, Stack, styled, Typography } from '@mui/material';
import * as React from 'react';
import storeImg from "../assets/store.jpg"
function Catagories() {
    const StyledCatagory=styled(Box)({
        width:"100%",
        height:"30vh",
        display:'flex',
        backgroundImage: `url(${storeImg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundColor:'black',
        borderRadius:5,
        cursor:'pointer'
            
    });
    const StyledTitle=styled(Typography)({
        width:'100%',
        margin:50,
        height:"5vh",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        opacity:'0.7',
        marginTop:"20vh",
        cursor:'progress',
        fontSize:'25px',
        fontWeight:'500',
        
    });
  return (
    <Box >
        <Stack spacing={3} direction={{md:"row",xs:'column',sm:'row'}} margin={3}
    
        >
            <StyledCatagory><StyledTitle>Men</StyledTitle></StyledCatagory>
            <StyledCatagory><StyledTitle>Women</StyledTitle></StyledCatagory>
            <StyledCatagory><StyledTitle>Kids</StyledTitle></StyledCatagory>
        </Stack>
    </Box>
    );
}

export default Catagories;









