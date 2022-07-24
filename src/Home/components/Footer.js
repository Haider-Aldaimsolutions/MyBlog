import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Stack,styled } from '@mui/material';
import {Facebook,Instagram,Twitter,Menu as MenuImg} from "@mui/icons-material"
import { NavLink } from 'react-router-dom';

function Copyright() {
  const SocialBox=styled(Box)({
    display:"flex",
    gap:10,
    cursor:'pointer'
  });
  return (
    <Typography variant="body2" align={"center"} color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Fashion.Blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:"black",
        }}
      >
        <Stack direction={{md:'row',xs:'column'}} p={7} pt={1} >
            <Box flex={1} mb={2}>
            <Typography variant="h5" color={'white'} align={"center"}>Contact Us</Typography>
            <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>Main Street Khayabane Iqbal, Manga Mandi, Lahore, Punjab, Pakistan</Typography>
            <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>hdrali036@gmail.com</Typography>
            <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>+92-3076807792</Typography>

            </Box>

            <Box flex={1} mb={2}>
            <Typography variant="h5" color={'white'} align={"center"}>
            Data policy 
          </Typography>
          <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>
            Cookies 
          </Typography>
          <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>
             Data Safety
          </Typography>
            </Box>

            <Box flex={1} mb={2}>
            <Typography variant="h5" color={'white'} align={"center"}>
            Catagories
          </Typography>
          <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>Kids </Typography>
          <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>Mens</Typography>
          <Typography variant="body1" color={'white'} align={"center"} sx={{color:'gray'}}>Womens</Typography>

            </Box>

            <Box flex={1} mb={2} style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
            <Typography variant="h5" color={'white'} align={"center"}>
            Follow Us
          </Typography>
          <Box>
        <NavLink to="/" style={{color:'#4267B2'}}><Facebook/></NavLink>
        <NavLink to="/" style={{color:'#00acee'}}><Twitter/></NavLink>
        <NavLink to="/" style={{color:'#8a3ab9'}}><Instagram/></NavLink>
        </Box>   
            </Box>
          
        </Stack>
        <Copyright/>
      </Box>
    </Box>
  );
}