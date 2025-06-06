'use client';

import { Box, Container, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        py: { xs: 10, md: 12 },
        mb: 8
      }}
    >
      {/* Background elements */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: '#0a1929',
        zIndex: -2
      }} />
      
      {/* Decorative shapes */}
      <Box sx={{ 
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
        opacity: 0.7,
        zIndex: -1
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        bottom: -80,
        left: -50,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        opacity: 0.6,
        zIndex: -1
      }} />
      
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
          alignItems: 'center',
          gap: 6
        }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant='h1' 
              gutterBottom
              sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                lineHeight: 1.1,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: { xs: '25%', md: 0 },
                  width: { xs: '50%', md: '80px' },
                  height: '4px',
                  background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
                }
              }}
            >
              CodeCustoms
            </Typography>
            
            <Typography 
              variant='h5' 
              gutterBottom
              sx={{ 
                fontWeight: 300,
                mb: 4,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)'
              }}
            >
              &quot;Boldly custom, no cookie-cutter&quot;
            </Typography>
            
            <Typography 
              variant='body1'
              sx={{ 
                mb: 4,
                maxWidth: '500px',
                mx: { xs: 'auto', md: 0 },
                color: 'rgba(255,255,255,0.7)'
              }}
            >
              We build custom websites from scratch, giving you full creative control and functionality 
              far beyond what template-based services can offer.
            </Typography>
            
            <Button 
              variant="contained" 
              size="large"
              href="/get-started"
              sx={{ 
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
                '&:hover': {
                  boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
                  transform: 'translateY(-3px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started
            </Button>
          </Box>
          
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <Box sx={{ 
              width: '100%',
              height: '300px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.1), rgba(33, 203, 243, 0.1))',
                zIndex: -1
              }
            }}>
              <Typography variant="h4" sx={{ fontWeight: 300, color: 'rgba(255,255,255,0.9)' }}>
                Custom Code
              </Typography>
            </Box>
            
            {/* Decorative code element */}
            <Box sx={{ 
              position: 'absolute',
              bottom: -30,
              right: -20,
              width: '150px',
              height: '150px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              transform: 'rotate(-15deg)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}