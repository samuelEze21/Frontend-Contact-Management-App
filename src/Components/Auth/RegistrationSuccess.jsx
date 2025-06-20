import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Avatar,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function RegistrationSuccess() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'success.main',
              width: 60,
              height: 60,
            }}
          >
            <CheckCircleOutlineIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Registration Successful!
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Your account has been created successfully. You can now sign in to
            access your account.
          </Typography>

          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
          >
            Sign In
          </Button>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            fullWidth
          >
            Back to Home
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}