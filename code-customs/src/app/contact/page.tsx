'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Button, Container, Stack, TextField, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type ContactFormInputs = {
  name: string;
  email: string;
  phoneNo?: string;
  description: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const response = await axios.post("/api/inquiries", {
        ...data
      })

      if (response.status === 201) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Error submitting inquiry", error);
      alert("Failed to submit inquiry");
    }
  }

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
            mb: 2
          }}>
            Get In Touch
          </Typography>
          
          {submitted ? (
            <Box sx={{ 
              textAlign: 'center', 
              py: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Thank you for reaching out!
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: '600px' }}>
                We&apos;ve received your inquiry and will get back to you as soon as possible. 
                Our team typically responds within 24-48 business hours.
              </Typography>
              <Button 
                variant="outlined" 
                onClick={() => setSubmitted(false)}
                sx={{ borderRadius: 2 }}
              >
                Send Another Message
              </Button>
            </Box>
          ) : (
            <>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: 4 }}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                    Have questions about our services? Reach out and we&apos;ll get back to you as soon as possible.
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
                    <Typography variant="body1" color="primary">
                      codecustomerservice@yahoo.com
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Office Hours</Typography>
                    <Typography variant="body2">Monday - Friday: 9AM - 5PM</Typography>
                    <Typography variant="body2">Saturday - Sunday: Closed</Typography>
                  </Box>
                  
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                      {/* Social media icons would go here */}
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ p: 2 }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                      <Typography variant="h5" gutterBottom sx={{ mt: 0.5 }}>
                        Send us a message
                      </Typography>
                      
                      <TextField 
                        label="Name" 
                        required 
                        fullWidth 
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name?.message as string || ''}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        {...register("name", { required: "Name is required" })} 
                      />
                      
                      <TextField 
                        label="Email" 
                        type="email" 
                        required 
                        fullWidth 
                        variant="outlined"
                        error={!!errors.email} 
                        helperText={errors.email?.message as string || ''}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        {...register("email", {
                          required: "Email is required", 
                          pattern: { 
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
                            message: "Invalid email address" 
                          }
                        })} 
                      />
                      
                      <TextField 
                        label="Phone Number" 
                        type="tel" 
                        fullWidth 
                        variant="outlined"
                        error={!!errors.phoneNo} 
                        helperText={errors.phoneNo?.message as string || ''}
                        InputProps={{ sx: { borderRadius: 2 } }}
                        {...register("phoneNo", {
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Phone number must be 10 digits"
                          }
                        })} 
                      />
                      
                      <TextField 
                        label="How can we help you?" 
                        multiline 
                        rows={4} 
                        required 
                        fullWidth 
                        variant="outlined"
                        placeholder="Tell us about your project or inquiry..."
                        InputProps={{ sx: { borderRadius: 2 } }}
                        {...register("description", { required: "Description is required" })}
                      /> 
                      
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        sx={{ 
                          borderRadius: 2,
                          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                          py: 1.5
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </Box>
              </Box>
            </>
          )}
        </Paper>
      </Container>
      
      <Footer />
    </Box>
  )
}