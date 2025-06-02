'use client';

import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ERSDemo() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" image="ERS.png" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">Employee Reimbursement System</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          With this application, users can apply for reimbursements for expenses incurred on
          company time. Employees can login and view their requests while managers can view and
          manage the employee inventory as well as approve or deny requests.
        </Typography>
      </CardContent>
    </Card>
  )
}