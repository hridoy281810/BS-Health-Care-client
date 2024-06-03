"use client"
import useGetUsrInfo from '@/hooks/useGetUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box,Button,Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
const router = useRouter()
const initialUserInfo = useGetUsrInfo();
const [userInfo, setUserInfo] = useState(initialUserInfo);
console.log(userInfo);

useEffect(() => {
  setUserInfo(initialUserInfo);
}, [initialUserInfo]);

const handleLogOut = async () => {
  await logoutUser(router);
  setUserInfo(null); // Update local state after logout
};
  return (
 <Box sx={{
  backgroundColor:"primary.main" 
 }}>
     <Container>
    <Stack py={2} direction="row" justifyContent='space-between' alignItems="center">
   <Typography variant='h4' component={Link} href='/' fontWeight={600}>
    B<Box component="span" color="#ffffff">S</Box> Health Care
   </Typography>
   <Stack direction="row" justifyContent="space-between" gap={4}>
    <Typography color="#ffffff" component={Link} href='/consultation'>Consultation</Typography>
    <Typography color="#ffffff" >Health Plans</Typography>
    <Typography color="#ffffff">Medicine</Typography>
    <Typography color="#ffffff">Diagnostics</Typography>
    <Typography color="#ffffff">NGOS</Typography>
   {
    userInfo?.userId ? (
      <Typography color="#ffffff" component={Link} href={`/dashboard/${userInfo?.role}`}>Dashboard</Typography>
    ): null
   } 
   </Stack>
   {  
  userInfo?.userId ? 
   (<Button sx={{
    boxShadow:0
   }} onClick={handleLogOut} color="error">Logout</Button>)
  :(<Button sx={{
    boxShadow:2,
   
   }} component={Link} href='/login'>Login</Button>)
   }
   </Stack>
    </Container>
 </Box>
  );
};

export default Navbar;