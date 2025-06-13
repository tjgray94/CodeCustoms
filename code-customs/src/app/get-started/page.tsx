'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Typography, Container, TextField, Button, Stack, MenuItem, InputLabel, Select, FormControl, Paper, Stepper, 
  Step, StepLabel, Chip } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

type FormInputs = {
  businessName: string;
  businessEmail: string;
  businessType: string;
  pageRange: string;
  colorScheme?: string;
  features?: string;
  logoUpload?: FileList;
  designUpload?: FileList;
};

export default function GetStartedPage() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [sketchPreview, setSketchPreview] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);


  const { register, handleSubmit, reset, control, formState: { errors }, getValues, trigger } = useForm<FormInputs>({
    defaultValues: { businessType: "", pageRange: "" },
    mode: "onChange"
  });
  
  const onSubmit = async (data: FormInputs) => {
    try {
      const formData = new FormData();

      formData.append("businessName", data.businessName);
      formData.append("businessEmail", data.businessEmail);
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
        setSubmitted(true);
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
      const { businessName, businessEmail, businessType } = getValues();
      let isValid = true;
      
      if (!businessName || businessName.trim() === "") {
        isValid = false;
      }
      
      if (!businessEmail || businessEmail.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail)) {
        isValid = false;
      }
      
      if (!businessType || businessType === "") {
        isValid = false;
      }
      
      if (!isValid) {
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
              mb: 3,
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
            Let&apos;s Get Started!
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 5, 
              color: 'text.secondary',
              maxWidth: '700px',
              fontSize: '1.1rem'
            }}
          >
            Provide some details so we can gauge a deadline and create your perfect website
          </Typography>
          
          <Box 
            sx={{ 
              position: 'relative',
              mb: 6,
              pb: 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(to right, rgba(33, 150, 243, 0.7), rgba(33, 203, 243, 0.1))',
              }
            }}
          >
            <Stepper 
              activeStep={activeStep} 
              sx={{ 
                '& .MuiStepLabel-root': {
                  color: '#1976d2'
                },
                '& .MuiStepIcon-root.Mui-active': {
                  color: '#1976d2'
                },
                '& .MuiStepIcon-root.Mui-completed': {
                  color: '#4caf50'
                }
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
     
          <Paper 
            elevation={4} 
            sx={{ 
              p: 5, 
              borderRadius: 3,
              background: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Decorative elements */}
            <Box sx={{ 
              position: 'absolute',
              top: -60,
              right: -60,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'rgba(33, 150, 243, 0.05)',
              zIndex: 0
            }} />
            
            <Box sx={{ 
              position: 'absolute',
              bottom: -80,
              left: -80,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(255, 152, 0, 0.05)',
              zIndex: 0
            }} />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              {submitted ? (
                <Box sx={{ 
                  textAlign: 'center',
                  py: 4,
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
                    Thank you for your submission!
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', fontSize: '1.1rem' }}>
                    We&apos;ve received your project details and will get back to you as soon as possible.
                    Our team typically responds within 24-48 business hours.
                  </Typography>
                  <Button 
                    variant="contained" 
                    href="/"
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
                    Return to Home
                  </Button>
                </Box>
              ) : (
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
                        required: "Business Name is required",
                        validate: value => value.trim() !== "" || "Business Name cannot be empty"
                      })}
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />

                    <TextField 
                      label="Business Email" 
                      required 
                      fullWidth 
                      variant="outlined"
                      type="email"
                      error={!!errors.businessEmail} 
                      helperText={errors.businessEmail?.message as string || ''}
                      {...register("businessEmail", { 
                        required: "Business Email is required",
                        validate: value => value.trim() !== "" || "Business Email cannot be empty",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address"
                        }
                      })}
                      InputProps={{ sx: { borderRadius: 2 } }}
                    />

                    <Controller name="businessType" control={control} 
                      rules={{ 
                        required: "Business Type is required",
                        validate: value => value !== "" || "Please select a business type"
                      }}
                      render={({ field }) => (
                        <FormControl fullWidth error={!!errors.businessType}>
                          <InputLabel required>Business Type</InputLabel>
                          <Select {...field} label="Business Type" sx={{ borderRadius: 2 }}>
                            <MenuItem value="Apparel">Clothing Brand/Apparel</MenuItem>
                            <MenuItem value="CreativePortfolio">Creative Portfolio/Showcase</MenuItem>
                            <MenuItem value="AppointmentBased">Booking/Appointment Based</MenuItem>
                            <MenuItem value="InformationalSite">Informational Site</MenuItem>
                            <MenuItem value="CustomIdea">Custom Idea/Other</MenuItem>
                          </Select>
                          {errors.businessType && <Typography color="error" variant="caption" sx={{ mt: 1, ml: 2 }}>
                            {errors.businessType.message}
                          </Typography>}
                        </FormControl>
                      )}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                      <Button 
                        variant="contained" 
                        onClick={async () => {
                          const isValid = await trigger(["businessName", "businessEmail", "businessType"]);
                          if (isValid) {
                            handleNext();
                          }
                        }}
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
                                  <img 
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
                                  <img 
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
                    
                    <Controller name="pageRange" control={control} defaultValue=""
                      rules={{ 
                        required: "Page Range is required",
                        validate: value => value !== "" || "Please select a page range"
                      }}
                      render={({ field }) => (
                        <FormControl fullWidth error={!!errors.pageRange}>
                          <InputLabel required>Page Range</InputLabel>
                          <Select {...field} label="Page Range" sx={{ borderRadius: 2 }}>
                            <MenuItem value="OneToThree">1-3 Pages</MenuItem>
                            <MenuItem value="FourToSix">4-6 Pages</MenuItem>
                            <MenuItem value="SevenPlus">7+ Pages</MenuItem>
                          </Select>
                          {errors.pageRange && <Typography color="error" variant="caption" sx={{ mt: 1, ml: 2 }}>
                            {errors.pageRange.message}
                          </Typography>}
                        </FormControl>
                      )}
                    />

                    <TextField 
                      label="Color Scheme" 
                      placeholder="e.g., Blue and white, Earth tones, etc."
                      fullWidth 
                      variant="outlined"
                      InputProps={{ sx: { borderRadius: 2 } }}
                      {...register("colorScheme")} 
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
                        <Chip label="Informational Site" variant="outlined" size="small" />
                        <Chip label="Apparel" variant="outlined" size="small" />
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
                        Submit Project Details
                      </Button>
                    </Box>
                  </Stack>
                )}
              </form>
              )}
            </Box>
          </Paper>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  )
}