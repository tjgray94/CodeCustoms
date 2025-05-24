import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Typography, Paper, Divider, Avatar } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="md" sx={{ flex: 1, mt: 6, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h3" align="center" gutterBottom sx={{ 
            fontWeight: 600, 
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 3
          }}>
            Our Story
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Avatar 
              sx={{ 
                width: 120, 
                height: 120, 
                border: '4px solid #f0f0f0',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
              alt="Founder"
              src="/founder.jpg" // Replace with actual image path if available
            />
          </Box>
          
          <Box sx={{ 
            p: 3, 
            backgroundColor: 'rgba(33, 150, 243, 0.05)', 
            borderRadius: 2,
            mb: 4
          }}>
            <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 500 }}>
              How CodeCustoms Came About
            </Typography>
            
            <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
              {`I wanted to start a business but could never think of what. Then I asked myself, "What do I 
              absolutely love to do besides playing COD all day?". The answer to that is "making websites" -  
              which, I'm sure, isn't a common response for someone with my background. As weird as it sounds, 
              I actually enjoy building websites.`} 
            </Typography>
          </Box>
          
          <Divider sx={{ my: 4 }} />
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: '#2196F3', fontWeight: 500 }}>
                The Problem
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                While doing some research to see what other companies offer, I noticed a trend: most of them rely heavily on pre-built templates with strict design limitations. That&apos;s where I saw an opportunity.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: '#2196F3', fontWeight: 500 }}>
                Our Solution
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                Instead of working with cookie-cutter designs, CodeCustoms builds websites from scratch - with code - tailored to exactly what you envision. You bring the ideas, and we bring them to life.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ mt: 5, p: 3, borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
              To create unique, custom-coded websites that perfectly represent our clients' vision and needs.
            </Typography>
          </Box>
        </Paper>
      </Container>
      
      <Footer />
    </Box>
  )
}