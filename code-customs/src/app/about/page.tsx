import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Typography, Paper, Avatar } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          py: { xs: 4, md: 5 },
          mb: 4
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
          top: -80,
          right: -80,
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
          opacity: 0.6,
          zIndex: -1
        }} />
        
        <Box sx={{ 
          position: 'absolute',
          bottom: -100,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          opacity: 0.5,
          zIndex: -1
        }} />
        
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                mt: 3,
                position: 'relative',
                zIndex: 1
              }}>
            </Box>
          </Box>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ flex: 1, mb: 8 }}>
        {/* Origin Story Section */}
        <Box sx={{ 
          position: 'relative',
          mb: 8,
          mt: { xs: 0, md: -8 },
          zIndex: 1
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
              How CodeCustoms Came About
            </Typography>
            
            <Typography variant="body1" sx={{ mt: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
              {`I wanted to start a business but could never think of what. Then I asked myself, "What do I 
              absolutely love to do besides playing COD all day?". The answer to that is "making websites" -  
              which, I'm sure, isn't a common response for someone with my background. As weird as it sounds, 
              I actually enjoy building websites.`} 
            </Typography>
          </Paper>
          
          {/* Decorative element */}
          <Box sx={{ 
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '15px',
            background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
            bottom: -20,
            right: 100,
            transform: 'rotate(15deg)',
            zIndex: -1,
            display: { xs: 'none', md: 'block' }
          }} />
        </Box>
        
        {/* Problem & Solution Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: { xs: 4, md: 6 },
          mb: 8
        }}>
          <Box sx={{ 
            position: 'relative',
            overflow: 'visible'
          }}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%)',
                color: 'white',
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  color: 'white',
                  pb: 2,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: '#FF9800',
                  }
                }}
              >
                The Problem
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: 'rgba(255,255,255,0.9)' }}>
                While doing some research to see what other companies offer, I noticed a trend: most of them rely heavily on pre-built templates with strict design limitations. That&apos;s where I saw an opportunity.
              </Typography>
            </Paper>
            
            {/* Decorative element */}
            <Box sx={{ 
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '8px',
              background: 'rgba(33, 150, 243, 0.2)',
              top: -15,
              left: -15,
              transform: 'rotate(-10deg)',
              zIndex: -1,
              display: { xs: 'none', md: 'block' }
            }} />
          </Box>
          
          <Box sx={{ 
            position: 'relative',
            overflow: 'visible',
            mt: { xs: 0, md: 4 }
          }}>
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                borderRadius: 3,
                background: 'white',
                border: '1px solid #e0e0e0',
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  color: '#1976d2',
                  pb: 2,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: '#2196F3',
                  }
                }}
              >
                Our Solution
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                Instead of working with cookie-cutter designs, CodeCustoms builds websites from scratch - with code - tailored to exactly what you envision. You bring the ideas, and we bring them to life.
              </Typography>
            </Paper>
            
            {/* Decorative element */}
            <Box sx={{ 
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255, 152, 0, 0.1)',
              bottom: -20,
              right: -20,
              zIndex: -1,
              display: { xs: 'none', md: 'block' }
            }} />
          </Box>
        </Box>
        
        {/* Mission Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 5, 
            borderRadius: 3,
            background: 'linear-gradient(to right, rgba(33, 150, 243, 0.05), rgba(33, 203, 243, 0.1))',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ 
            position: 'absolute',
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            zIndex: 0
          }} />
          
          <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Our Mission
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.2rem", 
                maxWidth: '800px', 
                mx: 'auto',
                fontWeight: 300
              }}
            >
              To create unique, custom-coded websites that perfectly represent our clients&apos; vision and needs.
            </Typography>
          </Box>
        </Paper>
      </Container>
      
      <Footer />
    </Box>
  )
}