'use client';

import { Paper, Typography, Divider, Box } from '@mui/material';
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
        borderRadius: 2
      }}
    >
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        sx={{ 
          fontWeight: 600,
          mb: 3,
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}
      >
        Sample Projects
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
        I&apos;ve dedicated my IT journey so far to growing as a developer by building personal projects using
        a variety of languages and frameworks. While the right opportunity hasn&apos;t arrived yet, I&apos;m
        undeterred -- I continue to learn, experiment, and write code everyday. Whether that opportunity comes 
        tomorrow or years from now, I&apos;ll be ready (fingers intact, hopefully). Here are a few of the 
        projects I&apos;ve worked on along the way:
      </Typography>

      {/* Enhanced Portfolio Grid */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, 
          gap: 3
        }}>
          <BankAppDemo />
          
          <GameStoreAppDemo />
          
          <ERSDemo />
        </Box>
      </Box>
    </Paper>
  )
}