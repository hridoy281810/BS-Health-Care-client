
import BSForm from '@/components/Forms/BSForm';
import BSInput from '@/components/Forms/BSInput';
import BSSelect from '@/components/Forms/BSSelect';
import BSFullScreenModal from '@/components/shared/modal/BSFullScreenModal';
import { useCreateDoctorMutation } from '@/redux/api/doctorsApi';
import { Gender } from '@/types';
import { modifyPayload } from '@/utils/modifyPayload';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
export type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DoctorModal = ({open,setOpen}:TProps) => {
    const [createDoctor] =useCreateDoctorMutation() 
    const handleFormSubmit = async(values:FieldValues)=>{
         console.log(values);
          values.doctor.experience = Number(values.doctor.experience);
          values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
         const data = modifyPayload(values)
         try{
           const res = await createDoctor(data).unwrap()
           console.log('res',res);
        
           if(res?.id){
            toast.success("Doctor created successfully!!")
            setOpen(false)
           }
           
         }catch(error:any){
            console.log(error.message);
            
         }
       }
       const doctorValues = {
        doctor: {
            name:"",
            email:"",
            contactNumber:"",
            address:"",
            registrationNumber:"",
            experience:0,
            gender:"",
            apointmentFee:0,
            qualification:"",
            currentWorkingPlace:"",
            designation:"",
            },
        password: "",
     }
  return (
    <BSFullScreenModal open={open} setOpen={setOpen} title='Create New Doctor'  >
    <BSForm onSubmit={handleFormSubmit} defaultValues={doctorValues}>
    <Grid container spacing={2} sx={{my:5}}>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.name' label='Name' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.email' type='email' label='Email' fullWidth={true} sx={{mb:2}}/>
  </Grid>
    <Grid item xs={12} sm={12} md={4} >
  <BSInput name='password' type='password' label='Password' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.contactNumber' type='tel' label='Contact Number' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.address'  label='Address' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.registrationNumber'  label='Registration Number' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.experience' type='number'  label='Experience' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSSelect items={Gender}  name='doctor.gender'   label='Gender' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.apointmentFee'  type='number'  label='Apointment Fee' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.qualification'   label='Qualification' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.currentWorkingPlace'   label='Current Working Place' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.designation'   label='designation' fullWidth={true} sx={{mb:2}}/>
  </Grid>
 
    </Grid>
    <Button sx={{mt:1}} type='submit' >Create</Button>
</BSForm>
    </BSFullScreenModal>
  );
};

export default DoctorModal;