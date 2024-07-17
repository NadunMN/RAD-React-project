import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

function Footer() {
  const [footerTheme, setFooterTheme] = useState(''); 

  useEffect(() => {
    const storedTheme = localStorage.getItem('mode');
    if (storedTheme) {
      setFooterTheme(storedTheme);
    }
  }, []); 

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: footerTheme=== 'dark' ? 'grey.800' : 'grey.200',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              RAD web
            </Typography>
            <Link href="/about" variant="body2">
              About Us
            </Link>
            <br />
            <Link href="#" variant="body2">
              Careers
            </Link>
            <br />
            <Link href="/contact" variant="body2">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link href="#" variant="body2">
              Help Center
            </Link>
            <br />
            <Link href="#" variant="body2">
              Privacy Policy
            </Link>
            <br />
            <Link href="#" variant="body2">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Social
            </Typography>
            <Link href="#" variant="body2">
              Facebook
            </Link>
            <br />
            <Link href="#" variant="body2">
              Twitter
            </Link>
            <br />
            <Link href="#" variant="body2">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}{' '}
            <Link color="inherit" href="#">
              Rapid application development
            </Link>
            {'. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
