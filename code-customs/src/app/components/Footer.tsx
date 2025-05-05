'use client';

import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Paper component="footer" square variant="outlined" sx={{ padding: 2, backgroundColor: "grey.200"}}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()}, Code Customs by Tevin Gray 
      </Typography>
    </Paper>
  )
}