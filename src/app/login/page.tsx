"use client"
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { FieldValues } from "react-hook-form"
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/actions/auth.service';
import BSForm from '@/components/Forms/BSForm';
import BSInput from '@/components/Forms/BSInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Must be at least 6 characters")
})
const LoginPage = () => {
  const router = useRouter()
  const [error,setError] = useState<string>('')
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values)
      console.log('res',res);
      if (res.data) {
        toast.success(res.message)
        storeUserInfo({ accessToken: res?.data?.accessToken })
        router.push("/dashboard")
      }
       else{
        const errorMassage = res.message
        console.log('errorMassage',errorMassage)
        setError(errorMassage)
      }
    } catch (err) {
      console.log('something went wrong',err) 
    }
  }
  return (
    <Container >
      <Stack sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 4,
          p: 4,
          textAlign: "center"
        }}>

          <Stack sx={{
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Box>
              <Image src={assets.svgs.logo} alt='logo' width={50} height={50} />
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={600} >
                Patient Register
              </Typography>
            </Box>
          </Stack>
         {error&& (<Box>
          <Typography sx={{
            backgroundColor:"red",
            padding:"1px",
            borderRadius:"2px",
            color:"white",
            mt:1
          }} variant='h6' fontWeight={600} >
                {error}
              </Typography>
          </Box>)}
          <Box>
            <BSForm onSubmit={handleLogin} resolver={zodResolver(validationSchema)}
            defaultValues={{
              email:"",
              password:""
            }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6} mt={1}>
                  <BSInput
                    label="Email"
                    fullWidth={true}
                    type='email'
                    name='email'
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <BSInput label="Password"
                    fullWidth={true} type='password' name='password'
                  />
                  <Typography textAlign="end" sx={{ mt: 2 }} component="p" fontWeight={300} >
                    <Link href="/forgot-password" className='text-[#1586fd] text-end mt-2'>Forgot Password?</Link>
                  </Typography>
                </Grid>

              </Grid>

              <Button sx={{ my: 2 }} fullWidth={true} type='submit'>Register</Button>
              <Typography component="p" fontWeight={300} >
                Don't have an account? <Link href="/register" className='text-[#1586fd]'>Create an account</Link>
              </Typography>
            </BSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;