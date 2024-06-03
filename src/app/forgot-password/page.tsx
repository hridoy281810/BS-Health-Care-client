"use client"
import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from '@mui/icons-material/Key';
import {  useForgotPasswordMutation } from "@/redux/api/userApi";
import { toast } from "sonner";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import CheckIcon from '@mui/icons-material/Check';
const validationSchema = z.object({
    email: z.string().email('please enter a valid email address!'),
 });
const ForgotPasswordPage = () => {
    const [forgotPassword,{isSuccess}] = useForgotPasswordMutation()
    const router = useRouter();
    const onSubmit = async (values: FieldValues) => {
        console.log(values);
        
        try {
           const res = await forgotPassword(values);
          console.log('passssss',res);
          
           if ('data' in res && res.data.status === 200) {
              logoutUser(router);
              toast.success('Check your email for reset link!');
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
                 Change password enqueue
               enque,de,front reacr peek
               
              </Typography>
           </Stack>
           {
            isSuccess &&   (
                <Box>
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                An Email with reset password link was sent to your email successfully!.
             </Alert>
              <Typography textAlign="end" sx={{ mt: 2 }} component="p" fontWeight={300} >
              <Link href="/login" className='text-[#1586fd] text-end mt-2'>Go back login page!</Link>
               </Typography>
                </Box>
            )
           }
          { !isSuccess && <BSForm
              onSubmit={onSubmit}
              defaultValues={{ email:'' }}
              resolver={zodResolver(validationSchema)}
           >
              <Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <BSInput
                       name='email'
                       type='email'
                       label='Email'
                       fullWidth
                       sx={{ mb: 2 }}
                    />
                 </Grid>
                 <Typography textAlign="end" sx={{ mt: 2 }} component="p" fontWeight={300} >
                    <Link href="/login" className='text-[#1586fd] text-end mt-2'>Go back login page!</Link>
                  </Typography>
              </Grid>
  
              <Button type='submit' sx={{ width: '100%', my: 2 }}>
                Forgot Password
              </Button>
           </BSForm>}
        </Box>
  );
};

export default ForgotPasswordPage;