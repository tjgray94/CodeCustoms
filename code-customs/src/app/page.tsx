'use client';

import Navbar from "./components/Navbar";
import DevelopmentProcess from "./components/DevelopmentProcess";
import BenefitsComparison from "./components/BenefitsComparison";
import SampleProjects from "./components/SampleProjects";
import Footer from "./components/Footer";
import { Box, Typography, Paper, Container, Button } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #0c2e4f 0%, #1976d2 100%)',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant='h1' 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            CodeCustoms
          </Typography>
          
          <Typography 
            variant='h5' 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 300,
              mb: 4,
              fontStyle: 'italic'
            }}
          >
            &quot;Boldly custom, no cookie-cutter&quot;
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="/get-started"
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
                '&:hover': {
                  boxShadow: '0 6px 18px rgba(0,0,0,0.4)'
                }
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mb: 6, flex: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              height: '100%',
              borderRadius: 2,
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
                pb: 1,
                borderBottom: '2px solid #e0e0e0'
              }}
            >
              What is CodeCustoms?
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              CodeCustoms is a service that offers full creative control over your website by building it
              from the ground up, allowing functionality far beyond the capabilities of other services.
            </Typography>
          </Paper>

          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              height: '100%',
              borderRadius: 2,
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
                pb: 1,
                borderBottom: '2px solid #e0e0e0'
              }}
            >
              How we build websites?
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Depending on the needs and requirements, your website
              will be built and deployed using today&apos;s most up-to-date technologies.
            </Typography>
          </Paper>
        </Box>
        
        {/* Development Process Timeline */}
        <DevelopmentProcess />
        
        {/* Benefits Comparison */}
        <BenefitsComparison />

        {/* Sample Projects */}
        <SampleProjects />
      </Container>

      <Footer />

      {/* Call to action section */}
      <Box 
        sx={{ 
          backgroundColor: '#f5f5f5',
          py: 6,
          mt: 4
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to stand out?
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: '700px', mx: 'auto', mb: 4 }}>
            No monthly app fees. No templates. Just clean, high-performing custom code tailored to your business needs.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="primary"
              href="/contact"
              sx={{ 
                borderRadius: 2,
                px: 4,
                py: 1.5,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
