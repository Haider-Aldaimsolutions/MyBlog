
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import storeImg from "../../assets/Store.jpeg"
import * as React from 'react';

function Hero() {

    const StyledHeader=styled(Typography)({
        textAlign:'center',
        fontWeight:'900'
    }     
    )
  return (
    
     <Box sx={{mt:7}}>
          <Typography sx={{textAlign:'center',fontSize:'50px',fontWeight:'900'}}>
            Fashions <b style={{color:'red'}}>Blog</b>
          </Typography>
          <Typography sx={{textAlign:'center',fontSize:'18px',fontWeight:'500'}}>
                We make you look better of you
          </Typography>
        <Box
        sx={{
            backgroundImage: `url(${storeImg})`,
            width:"100%",
            height:{md:"100vh",sm:'100vh',xs:'70vh'},
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
            display:'flex',
            justifyContent:'center',
            alignItems:{sm:'flex-start',xs:'center'}

        
        }}  
        
        >
            <Box sx={{pt:{sm:8},width:{sm:'50%'}}}>
                <Box sx={{backgroundColor:"white",opacity:'0.7',width:"100",borderRadius:5,m:2}}>
                <Typography sx={{textAlign:'center',fontSize:'20px',fontWeight:'900',pt:{sm:8,xs:4},color:'tomato'}}>
                Trending Styles
            </Typography>
            <Typography sx={{textAlign:'center',fontSize:'30px',fontWeight:'400'}}>
                    Life is Boaring without Fashion!
            </Typography>
            <Typography sx={{textAlign:'center',fontSize:'15px',fontWeight:'400',pb:{sm:8,xs:4}}}>
                    We love to change your style lorme ipsum
            </Typography>
                </Box>
            </Box>  

        </Box> 
     </Box>

    );
}

export default Hero;









