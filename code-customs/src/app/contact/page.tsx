'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

type ContactFormInputs = {
  name: string;
  email: string;
  phoneNo?: string;
  description: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const response = await axios.post("/api/inquiries", {
        ...data
      })

      if (response.status === 201) {
        alert("Inquiry submitted successfully!")
      }

      reset();
    } catch (error) {
      console.error("Error submitting inquiry", error);
      alert("Failed to submit inquiry");
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="sm" sx={{ flex: 1, mt: 6, mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>Contact Us!</Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          For all website inquiries, reach us at codecustomerservice@yahoo.com.
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField label="Name" required fullWidth {...register("name", { required: "Name is required" })} />
            <TextField label="Email" type="email" required fullWidth error={!!errors.email} helperText={errors.email?.message as string || ''}
              {...register("email", {
                required: "Email is required", 
                pattern: { 
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
                  message: "Invalid email address" 
                }
              })} 
            />
            <TextField label="Phone Number" type="tel" fullWidth error={!!errors.phoneNo} helperText={errors.phoneNo?.message as string || ''}
              {...register("phoneNo", {
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits"
                }
              })} 
            />
            <TextField label="Description" multiline rows={4} required fullWidth 
              {...register("description", { required: "Description is required" })}
            /> 
            <Button type="submit" variant="contained" color="primary">Submit Inquiry</Button>
          </Stack>
        </form>
      </Container>
      
      <Footer />
    </Box>
  )
}