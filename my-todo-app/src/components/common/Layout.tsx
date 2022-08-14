import React from 'react';

import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

interface LayoutProps {
  children?: React.ReactNode;
  isBgcolor?: boolean;
}

function Layout({ children, isBgcolor = false }: LayoutProps) {
  return (
    <Container
      component='main'
      maxWidth='lg'
      sx={{
        py: '20px',
        bgcolor: isBgcolor ? '#3894D6' : 'transparent',
        height: '100vh',
      }}>
      <CssBaseline />

      {children}
    </Container>
  );
}

export default Layout;