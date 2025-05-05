'use client';

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function CurrencyConverterDemo() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" image="CurrencyConverter.png" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">Currency Converter*</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          A simple application used to convert currencies between two countries (USD and JPY only).
        </Typography>
        <footer style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
          <p><i>
            <span>*</span> More countries coming soon.
          </i></p>
        </footer>
      </CardContent>
    </Card>
  )
}