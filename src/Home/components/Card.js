import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
export default function card({image,title="Title",description1="Wearing will be gentle",description2="Lovely Article",description3}) {
  return (
    <Card sx={{m:1  }}>
      <NavLink to="/details" state={{ title:title,image:image,description1:description1,description2y:description2,description3:description3 }}   style={{textDecoration:'none'}}>

      <CardMedia
        component="img"
        alt="green iguana"
        height="300vh"
        image={image}

      />
      <CardContent>
        <Typography  variant="h7" color={'tomato'} fontWeight={'900'} align='center' component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" fontWeight={'900'} align='center' component="div">
          {description1}
        </Typography>
        <Typography gutterBottom color={'gray'} variant="body2" align='center' component="div">
          {description2}
        </Typography>
        <Typography variant="body2" align='center' fontSize="15px"  >
          {description3}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center'}} >
        <Button  size="small">Learn More!</Button>
      </CardActions>
      </NavLink>
    </Card>
  );
}
