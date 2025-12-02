'use client';

import { Typography, Box, Paper } from '@mui/material';
import React from 'react';
import BankAppDemo from './BankAppDemo';
import ERSDemo from './ERSDemo';
import GameStoreAppDemo from './GameStoreAppDemo';

export default function SampleProjects() {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        mt: 6,
        borderRadius: 2,
        background: 'linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%)',
        color: 'white',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }
      }}
    >
      <Typography 
        variant="h4" 
        align="left" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          color: 'white',
          pb: 2,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '4px',
            background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
          }
        }}
      >
        Sample Projects
      </Typography>
      
      <Typography 
        variant="body1" 
        gutterBottom 
        sx={{ 
          mb: 4, 
          mt: 2,
          fontSize: '1.1rem',
          lineHeight: 1.7
        }}
      >
        I&apos;ve grown as a developer by building real-world projects with a variety of 
        tools and technologies. While I&apos;m still looking for the right opportunity,
        I continue to push myself every day by learning, experimenting, and writing code.
        Below are some of the projects that highlight my experience and passion for development:
      </Typography>
      
      {/* Enhanced Portfolio Grid */}
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, 
          gap: 3
        }}>
          <BankAppDemo />
          
          <GameStoreAppDemo />
          
          <ERSDemo />
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          
        </Box>
      </Box>
    </Paper>
  )
}