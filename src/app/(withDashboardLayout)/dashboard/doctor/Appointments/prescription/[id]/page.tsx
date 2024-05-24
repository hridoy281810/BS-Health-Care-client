'use client'
import {  Box, Button,  Divider,  Stack, TextField, Typography } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import BSForm from '@/components/Forms/BSForm';
import React from 'react';
import { useCreatePrescriptionMutation, useGetMyAppointmentsQuery } from '@/redux/api/appointment';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import BSRichTextField from '@/components/Forms/BSRichTextField';
import BSDatePicker from '@/components/Forms/BSDatePicker';
import logo from '@/assets/svgs/logo.svg'
import Image from 'next/image';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
type TProps = {
  
    params:{
        id: string;
    };
}
const PrescriptionPage = ({params}:TProps) => {
    const appointmentId = params.id;
    const {data:appointmentData  } = useGetMyAppointmentsQuery({})
    const {data:doctorData} = useGetSingleUserQuery({})
    const appointments = appointmentData?.appointments?.data
    
const appointment = appointments?.find((id:any)=> id?.id === appointmentId)
const [createPrescription, {isLoading}] = useCreatePrescriptionMutation()
 const router = useRouter()   
const handleSubmit = async(values:FieldValues)=>{
        try{
            const prescriptionData = {
                appointmentId:appointmentId,
                instructions:values?.instructions,
                followUpDate:values?.followUpDate,
            }
            console.log('prescriptionData',prescriptionData);
            
        const res = await createPrescription(prescriptionData).unwrap()
          if(res?.id){
            toast.success("Prescription Create Successfully")
            router.push('/dashboard')
           }
        }catch(error:any){
                console.log(error.message);
        }
    }
  return (

 <React.Fragment>
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      
    }} mx="auto">
         <Box className="prescription-container" p={3} sx={{ backgroundColor: '#d9f4fa'  }}>
         <Image className='mx-auto m-2' src={logo} width={50} height={50} alt='logo' />
         <Typography sx={{textAlign:"center"}} variant="h6" className="clinic-name">BS Health Care</Typography>
      <Stack mb={2} direction="row" justifyContent="space-between" >
        <Stack direction="column">
          <Typography variant="h6" className="doctor-name">{doctorData?.name}</Typography>
          <Typography variant="body2" >MEDICINE DOCTOR</Typography>
          <Typography variant="body2">{doctorData?.currentWorkingPlace}</Typography>
          <Typography variant="body2">{doctorData?.address}</Typography>
          <Typography variant="body2">Phone: {doctorData?.contactNumber}</Typography>
        </Stack>
       
      </Stack>
      <Divider  variant="middle"  />
      <Box mt={2} className="patient-info">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
          <Typography variant="h6" className="patient-name">{appointment?.patient?.name}</Typography>
          <Typography variant="body2">Phone: {appointment?.patient?.contactNumber}</Typography>
          </Box>
          <Stack direction="column">
            <Typography variant="body2">Date of Birth: 01/01/2000</Typography>
            <Typography variant="body2">Age: 24</Typography>
            <Typography variant="body2">Gender: Male</Typography>
          </Stack>
        </Stack>
      </Box>
      {/* Add medication details here */}
      <Box className="medication-details">
        <Typography variant="h5" component="p">Rx:</Typography>
        {/* Replace with details about medication */}
      </Box>
       <BSForm onSubmit={handleSubmit}>
      <Stack mt={2} direction={"column"} gap={2} justifyContent="center" >
      <BSDatePicker sx={{width:"400px"}} name='followUpDate' label='FollowUp Date' />
      <BSRichTextField  name="instructions" label="Doctor Instructions:" rules={{ required: 'Comment is required' }} />
        <Button type='submit'>Submit</Button>
      </Stack>
      </BSForm>
      </Box>
      </Box>
 </React.Fragment>
  );
};
export default PrescriptionPage;