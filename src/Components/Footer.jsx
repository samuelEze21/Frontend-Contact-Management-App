import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        color: 'white',
        background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              About Us
            </Typography>
            <Typography variant="body2">
              We provide innovative contact management solutions to help businesses 
              stay connected with their customers effectively and efficiently.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                Home
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/services" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                Our Services
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                color="inherit" 
                href="https://facebook.com" 
                target="_blank"
                sx={{ '&:hover': { color: '#4267B2' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://twitter.com" 
                target="_blank"
                sx={{ '&:hover': { color: '#1DA1F2' } }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://linkedin.com" 
                target="_blank"
                sx={{ '&:hover': { color: '#0077b5' } }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://instagram.com" 
                target="_blank"
                sx={{ '&:hover': { color: '#E1306C' } }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ 
          mt: 4, 
          pt: 3, 
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center'
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Contact Management App. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
