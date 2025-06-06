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

      <Container maxWidth="lg" sx={{ flex: 1, mt: 6, mb: 8 }}>
        <Box sx={{ position: 'relative' }}>
          <Typography 
            variant="h3" 
            align="left" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              mb: 4,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: 0,
                width: '80px',
                height: '4px',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              }
            }}
          >
            Get In Touch
          </Typography>
          
          {submitted ? (
            <Paper 
              elevation={4}
              sx={{ 
                p: 6,
                borderRadius: 3,
                textAlign: 'center',
                background: 'linear-gradient(to right, rgba(33, 150, 243, 0.02), rgba(33, 203, 243, 0.08))',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box sx={{ 
                position: 'absolute',
                top: -40,
                right: -40,
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: 'rgba(33, 150, 243, 0.1)',
                zIndex: 0
              }} />
              
              <Box sx={{ 
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}>
                <Typography 
                  variant="h4" 
                  color="primary" 
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Thank you for reaching out!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', fontSize: '1.1rem' }}>
                  We&apos;ve received your inquiry and will get back to you as soon as possible. 
                  Our team typically responds within 24-48 business hours.
                </Typography>
                <Button 
                  variant="contained" 
                  onClick={() => setSubmitted(false)}
                  sx={{ 
                    borderRadius: 50,
                    px: 4,
                    py: 1.2,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 4px 10px rgba(33, 150, 243, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 14px rgba(33, 150, 243, 0.4)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Another Message
                </Button>
              </Box>
            </Paper>
          ) : (
            <>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: '4fr 6fr' }, 
                gap: { xs: 4, md: 8 },
                position: 'relative'
              }}>
                {/* Contact Info Card */}
                <Box sx={{ position: 'relative' }}>
                  <Paper 
                    elevation={4} 
                    sx={{ 
                      p: 4, 
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #0a1929 0%, #1e3a5f 100%)',
                      color: 'white',
                      height: '100%',
                      position: 'relative',
                      zIndex: 1,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Box sx={{ 
                      position: 'absolute',
                      top: -30,
                      right: -30,
                      width: 120,
                      height: 120,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      zIndex: 0
                    }} />
                    
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 600,
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
                        Contact Information
                      </Typography>
                      
                      <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
                        Have questions about our services? Reach out and we&apos;ll get back to you as soon as possible.
                      </Typography>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#90caf9' }}>
                          codecustomerservice@yahoo.com
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                          Office Hours
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          Monday - Friday: 9AM - 5PM
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          Saturday - Sunday: Closed
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mt: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                          Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                          {/* Social media icons would go here */}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                  
                  {/* Decorative element */}
                  <Box sx={{ 
                    position: 'absolute',
                    width: '70px',
                    height: '70px',
                    borderRadius: '12px',
                    background: 'linear-gradient(45deg, #FF9800 30%, #FFC107 90%)',
                    bottom: -15,
                    left: -15,
                    transform: 'rotate(15deg)',
                    zIndex: 0,
                    display: { xs: 'none', md: 'block' }
                  }} />
                </Box>
                
                {/* Contact Form Card */}
                <Box sx={{ position: 'relative' }}>
                  <Paper 
                    elevation={6} 
                    sx={{ 
                      p: 4, 
                      borderRadius: 3,
                      background: 'white',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Stack spacing={3}>
                        <Typography 
                          variant="h5" 
                          gutterBottom 
                          sx={{ 
                            fontWeight: 600,
                            color: '#1976d2',
                            pb: 1,
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '40px',
                              height: '3px',
                              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            }
                          }}
                        >
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
                            borderRadius: 50,
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            boxShadow: '0 4px 14px rgba(33, 150, 243, 0.3)',
                            '&:hover': {
                              boxShadow: '0 6px 18px rgba(33, 150, 243, 0.4)',
                              transform: 'translateY(-3px)'
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Send Message
                        </Button>
                      </Stack>
                    </form>
                  </Paper>
                  
                  {/* Decorative element */}
                  <Box sx={{ 
                    position: 'absolute',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(33, 150, 243, 0.1)',
                    top: -20,
                    right: -20,
                    zIndex: 0,
                    display: { xs: 'none', md: 'block' }
                  }} />
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Container>
      
      <Footer />
    </Box>
  )
}