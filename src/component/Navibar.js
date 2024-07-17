import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkMode from './DarkMode'

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once on mount

  // Format the current time to display hours, minutes, and seconds
  const formattedTime = currentTime.toLocaleTimeString();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website :    {formattedTime}
          </Typography>
          
      
      
    
          <Button href= "/" color="inherit">Home</Button>
          <Button href= '/about' color="inherit">About</Button>
          <Button href= '/contact' color="inherit">ContactUs</Button>
          <DarkMode/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
