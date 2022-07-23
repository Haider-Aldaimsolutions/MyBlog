import * as React from 'react';
import { AppBar,Box,Toolbar,styled, Typography, MenuItem,Menu,InputBase, Divider, CssBaseline,  } from '@mui/material';
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
    cursor:'pointer'
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
    {Name:"Products",Link:'/products'},
    {Name:'Portfolio',Link:'/protfolio'},
    {Name:"Blog",Link:'/blog'},
    {Name:"Contact Us",Link:'/contact-us'},
  ];
  const StyledItems=styled(Typography)({
      cursor:'pointer',
      fontSize:14,
  });
  
  return (

    <div className="App">
      <CssBaseline />
       <AppBar sx={{backgroundColor:'black',height:60,position:'static'}}>
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
        sx={{mt:6,display:{md:"none"}}}
      >
        <Box sx={{width:{xs:180,md:300},height:"100%",}}>
          { menuItems.map((item)=>(
            <>
          <MenuItem  sx={{"&:hover":{color:"white",backgroundColor:'black'}}}>{item.Name} </MenuItem>
          <Divider/>
          
          </>
         ))
         
         }
        </Box>
        
      </Menu>
      </AppBar>
    </div>
  );
}

export default NavBar;
