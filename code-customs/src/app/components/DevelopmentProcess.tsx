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
        Our Development Process
      </Typography>
          
      <Divider sx={{ mb: 4 }} />
          
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
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
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
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
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
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
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
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
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