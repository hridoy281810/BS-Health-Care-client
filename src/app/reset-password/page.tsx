"use client"
import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from '@mui/icons-material/Key';
import {useResetPasswordMutation } from "@/redux/api/userApi";
import { toast } from "sonner";
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";
import { useEffect } from "react";
import { authKey } from "@/constance/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";
const validationSchema = z.object({
    newPassword: z.string().min(6, 'Must be at least 6 characters long'),
 });
const ResetPassword = () => {
    const [resetPassword,{isSuccess}] = useResetPasswordMutation()
    const router = useRouter();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')            
    const token = searchParams.get('token')
   
   useEffect(()=>{
    if(!token) return;
    localStorage.setItem(authKey,token);
   },[token])
    const onSubmit = async (values: FieldValues) => {
        console.log(values);
        const updatedData = {...values,id}
        try {
           const res = await resetPassword(updatedData);
           if ('data' in res && res.data.status === 200) {
              toast.success('Password reset successful')
              localStorage.removeItem(authKey)
              deleteCookies([authKey,"refreshToken"])
              router.push("/login")

           } else {
              throw new Error('something went wrong');
           }
        } catch (error) {
           toast.error('something went wrong !!!');
           console.log(error);
        }
     };
  
     return (
        <Box
           sx={{
              px: 4,
              py: 2,
              maxWidth: 600,
              width: '100%',
              boxShadow: 1,
              borderRadius: 1,
              mx: 'auto',
              mt: {
                 xs: 2,
                 md: 5,
              },
           }}
        >
           <Stack alignItems='center' justifyContent='center'>
              <Box
                 sx={{
                    '& svg': {
                       width: 100,
                       height: 100,
                    },
                 }}
              >
                 <KeyIcon sx={{ color: 'primary.main' }} />
              </Box>
              <Typography variant='h5' fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
            Reset password
              </Typography>
           </Stack>
        <BSForm
              onSubmit={onSubmit}
              defaultValues={{ newPassword:'' }}
              resolver={zodResolver(validationSchema)}
           >
              <Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <BSInput
                       name='newPassword'
                       type='password'
                       label='New Password'
                       fullWidth
                       sx={{ mb: 2 }}
                    />
                 </Grid>
                 <Typography textAlign="end" sx={{ mt: 2 }} component="p" fontWeight={300} >
                    <Link href="/login" className='text-[#1586fd] text-end mt-2'>Go back login page!</Link>
                  </Typography>
              </Grid>
  
              <Button type='submit' sx={{ width: '100%', my: 2 }}>
               Reset Password
              </Button>
           </BSForm>
        </Box>
  );
};

export default ResetPassword;