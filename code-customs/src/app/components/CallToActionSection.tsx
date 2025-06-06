'use client';

import { Box, Container, Typography, Button } from "@mui/material";

export default function CallToActionSection() {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        py: 10,
        mt: 4
      }}
    >
      {/* Background elements */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%)',
        zIndex: -2
      }} />
      
      {/* Decorative shapes */}
      <Box sx={{ 
        position: 'absolute',
        top: -80,
        left: -80,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        opacity: 0.2,
        zIndex: -1
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        bottom: -100,
        right: -100,
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
        opacity: 0.2,
        zIndex: -1
      }} />
      
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 6,
          alignItems: 'center'
        }}>
          <Box sx={{ 
            textAlign: { xs: 'center', md: 'left' },
            color: 'white'
          }}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
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
              Ready to stand out?
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mt: 4, 
                mb: 5, 
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '500px',
                mx: { xs: 'auto', md: 0 }
              }}
            >
              No monthly app fees. No templates. Just clean, high-performing custom code tailored to your business needs.
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            position: 'relative'
          }}>
            <Box sx={{ 
              position: 'relative',
              zIndex: 1
            }}>
              <Button 
                variant="contained" 
                href="/contact"
                sx={{ 
                  borderRadius: '50px',
                  px: 6,
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
                  boxShadow: '0 10px 20px rgba(255, 152, 0, 0.3)',
                  '&:hover': {
                    boxShadow: '0 15px 30px rgba(255, 152, 0, 0.4)',
                    transform: 'translateY(-5px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Contact Us
              </Button>
            </Box>
            
            {/* Decorative elements */}
            <Box sx={{ 
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              top: -30,
              right: { xs: 'auto', md: 40 },
              left: { xs: 40, md: 'auto' },
              transform: 'rotate(15deg)',
              zIndex: 0,
              display: { xs: 'none', md: 'block' }
            }} />
            
            <Box sx={{ 
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              bottom: -20,
              right: { xs: 'auto', md: 120 },
              left: { xs: 120, md: 'auto' },
              transform: 'rotate(-10deg)',
              zIndex: 0,
              display: { xs: 'none', md: 'block' }
            }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}