'use client';

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function BankAppDemo() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" image="BankApp.png" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">BankApp</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Standard banking application having simple features i.e. login functionality, create and 
          delete user accounts, open checking and/or savings account, with ability to deposit, withdraw, 
          and/or transfer funds as well as view transaction history. 
        </Typography>
      </CardContent>
    </Card>
  )
}