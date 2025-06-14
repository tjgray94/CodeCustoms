'use client';

import React from 'react';
import { Box } from '@mui/material';

export default function BankAppPlayer() {
  return (
    <Box sx={{ width: '100%' }}>
      <video controls width="100%">
        <source src="/BankAppPlayer.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </Box>
  )
}