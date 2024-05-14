"use client"
import useGetUsrInfo from '@/hooks/useGetUsrInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { Box,Button,Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
const userInfo = useGetUsrInfo()
const router = useRouter()
  const handleLogOut = ()=>{
    logoutUser(router)
  }
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
   {
    userInfo?.userId ? (
      <Typography component={Link} href="/dashboard">Dashboard</Typography>
    ): null
   } 
   </Stack>
   {  
  userInfo?.userId ? 
   (<Button onClick={handleLogOut} color="error">Logout</Button>)
  :(<Button component={Link} href='/login'>Login</Button>)
   }
   </Stack>
    </Container>
  );
};

export default Navbar;