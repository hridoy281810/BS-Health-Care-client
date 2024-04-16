"use client"
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { FieldValues } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/services/actions/registerPatient ';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { storeUserInfo } from '@/services/actions/auth.service';
import { userLogin } from '@/services/actions/userLogin';
import BSForm from '@/components/Forms/BSForm';
import BSInput from '@/components/Forms/BSInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please Enter Your Name"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z.string().regex(/^\d{11}$/,"Please enter your valid contact number and must be 11 Disit"),
  address: z.string().min(1, "Please enter your valid address"),
})
export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema
})
export const defaultValues = {
  password: "",
  patient:{
    name:"",
    email:"",
    contactNumber:"",
    address:''
  }
}
const RegisterPage = () => {
  const router = useRouter()
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values)
    try {
      const res = await registerPatient(data)
      console.log(res);
      if (res?.data?.id) {
        toast.success(res.message)
        const result = await userLogin({ password: values.password, email: values.patient.email })
        if (result.data.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken })
          router.push("/dashboard")
        }
      } else {
        toast.error(res.message)
      }

    } catch (err) {
      console.log(err);

    }
    console.log(data)
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
          <Box>
            <BSForm onSubmit={handleRegister} defaultValues={defaultValues} resolver={zodResolver(validationSchema)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <BSInput label="Name"
                    fullWidth={true} name='patient.name'
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <BSInput label="Email"
                    fullWidth={true} type='email'
                    name='patient.email'
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <BSInput label="Password"
                    fullWidth={true} type='password'
                    name='password'
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <BSInput label="Contact Number" fullWidth={true} type='tel' name='patient.contactNumber'
                  />
                </Grid>
                <Grid item md={6} mt={1}>
                  <BSInput label="Address" fullWidth={true} name='patient.address'
                  />
                </Grid>
              </Grid>
              <Button type='submit' sx={{ my: 2 }} fullWidth={true}>Register</Button>
              <Typography component="p" fontWeight={300} >
                Do you already have an account? <Link style={{color:"#1586fd"}} href="/login" >Login</Link>
              </Typography>
            </BSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;