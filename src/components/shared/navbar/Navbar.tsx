import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <Container>
    <Stack py={2} direction="row" justifyContent='space-between' alignItems="center">
   <Typography variant='h4' component={Link} href='/' fontWeight={600}>
    B<Box component="span" color="primary.main">S</Box> Health Care
   </Typography>
   <Stack direction="row" justifyContent="space-between" gap={4}>
    <Typography component={Link} href='/consultation'>Consultation</Typography>
    <Typography >Health Plans</Typography>
    <Typography>Medicine</Typography>
    <Typography>Diagnostics</Typography>
    <Typography>NGOS</Typography>
   </Stack>
   <Button component={Link} href='/login'>Login</Button>
   </Stack>
    </Container>
  );
};

export default Navbar;