'use client';

import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { Box, Divider, Paper, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import LaunchIcon from '@mui/icons-material/Launch';
import React from 'react';

export default function DevelopmentProcess() {
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
        gutterBottom
        sx={{
          fontWeight: 700,
          color: 'white',
          pb: 2,
          position: 'relative',
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
        Our Development Process
      </Typography>
          
      <Divider />
          
      <Box sx={{ maxWidth: '800px', mx: 'auto', py: 2 }}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#1976d2' }}>
                <DesignServicesIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper 
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Typography variant="h6" component="span" color="primary">
                  Design & Planning
                </Typography>
                <Typography>We collaborate to understand your vision and create a detailed plan for your custom website.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#1976d2' }}>
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper 
                elevation={2} 
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Typography variant="h6" component="span" color="primary">
                  Custom Development
                </Typography>
                <Typography>We write clean, efficient code from scratch to build your site exactly as envisioned.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#1976d2' }}>
                <BuildIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Typography variant="h6" component="span" color="primary">
                  Testing & Refinement
                </Typography>
                <Typography>We thoroughly test functionality and make refinements to ensure everything works perfectly.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#1976d2' }}>
                <LaunchIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <Typography variant="h6" component="span" color="primary">
                  Launch & Support
                </Typography>
                <Typography>We deploy your site and provide ongoing support to keep everything running smoothly.</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Paper>
  )
}