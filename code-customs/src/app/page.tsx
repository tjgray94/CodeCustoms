'use client';

import Navbar from "./components/Navbar";
import BankAppDemo from "./components/BankAppDemo";
import GameStoreAppDemo from "./components/GameStoreAppDemo";
import CurrencyConverterDemo from "./components/CurrencyConverterDemo";
import Footer from "./components/Footer";
import { Box, Divider, Stack, Typography, Paper, Container } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Navbar />

      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        <Typography variant='h2' align="center" gutterBottom>CodeCustoms</Typography>
        <Typography variant='h5' align="center" gutterBottom>"Boldly custom, no cookie-cutter"</Typography>

        <Stack spacing={4} mt={4}>
          <Paper elevation={6} sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>What is CodeCustoms?</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle1">
              CodeCustoms is a service that offers full creative control over your website by building it
              from the ground up, allowing functionality far beyond the capabilities of other services.
            </Typography>
          </Paper>

          <Paper elevation={6} sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>How we build websites?</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle1">Depending on the needs and requirements, your website
              will be built and deployed using today's most up-to-date technologies.
            </Typography>
          </Paper>

          <Paper elevation={6} sx={{ p: 3 }}>
            <Typography variant="h6" align="left" fontWeight="bold" gutterBottom>Sample Projects</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Throughout my IT career so far, I have been working to become a better developer by working on 
              self-projects using different languages and frameworks in hopes of advancing my career. Nothing
              much has happened yet but that will not stop me. I plan to continue learning and writing code
              even when the right opportunity finally comes knocking or until my fingers fall off. Anyways, here's 
              a few of the projects I've worked on so far:
            </Typography>

            <Box mt={3} display="flex" flexDirection="column" alignItems="center" gap={3}>
              <BankAppDemo />
              <GameStoreAppDemo />
              <CurrencyConverterDemo />
            </Box>
          </Paper>
        </Stack>
      </Container>

      <Footer />

      {/* <div className="bg-white text-gray-800 font-sans">
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Outgrown Shopify? We build custom websites for brands that demand more.
      </p>
    <section className="bg-gray-100 px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-4">Why Go Custom?</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Shopify gets you started. We help you scale — with fully custom design, performance, and backend logic tailored to your business.
      </p>
    </section>
    <p className="text-lg mb-8">No templates. No monthly app fees. Just clean, high-performing custom code.</p>
  </div> */}
    </Box>
  );
}
