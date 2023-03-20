import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginComponent from './Login/LoginComponent.js';

export default function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
	  <LoginComponent />
      </Container>
    </React.Fragment>
  );
}
