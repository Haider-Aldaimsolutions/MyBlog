import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Card from './Card';
import image1 from  "../../assets/men1.jpg"
import image2 from  "../../assets/women1.jpg"
import image3 from  "../../assets/men2.jpg"
import image4 from  "../../assets/kids2.jpg"
import image5 from  "../../assets/kids1.jpg"
import image6 from  "../../assets/men3.jpg"
import image7 from  "../../assets/women2.jpg"
import image8 from  "../../assets/women3.jpg"
import image9 from  "../../assets/women4.jpg"

function Recents() {
  return (
    <Box>
      <Grid container>
        <Grid item md={12} xs={12}> 
          <Card image={image1} title="Suits" description1="To give men a Bolder Look" description2="Mens Love" description3="Gives a man what he wants in his personality and him a gentelmen he is..." />
        </Grid>
    
        <Grid item md={4} xs={12} >
        <Card image={image2}/>
        </Grid>
        
        <Grid item md={4} xs={12} >
        <Card image={image3}/>
        </Grid>

        <Grid item md={4} xs={12} >
        <Card image={image4}/>
        </Grid>

        <Grid item md={4} xs={12} >
        <Card image={image5}/>
        </Grid>

        <Grid item md={4} xs={12} >
        <Card image={image6}/>
        </Grid>

        <Grid item md={4} xs={12} >
        <Card image={image7}/>
        </Grid>

        <Grid item md={4} xs={12} >
        <Card image={image8}/>
        </Grid>

        <Grid item md={4} xs={12} >
        <Card image={image9}/>
        </Grid>

       
      </Grid>
    </Box>

    );
}

export default Recents;









