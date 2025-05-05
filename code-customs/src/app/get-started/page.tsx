'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box, Typography, Container, TextField, Button, Stack, MenuItem, InputLabel, Select, FormControl } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

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

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Container maxWidth="sm" sx={{ flex: 1, mt: 6, mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>Let&apos;s Get Started!!</Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          But first, provide some details in order for us to gauge a deadline:
        </Typography>
     
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField label="Business Name" required fullWidth error={!!errors.businessName} helperText={errors.businessName?.message as string || ''}
              {...register("businessName", { required: "A Business Name is required" })} 
            />

            <Controller name="businessType" control={control} rules={{ required: "Business Type is required" }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.businessType}>
                  <InputLabel>Business Type</InputLabel>
                  <Select {...field} label="Business Type">
                    <MenuItem value="E_commerce">E-commerce</MenuItem>
                    <MenuItem value="Portfolio">Portfolio</MenuItem>
                    <MenuItem value="Service_based">Service-Based</MenuItem>
                    <MenuItem value="Blog">Blog</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Controller name="logoUpload" control={control} defaultValue={undefined} 
              render={({ field }) => (
                <Button variant="outlined" component="label">
                  Upload Logo (optional)
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
              )}
            />
            {logoPreview && <img src={logoPreview} alt="Logo Preview" style={{ width: 100, height: 100, objectFit: "cover", marginTop: 10 }} />}

            <Controller name="designUpload" control={control} defaultValue={undefined}
              render={({ field }) => (
                <Button variant="outlined" component="label">
                  Upload Design/Sketch (optional)
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
              )}
            />
            {sketchPreview && <img src={sketchPreview} alt="Sketch Preview" style={{ width: 100, height: 100, objectFit: "cover", marginTop: 10 }} />}

            <TextField label="Color Scheme (optional)" fullWidth {...register("colorScheme")} />

            <Controller name="pageRange" control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.pageRange}>
                  <InputLabel>Page Range</InputLabel>
                  <Select {...field} label="Page Range">
                    <MenuItem value="OneToThree">1-3 Pages</MenuItem>
                    <MenuItem value="FourToSix">4-6 Pages</MenuItem>
                    <MenuItem value="SevenPlus">7+ Pages</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <TextField label="Features (optional)" multiline rows={4} fullWidth {...register("features")} />

            <Button type="submit" variant="contained" color="primary">Submit Project Details</Button>
          </Stack>
        </form>
      </Container>
      
      <Footer />
    </Box>
  )
}