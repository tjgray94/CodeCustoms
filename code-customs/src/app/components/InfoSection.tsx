'use client';

import { Box, Paper, Typography } from "@mui/material";

export default function InfoSection() {
  return (
    <Box sx={{ 
      position: 'relative',
      mb: 12,
      mt: { xs: 4, md: -8 },
      zIndex: 1
    }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: { xs: 4, md: 6 }
      }}>
        <Paper 
          elevation={6} 
          sx={{ 
            p: 5, 
            borderRadius: 3,
            background: 'white',
            position: 'relative',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: '#1976d2',
              pb: 2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '60px',
                height: '4px',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              }
            }}
          >
            What is CodeCustoms?
          </Typography>
          <Typography variant="body1" sx={{ mt: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
            CodeCustoms is a service that offers full creative control over your website by building it
            from the ground up, allowing functionality far beyond the capabilities of other services.
            We create custom solutions tailored to your specific needs and vision.
          </Typography>
        </Paper>

        <Paper 
          elevation={4} 
          sx={{ 
            p: 5, 
            borderRadius: 3,
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
            How we build websites
          </Typography>
          <Typography variant="body1" sx={{ mt: 3, fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)' }}>
            Depending on the needs and requirements, your website
            will be built and deployed using today&apos;s most up-to-date technologies.
            Our custom approach ensures optimal performance and unique design.
          </Typography>
        </Paper>
      </Box>
      
      {/* Decorative element */}
      <Box sx={{ 
        position: 'absolute',
        width: '120px',
        height: '120px',
        borderRadius: '20px',
        background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
        bottom: { xs: 'auto', md: -30 },
        top: { xs: -30, md: 'auto' },
        left: { xs: 'auto', md: '50%' },
        right: { xs: -30, md: 'auto' },
        transform: { xs: 'rotate(15deg)', md: 'translateX(-50%) rotate(15deg)' },
        zIndex: 1,
        display: { xs: 'none', md: 'block' }
      }} />
    </Box>
  )
}