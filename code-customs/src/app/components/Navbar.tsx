'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Box, CssBaseline, Divider, Drawer, Typography, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['About', 'Contact', 'Get Started'];
const navLinks = ['/about', '/contact', '/get-started'];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleDrawerToggle}>
        <Typography variant="h6" sx={{ my: 2 }}>CodeCustoms</Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <Link 
              href={navLinks[index]} 
              style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              onClick={handleDrawerToggle}
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar sx={{ bgcolor: 'black' }}>
          <IconButton color="inherit" aria-label="open drawer"
            edge="start" onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/codecustomslogo.svg" alt="CodeCustoms" width={40} height={40} style={{ backgroundColor: "#ffffff"}} />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Link 
                key={item} 
                href={navLinks[index]} 
                style={{ textDecoration: 'none' }}
              >
                <Button sx={{ color: '#fff' }}>{item}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer container={container} variant="temporary" open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: { xs: 1, sm: 3 } }}>
        <Toolbar />
      </Box>
    </Box>
  )
}