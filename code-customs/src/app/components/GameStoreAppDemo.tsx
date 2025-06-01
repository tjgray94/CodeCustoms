'use client';

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function GameStoreAppDemo() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" image="GameStoreApp.png" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">GameStoreApp</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This application was created to manage the inventory of video games. Users are able to 
          search and view the list of games along with their details and demonstrates simple CRUD 
          operations when interacting with the site.  
        </Typography>
      </CardContent>
    </Card>
  )
}