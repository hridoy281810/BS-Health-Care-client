"use client"
import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import BSSelect from "@/components/Forms/BSSelect";
import { useGetSingleDoctorQuery, useUpdateDoctorMutation } from "@/redux/api/doctorsApi";
import { useGetSpecialtyQuery } from "@/redux/api/specialtiesApi";
import { Gender, IDoctor } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParamProps = {
    params: {id: string}
}

const page = ({params}:TParamProps) => {
const id = params.id
   const {data}:IDoctor[]= useGetSingleDoctorQuery<IDoctor[]>(id)
   const doctorData = data?.doctors
   const doctorValues = {
    doctor: {
     name:doctorData?.name,
        email:doctorData?.email,
        contactNumber:"huiuh",
        address:"",
        registrationNumber:"",
        experience:0,
        gender:"",
        apointmentFee:0,
        qualification:"",
        currentWorkingPlace:"",
        designation:"",
        }, 
  }
  const [updateDoctor] = useUpdateDoctorMutation()
 const {data:specialtyData} = useGetSpecialtyQuery({})
const specialtyOptions:any[] = [];
specialtyData?.forEach((item:any) => {
    specialtyOptions.push(item.id);
});
   const handleFormSubmit = async(values:FieldValues)=>{
  
     values.doctor.experience = Number(values.doctor.experience);
     values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    //  const [specialtiesId] = values.specialties.split(' ');

     // Set an array of objects for `values.specialties`
     values.specialties = [
         {
             specialtiesId: values.specialties,
             isDeleted: false
         }
     ];

    // const data = modifyPayload(values)
   
    console.log(values);
    const id = values.doctor.id
    try{
   const res = await updateDoctor({values,id})
      console.log('res',res);
   
      if(res){
       toast.success("Doctor created successfully!!")
     
      }
      
    }catch(error:any){
       console.log(error.message);
       
    }
  }

  return (
    <Box>
    <BSForm onSubmit={handleFormSubmit} defaultValues={doctorValues}>
    <Grid container spacing={2} sx={{my:5}}>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.name' label='Name'  fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='doctor.email' type='email' label='Email' fullWidth={true} sx={{mb:2}}/>
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
  <BSSelect multiple={false} items={Gender}  name='doctor.gender'   label='Gender' fullWidth={true} sx={{mb:2}}/>
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
  <Grid item xs={12} sm={12} md={4} >
  <BSSelect   multiple={true} items={specialtyOptions}  name='specialties'   label='specialties' fullWidth={true} sx={{mb:2}}/>
  </Grid>
    </Grid>
    <Button sx={{mt:1}} type='submit' >Create</Button>
</BSForm>
    </Box>
  );
};

export default page;