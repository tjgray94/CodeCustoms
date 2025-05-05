import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="md" sx={{ flex: 1, mt: 6, mb: 8 }}>
        <Typography variant="h3" gutterBottom align="center">How CodeCustoms Came About</Typography>
        
        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
          I wanted to start a business but could never think of what. Then I asked myself, "What do I 
          absolutely love to do besides playing COD all day?". The answer to that is "making websites" -  
          which, I&apos;m sure, isn&apos;t a common response for someone with my background. As weird as it sounds, 
          I actually enjoy building websites. 
        </Typography>
          
        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
          So... how about a website-making business? While doing some research to see what other 
          companies offer, I noticed a trend: most of them rely heavily on pre-built templates with strict
          design limitations. That&apos;s where I saw an opportunity. 
        </Typography>  
          
        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem", lineHeight: 1.8 }}>
          Instead of working with cookie-cutter designs, CodeCustoms builds websites from scratch - with 
          code - tailored to exactly what you envision. You bring the ideas, and we bring them to life.
        </Typography>
      </Container>
      <Footer />
    </Box>
  )
}