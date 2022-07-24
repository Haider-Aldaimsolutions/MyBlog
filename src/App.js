
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home';
import Blog from './Blog';
import ContactUs from './ContactUs';
import Products from './Products';
import Portfolio from './Portfolio';
import NavBar from './Home/components/NavBar';
import Footer from './Home/components/Footer';
import { Box } from '@mui/system';
import Details from './Details';


const App = () => {
  return (
  <>

    
    <Router>
    <NavBar/>
    <Box sx={{mb:7}}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/protfolio" element={<Portfolio/>}/>
          <Route exact path="/contact-us" element={<ContactUs/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/details" element={<Details/>}/>
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
    <Footer/>
    </Router>
    
  </>
  );
}


export default App;

const NotFound=()=>{
  return(
    <div>
      Page Not Found
    </div>
  );
}







