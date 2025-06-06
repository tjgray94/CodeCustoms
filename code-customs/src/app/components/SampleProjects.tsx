'use client';

import { Paper, Typography, Divider, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import BankAppDemo from './BankAppDemo';
import ERSDemo from './ERSDemo';
import GameStoreAppDemo from './GameStoreAppDemo';

export default function SampleProjects() {
  return (
    <Box sx={{ 
      position: 'relative',
      mt: 12,
      mb: 8,
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: '#f8f9fa',
        zIndex: -2
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        top: -100,
        left: -100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'rgba(33, 150, 243, 0.05)',
        zIndex: -1
      }} />
      
      <Box sx={{ 
        position: 'absolute',
        bottom: -150,
        right: -150,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'rgba(255, 152, 0, 0.05)',
        zIndex: -1
      }} />
      
      <Typography 
        variant="h3" 
        align="left" 
        gutterBottom
        sx={{ 
          fontWeight: 800,
          mb: 1,
          ml: { xs: 2, md: 6 },
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
        Sample Projects
      </Typography>
      
      <Typography 
        variant="body1" 
        gutterBottom 
        sx={{ 
          mb: 6, 
          ml: { xs: 2, md: 6 },
          mr: { xs: 2, md: 6 },
          mt: 3,
          maxWidth: '800px',
          fontSize: '1.1rem',
          lineHeight: 1.7
        }}
      >
        I&apos;ve dedicated my IT journey so far to growing as a developer by building personal projects using
        a variety of languages and frameworks. While the right opportunity hasn&apos;t arrived yet, I&apos;m
        undeterred -- I continue to learn, experiment, and write code everyday. Whether that opportunity comes 
        tomorrow or years from now, I&apos;ll be ready (fingers intact, hopefully). Here are a few of the 
        projects I&apos;ve worked on along the way:
      </Typography>
      
      {/* Enhanced Portfolio Grid */}
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, 
          gap: 3
        }}>
          <Card elevation={2} sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <CardMedia
              component="img"
              height="160"
              image="BankApp.png"
              alt="BankApp"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>BankApp</Typography>
              <Typography variant="body2" color="text.secondary">
                Standard banking application having simple features i.e. login functionality, create and 
                delete user accounts, open checking and/or savings account, with ability to deposit, withdraw, 
                and/or transfer funds as well as view transaction history.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    borderRadius: 2,
                    px: 3,
                    minWidth: '140px'
                  }}
                >
                  View Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
          
          <Card elevation={2} sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <CardMedia
              component="img"
              height="160"
              image="GameStoreApp.png"
              alt="GameStoreApp"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>GameStoreApp</Typography>
              <Typography variant="body2" color="text.secondary">
                This application was created to manage the inventory of video games. Users are able to 
                search and view the list of games along with their details and demonstrates simple CRUD 
                operations when interacting with the site.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    borderRadius: 2,
                    px: 3,
                    minWidth: '140px'
                  }}
                >
                  View Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
          
          <Card elevation={2} sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
            }
          }}>
            <CardMedia
              component="img"
              height="160"
              image="ERS.png"
              alt="Employee Reimbursement System"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>Employee Reimbursement System</Typography>
              <Typography variant="body2" color="text.secondary">
                With this application, users can apply for reimbursements for expenses incurred on
                company time. Employees can login and view their requests while managers can view and
                manage the employee inventory as well as approve or deny requests.
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    borderRadius: 2,
                    px: 3,
                    minWidth: '140px'
                  }}
                >
                  View Demo
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          
        </Box>
      </Box>
    </Box>
  )
}