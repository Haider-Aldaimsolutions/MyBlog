import * as React from 'react';
import { AppBar,Box,Toolbar,styled, Typography, MenuItem,Menu,InputBase, Divider, CssBaseline,  } from '@mui/material';
import {Facebook,Instagram,Twitter,Menu as MenuImg} from "@mui/icons-material"
import { NavLink } from 'react-router-dom';

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
       <AppBar sx={{backgroundColor:'black',opacity:0.9,height:60,position:'fixed'}}>
        <StyledToolbar >

        <SocialBox sx={{}}>
        <NavLink to="/" style={{color:'#4267B2'}}><Facebook/></NavLink>
        <NavLink to="/" style={{color:'#00acee'}}><Twitter/></NavLink>
        <NavLink to="/" style={{color:'#8a3ab9'}}><Instagram/></NavLink>
        </SocialBox>

        <MenuBox sx={{display:{sm:'none',xs:'none',md:'flex'}}}>
          
         { menuItems.map((item)=>(
          <>
          <StyledItems>
          <NavLink to={item.Link}  style={{fontSize:"16px",color:'white',textDecoration:'none'}}>{item.Name}</NavLink>
          </StyledItems>
          
          </>
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
        sx={{display:{md:"none"}}}
      >
        <Box sx={{width:{xs:180,sm:300,borderRadius:15},height:"100%",}}>
          { menuItems.map((item)=>(
            <>
            

            <NavLink to={item.Link}  style={{fontSize:"16px",color:'black',textDecoration:'none'}}>
              <MenuItem sx={{"&:hover":{color:'white',backgroundColor:'black'}}}>{item.Name}</MenuItem>  
              <Divider/>
            </NavLink>
  
          
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
