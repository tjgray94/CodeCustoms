'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Typography, Container, TextField, Button, Stack, MenuItem, InputLabel, Select, FormControl, Paper, Stepper, Step, StepLabel, Divider, Chip } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState, useRef } from "react";
import Image from "next/image";

type FormInputs = {
  businessName: string;
  businessType: string;
  colorScheme?: string;
  pageRange?: string;
  features?: string;
  logoUpload?: FileList;
  designUpload?: FileList;
};

export default function GetStartedPage() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [sketchPreview, setSketchPreview] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const businessNameRef = useRef<string>("");

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormInputs>({
    defaultValues: { businessType: "", pageRange: "" }
  });
  
  const onSubmit = async (data: FormInputs) => {
    try {
      const formData = new FormData();

      formData.append("businessName", data.businessName);
      formData.append("businessType", data.businessType);
      if (data.colorScheme) formData.append("colorScheme", data.colorScheme);
      if (data.pageRange) formData.append("pageRange", data.pageRange);
      if (data.features) formData.append("features", data.features);

      if (data.logoUpload?.[0]) {
        formData.append("logo", data.logoUpload[0]);
      }

      if (data.designUpload?.[0]) {
        formData.append("sketch", data.designUpload[0]);
      }

      const response = await axios.post("/api/projects", formData, {
        headers: { "Content-Type": "multipart/form-data"}
      })

      if (response.status === 201) {
        alert("Details submitted successfully!");
        reset();
        setLogoPreview(null);
        setSketchPreview(null);
      }

    } catch (error) {
      console.error("Error submitting details", error);
      alert("Failed to submit details");
    }
  }

  const steps = ['Business Info', 'Design Assets', 'Project Details'];
  
  const handleNext = () => {
    if (activeStep === 0) {
      const businessNameValue = businessNameRef.current;
      if (!businessNameValue || businessNameValue.trim() === "") {
        alert("Please enter a business name before proceeding");
        return;
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
            Let&apos;s Get Started!
          </Typography>
          
          <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
            Provide some details so we can gauge a deadline and create your perfect website
          </Typography>
          
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <Divider sx={{ mb: 4 }} />
     
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0 && (
              <Stack spacing={3}>
                <TextField 
                  label="Business Name" 
                  required 
                  fullWidth 
                  variant="outlined"
                  error={!!errors.businessName} 
                  helperText={errors.businessName?.message as string || ''}
                  {...register("businessName", { 
                    required: "A Business Name is required",
                    onChange: (e) => { businessNameRef.current = e.target.value; }
                  })}
                  InputProps={{ sx: { borderRadius: 2 } }}
                />

                <Controller name="businessType" control={control} rules={{ required: "Business Type is required" }}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.businessType}>
                      <InputLabel>Business Type</InputLabel>
                      <Select {...field} label="Business Type" sx={{ borderRadius: 2 }}>
                        <MenuItem value="E_commerce">E-commerce</MenuItem>
                        <MenuItem value="Portfolio">Portfolio</MenuItem>
                        <MenuItem value="Service_based">Service-Based</MenuItem>
                        <MenuItem value="Blog">Blog</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={handleNext}
                    sx={{ 
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Stack>
            )}
            
            {activeStep === 1 && (
              <Stack spacing={3}>
                <Typography variant="h6" gutterBottom>Upload Your Brand Assets</Typography>
                
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                  <Box>
                    <Controller name="logoUpload" control={control} defaultValue={undefined} 
                      render={({ field }) => (
                        <Box sx={{ 
                          border: '2px dashed #ccc', 
                          borderRadius: 2, 
                          p: 3, 
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transition: 'all 0.3s',
                          '&:hover': { borderColor: '#2196F3' }
                        }}>
                          {!logoPreview ? (
                            <>
                              <Typography variant="body1" gutterBottom>Logo Upload</Typography>
                              <Button 
                                variant="outlined" 
                                component="label"
                                sx={{ borderRadius: 2, mt: 1 }}
                              >
                                Choose File
                                <input type="file" hidden accept="image/*" 
                                  onChange={(e) => {
                                    const file = e.target.files?.[0] || null;
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => { setLogoPreview(reader.result as string) }
                                      reader.readAsDataURL(file);
                                    } else {
                                      setLogoPreview(null);
                                    }
                                    field.onChange(e.target.files);
                                  }}
                                />
                              </Button>
                              <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                                Recommended: PNG or SVG with transparent background
                              </Typography>
                            </>
                          ) : (
                            <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 150 }}>
                              <Image 
                                src={logoPreview} 
                                alt="Logo Preview" 
                                style={{ 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: "contain", 
                                  maxHeight: 150 
                                }} 
                              />
                              <Button 
                                size="small" 
                                color="error" 
                                sx={{ position: 'absolute', top: 0, right: 0 }}
                                onClick={() => {
                                  setLogoPreview(null);
                                  field.onChange(null);
                                }}
                              >
                                Remove
                              </Button>
                            </Box>
                          )}
                        </Box>
                      )}
                    />
                  </Box>
                  
                  <Box>
                    <Controller name="designUpload" control={control} defaultValue={undefined}
                      render={({ field }) => (
                        <Box sx={{ 
                          border: '2px dashed #ccc', 
                          borderRadius: 2, 
                          p: 3, 
                          textAlign: 'center',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transition: 'all 0.3s',
                          '&:hover': { borderColor: '#2196F3' }
                        }}>
                          {!sketchPreview ? (
                            <>
                              <Typography variant="body1" gutterBottom>Design/Sketch Upload</Typography>
                              <Button 
                                variant="outlined" 
                                component="label"
                                sx={{ borderRadius: 2, mt: 1 }}
                              >
                                Choose File
                                <input type="file" hidden accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0] || null;
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onloadend = () => { setSketchPreview(reader.result as string ) }
                                      reader.readAsDataURL(file);
                                    } else {
                                      setSketchPreview(null);
                                    }
                                    field.onChange(e.target.files);
                                  }}
                                />
                              </Button>
                              <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                                Upload any design mockups or sketches you have
                              </Typography>
                            </>
                          ) : (
                            <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: 150 }}>
                              <Image 
                                src={sketchPreview} 
                                alt="Sketch Preview" 
                                style={{ 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: "contain", 
                                  maxHeight: 150 
                                }} 
                              />
                              <Button 
                                size="small" 
                                color="error" 
                                sx={{ position: 'absolute', top: 0, right: 0 }}
                                onClick={() => {
                                  setSketchPreview(null);
                                  field.onChange(null);
                                }}
                              >
                                Remove
                              </Button>
                            </Box>
                          )}
                        </Box>
                      )}
                    />
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button onClick={handleBack} sx={{ borderRadius: 2 }}>
                    Back
                  </Button>
                  <Button 
                    variant="contained" 
                    onClick={handleNext}
                    sx={{ 
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Stack>
            )}
            
            {activeStep === 2 && (
              <Stack spacing={3}>
                <Typography variant="h6" gutterBottom>Project Specifications</Typography>
                
                <TextField 
                  label="Color Scheme" 
                  placeholder="e.g., Blue and white, Earth tones, etc."
                  fullWidth 
                  variant="outlined"
                  InputProps={{ sx: { borderRadius: 2 } }}
                  {...register("colorScheme")} 
                />

                <Controller name="pageRange" control={control}
                  render={({ field }) => (
                    <FormControl fullWidth error={!!errors.pageRange}>
                      <InputLabel>Page Range</InputLabel>
                      <Select {...field} label="Page Range" sx={{ borderRadius: 2 }}>
                        <MenuItem value="OneToThree">1-3 Pages</MenuItem>
                        <MenuItem value="FourToSix">4-6 Pages</MenuItem>
                        <MenuItem value="SevenPlus">7+ Pages</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />

                <TextField 
                  label="Features" 
                  placeholder="Describe any specific features you'd like (e.g., contact form, image gallery, blog, etc.)"
                  multiline 
                  rows={4} 
                  fullWidth 
                  variant="outlined"
                  InputProps={{ sx: { borderRadius: 2 } }}
                  {...register("features")} 
                />
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>Common Features:</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                    <Chip label="Contact Form" variant="outlined" size="small" />
                    <Chip label="Image Gallery" variant="outlined" size="small" />
                    <Chip label="Blog" variant="outlined" size="small" />
                    <Chip label="E-commerce" variant="outlined" size="small" />
                    <Chip label="Social Media Integration" variant="outlined" size="small" />
                  </Stack>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Button onClick={handleBack} sx={{ borderRadius: 2 }}>
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    sx={{ 
                      borderRadius: 2,
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    }}
                  >
                    Submit Project Details
                  </Button>
                </Box>
              </Stack>
            )}
          </form>
        </Paper>
      </Container>
      
      <Footer />
    </Box>
  )
}