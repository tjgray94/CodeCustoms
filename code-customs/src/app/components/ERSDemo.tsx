'use client';

import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ERSDemo() {
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
        image="ERS.png"
        alt="Employee Reimbursement System"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>ERS</Typography>
        <Typography variant="body2" color="text.secondary">
          This application allows users to apply for reimbursements for expenses incurred on
          company time. Employees can login and view their requests while managers can view and
          manage the employee inventory as well as approve or deny requests.
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