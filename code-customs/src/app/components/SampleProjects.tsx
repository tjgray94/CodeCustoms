'use client';

import { Typography, Box } from '@mui/material';
import React from 'react';
import BankAppDemo from './BankAppDemo';
import ERSDemo from './ERSDemo';
import GameStoreAppDemo from './GameStoreAppDemo';

export default function SampleProjects() {
  return (
    <Box sx={{ 
      position: 'relative',
      mt: 12,
      mb: 8,
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: '#f8f9fa',
        zIndex: -2
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        top: -100,
        left: -100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(33, 150, 243, 0.05)',
        zIndex: -1
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        bottom: -150,
        right: -150,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'rgba(255, 152, 0, 0.05)',
        zIndex: -1
      }} />
      
      <Typography 
        variant="h3" 
        align="left" 
        gutterBottom
        sx={{ 
          fontWeight: 800,
          mb: 1,
          ml: { xs: 2, md: 6 },
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: 0,
            width: '80px',
            height: '4px',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          }
        }}
      >
        Sample Projects
      </Typography>
      
      <Typography 
        variant="body1" 
        gutterBottom 
        sx={{ 
          mb: 6, 
          ml: { xs: 2, md: 6 },
          mr: { xs: 2, md: 6 },
          mt: 3,
          maxWidth: '800px',
          fontSize: '1.1rem',
          lineHeight: 1.7
        }}
      >
        I&apos;ve dedicated my IT journey so far to growing as a developer by building personal projects using
        a variety of languages and frameworks. While the right opportunity hasn&apos;t arrived yet, I&apos;m
        undeterred -- I continue to learn, experiment, and write code everyday. Whether that opportunity comes 
        tomorrow or years from now, I&apos;ll be ready (fingers intact, hopefully). Here are a few of the 
        projects I&apos;ve worked on along the way:
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
    </Box>
  )
}