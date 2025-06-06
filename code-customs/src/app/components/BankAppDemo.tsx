'use client';

import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function BankAppDemo() {
  return (
    <Card elevation={2} sx={{ 
      borderRadius: 2,
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
      }
    }}>
      <CardMedia
        component="img"
        height="160"
        image="BankApp.png"
        alt="BankApp"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>BankApp</Typography>
        <Typography variant="body2" color="text.secondary">
          Standard banking application having simple features i.e. login functionality, create and 
          delete user accounts, open checking and/or savings account, with ability to deposit, withdraw, 
          and/or transfer funds as well as view transaction history.
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="outlined" 
            sx={{ 
              borderRadius: 2,
              px: 3,
              minWidth: '140px'
            }}
          >
            View Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}