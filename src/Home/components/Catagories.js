import { Box, Stack, styled, Typography } from '@mui/material';
import * as React from 'react';
import kids from "../../assets/kids1.jpg"
import men from "../../assets/men.webp"
import women from "../../assets/women.jpeg"

function Catagories() {
    const StyledCatagory=styled(Box)({
        width:"100%",
        height:"100%",
        display:'flex',
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
        <Stack spacing={3} direction={{md:"row",xs:'column',sm:'row'}} margin={2}
        >
            <StyledCatagory sx={{ backgroundImage: `url(${men})`,}}><StyledTitle><u>Men</u></StyledTitle></StyledCatagory>
            <StyledCatagory sx={{ backgroundImage: `url(${women})`,}}><StyledTitle>Women</StyledTitle></StyledCatagory>
            <StyledCatagory sx={{ backgroundImage: `url(${kids})`,}}><StyledTitle>Kids</StyledTitle></StyledCatagory>
        </Stack>
    </Box>
    );
}

export default Catagories;









