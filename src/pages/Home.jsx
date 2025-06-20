import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Paper,
  Avatar,
  Rating,
  Divider,
  Stack,
} from '@mui/material';
import {
  ContactPhone,
  Message,
  Security,
  Speed,
  Analytics,
  CloudSync,
  Campaign,
  AutoGraph,
  // Remove Integration as it doesn't exist
  Support,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';

const features = [
  {
    icon: <ContactPhone sx={{ fontSize: 40 }} />,
    title: 'Contact Management',
    description:
      'Easily organize and manage your contacts with our intuitive interface. Add, edit, and delete contacts effortlessly.',
  },
  {
    icon: <Message sx={{ fontSize: 40 }} />,
    title: 'Bulk SMS',
    description:
      'Send messages to multiple contacts at once. Perfect for announcements, greetings, or important updates.',
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Secure Access',
    description:
      'Your contacts are protected with secure authentication. Only authorized users can access the contact database.',
  },
  {
    icon: <Speed sx={{ fontSize: 40 }} />,
    title: 'Fast & Responsive',
    description:
      'Enjoy a smooth experience with our fast and responsive design. Works perfectly on all devices.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'This platform has revolutionized how we manage our contact lists. The bulk SMS feature is a game-changer!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Sales Manager',
    company: 'GlobalTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'The analytics dashboard provides invaluable insights for our marketing campaigns. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    role: 'CEO',
    company: 'Innovate Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'Outstanding customer support and regular feature updates. This is exactly what we needed for our growing business.',
    rating: 5,
  },
];

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          pt: 15,
          pb: 15,
          mb: 6,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")' ,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Contact Management Made Simple
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Organize your contacts and communicate efficiently with our
                powerful contact management system.
              </Typography>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature) => (
            <Grid item key={feature.title} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    align="center"
                  >
                    {feature.title}
                  </Typography>
                  <Typography align="center">{feature.description}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    component={RouterLink}
                    to="/register"
                    size="small"
                    color="primary"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Analytics Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Analytics Dashboard"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Powerful Analytics
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary">
                Track your communication metrics and engagement rates with our advanced analytics dashboard.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Paper sx={{ p: 2, flex: 1 }}>
                  <Analytics color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">Real-time Insights</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: 1 }}>
                  <CloudSync color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">Auto Sync</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bulk SMS Section */}
      <Box sx={{ py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" direction="row-reverse">
            <Grid item xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
                alt="Bulk SMS"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Bulk SMS Made Easy
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary">
                Reach your entire contact list with just a few clicks. Perfect for announcements, promotions, and updates.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Paper sx={{ p: 2, flex: 1 }}>
                  <Campaign color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">Mass Messaging</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: 1 }}>
                  <Message color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h6">Smart Templates</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Integration Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8, mb: 6 }}>        
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Seamless Integration
              </Typography>
              <Typography variant="h6" paragraph color="text.secondary">
                Connect with your favorite tools and services. Our platform integrates smoothly with popular CRM systems and communication platforms.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  ✓ CRM Integration
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  ✓ API Access
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  ✓ Custom Workflows
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Integration"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            What Our Users Say
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                name: 'John Smith',
                role: 'Marketing Manager',
                content: 'This contact management system has transformed how we handle our client communications. The bulk SMS feature is a game-changer!',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              },
              {
                name: 'Sarah Johnson',
                role: 'Small Business Owner',
                content: 'The interface is intuitive and the features are exactly what we needed. Customer support has been exceptional!',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Sales Director',
                content: 'The analytics dashboard provides invaluable insights into our communication patterns. Highly recommended!',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
              }
            ].map((testimonial, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ flex: 1 }}>
                    {testimonial.content}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;