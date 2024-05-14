'use server'
import { Box, Container } from '@mui/material';
import React from 'react';

const DoctorsPage = async() => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/doctor`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const { data } = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  return (
    <Container>
  <Box 
  sx={{
    borderBottom: "2px dashed",
    borderColor: "secondary.light",
    my:4
  }}
  >
   <Box sx={{mt:2, p:3,bgcolor:"secondary.50"}}>

   </Box>
  </Box>
    </Container>
  );
};

export default DoctorsPage;