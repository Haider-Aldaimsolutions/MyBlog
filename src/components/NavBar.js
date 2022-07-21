import * as React from 'react';
import { AppBar,Box,Toolbar,styled, Typography, MenuItem,Menu,InputBase,  } from '@mui/material';
import {Facebook,Instagram,Twitter,Menu as MenuImg} from "@mui/icons-material"


function NavBar() {

  const [open,setOpen]=React.useState(false);
  const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between"
  });
  const SocialBox=styled(Box)({
    display:"flex",
    gap:10,
  });
  const MenuBox=styled(Box)({
    display:'flex',
    gap:30,
  });
  const SearchBox=styled(Box)({
    display:'flex',
    gap:5,
  });
  const menuItems=[
    {Name:'Home',Link:'/'},
    {Name:"Products",Link:'#'},
    {Name:'Portfolio',Link:'#'},
    {Name:"Blog",Link:'#'},
    {Name:"Contactus",Link:'#'},
  ];
  const StyledItems=styled(Typography)({
      cursor:'pointer',
      fontSize:14,
  });
  
  return (

    <div className="App">
       <AppBar sx={{backgroundColor:'black'}}>
        <StyledToolbar >

        <SocialBox sx={{}}>
          <Facebook/>
          <Twitter/>
          <Instagram/>
        </SocialBox>

        <MenuBox sx={{display:{sm:'none',xs:'none',md:'flex'}}}>
          
         { menuItems.map((item)=>(
          <StyledItems>{item.Name}</StyledItems>
         ))
         
         }
          
        </MenuBox>
        
        <SearchBox sx={{display:'flex'}}>
          <InputBase placeholder="Search..." sx={{color:"white"}} />
          
          <MenuImg
          onClick={()=>setOpen(true)} 
          sx={{display:{sm:"block",xs:"block",md:'none'}}} />
          
        </SearchBox>
        
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(!open)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{width:350,height:"80vh"}}>
          { menuItems.map((item)=>(
          <MenuItem  sx={{padding:"10px" ,"&:hover":{color:"white",backgroundColor:'black'}}}>{item.Name}</MenuItem>
         ))
         
         }
        </Box>
        
      </Menu>
      </AppBar>
    </div>
  );
}

export default NavBar;
