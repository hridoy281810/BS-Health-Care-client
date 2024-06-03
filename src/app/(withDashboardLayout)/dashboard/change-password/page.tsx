"use client"
import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from '@mui/icons-material/Key';
import { useChangePasswordMutation } from "@/redux/api/userApi";
import { toast } from "sonner";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from 'next/navigation';
const validationSchema = z.object({
    oldPassword: z.string().min(6, 'Must be at least 6 characters long'),
    newPassword: z.string().min(6, 'Must be at least 6 characters long'),
 });
const ChangePasswordPage = () => {
    const [changePassword] = useChangePasswordMutation()
    const router = useRouter();
    const onSubmit = async (data: FieldValues) => {
      try {
        const res = await changePassword(data).unwrap();
        console.log('res', res);
  
        if (res && res.data && res?.data?.success) {
          logoutUser(router);
          toast.success('Password Changed Successfully');
        } else {
          throw new Error('Password change unsuccessful');
        }
      } catch (error) {
        toast.error('Incorrect Old Password');
        console.error(error);
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
                 Change password
              </Typography>
           </Stack>
           <BSForm
              onSubmit={onSubmit}
              defaultValues={{ oldPassword: '', newPassword: '' }}
              resolver={zodResolver(validationSchema)}
           >
              <Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <BSInput
                       name='oldPassword'
                       type='password'
                       label='Old Password'
                       fullWidth
                       sx={{ mb: 2 }}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <BSInput
                       name='newPassword'
                       type='password'
                       label='New Password'
                       fullWidth
                       sx={{ mb: 2 }}
                    />
                 </Grid>
              </Grid>
  
              <Button type='submit' sx={{ width: '100%', my: 2 }}>
                 change Password
              </Button>
           </BSForm>
        </Box>
  );
};

export default ChangePasswordPage;