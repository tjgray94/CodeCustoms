'use client';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import { Box, Container } from "@mui/material";
import DevelopmentProcess from "./components/DevelopmentProcess";
import BenefitsComparison from "./components/BenefitsComparison";
import SampleProjects from "./components/SampleProjects";
import Footer from "./components/Footer";
import CallToActionSection from "./components/CallToActionSection";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      {/* Asymmetric Hero Section */}
      <HeroSection />

      <Container maxWidth="lg" sx={{ mb: 10, flex: 1 }}>
        {/* Asymmetric info section */}
        <InfoSection />
        
        {/* Development Process Timeline */}
        <DevelopmentProcess />
        
        {/* Benefits Comparison */}
        <BenefitsComparison />
        
        {/* Sample Projects */}
        <SampleProjects />
      </Container>

      <Footer />

      {/* Asymmetric Call to Action Section */}
      <CallToActionSection />

    </Box>
  );
}
