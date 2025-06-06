'use client';

import { Paper, Typography, Divider, Box } from '@mui/material';
import React from 'react';

export default function BenefitsComparison() {
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
        Why Choose Custom Development?
      </Typography>
      
      <Divider sx={{ mb: 4 }} />
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        <Paper 
          elevation={1} 
          sx={{ 
            p: 3, 
            borderRadius: 2,
            bgcolor: '#f9f9f9',
            border: '1px solid #e0e0e0'
          }}
        >
          <Typography 
            variant="h5" 
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: '#757575',
              pb: 2
            }}
          >
            Template Websites
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#757575', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Quick setup</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#757575', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Lower initial cost</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ff5252', fontSize: '1.5rem' }}>✗</Box>
              <Typography>Limited customization</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ff5252', fontSize: '1.5rem' }}>✗</Box>
              <Typography>Ongoing subscription fees</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ff5252', fontSize: '1.5rem' }}>✗</Box>
              <Typography>Performance limitations</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ff5252', fontSize: '1.5rem' }}>✗</Box>
              <Typography>Looks like other websites</Typography>
            </Box>
          </Box>
        </Paper>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            borderRadius: 2,
            bgcolor: '#e8f4fd',
            border: '1px solid #bbdefb',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 12, 
              right: -30, 
              transform: 'rotate(45deg)',
              bgcolor: '#2196f3',
              color: 'white',
              py: 0.5,
              px: 4,
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}
          >
            RECOMMENDED
          </Box>
          
          <Typography 
            variant="h5" 
            align="center"
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: '#1976d2',
              pb: 2
            }}
          >
            CodeCustoms Development
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#4caf50', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Full creative control</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#4caf50', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Unique, branded design</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#4caf50', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Custom functionality</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#4caf50', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Better performance</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#4caf50', fontSize: '1.5rem' }}>✓</Box>
              <Typography>No monthly platform fees</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#4caf50', fontSize: '1.5rem' }}>✓</Box>
              <Typography>Scalable as your business grows</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Paper>
  )
}