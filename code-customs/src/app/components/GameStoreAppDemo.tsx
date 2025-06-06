'use client';

import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function GameStoreAppDemo() {
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
        image="GameStoreApp.png"
        alt="GameStoreApp"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>GameStoreApp</Typography>
        <Typography variant="body2" color="text.secondary">
          This application was created to manage the inventory of video games. Users are able to 
          search and view the list of games along with their details and demonstrates simple CRUD 
          operations when interacting with the site.
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