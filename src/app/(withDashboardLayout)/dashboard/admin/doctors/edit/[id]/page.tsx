"use client"
import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import BSSelect from "@/components/Forms/BSSelect";
import { useGetSingleDoctorQuery, useUpdateDoctorMutation } from "@/redux/api/doctorsApi";
import { Gender} from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export type TParamProps = {
    params: {id: string}
}
const page = ({params}:TParamProps) => {
  const router = useRouter()
const id = params.id
const { data, isLoading } = useGetSingleDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation()
//  const {data:specialtyData} = useGetSpecialtyQuery({})
// const specialtyOptions:any[] = [];
// specialtyData?.forEach((item:any) => {
//     specialtyOptions.push(item.id);
// });
   const handleFormSubmit = async(values:FieldValues) =>{
  
     values.experience = Number(values.experience);
     values.apointmentFee = Number(values.apointmentFee);
    //  const [specialtiesId] = values.specialties.split('');

    //  // Set an array of objects for `values.specialties`
    //  values.specialties = [
    //      {
    //          specialtiesId: values.specialties,
    //          isDeleted: false
    //      }
    //  ];
   values.id = id;
    try{
   const res = await updateDoctor({ id: values.id, body: values }).unwrap()
      console.log('res',res);
      if (res?.id) {
        toast.success("Doctor Updated Successfully!!!");
        router.push("/dashboard/admin/doctors");
      }
    }catch(error:any){
       console.log(error.message);
    }
  }
  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    apointmentFee: data?.apointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };
  return (
    <Box>
       <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
  {isLoading?( <p>Loading...</p> ):(
<BSForm onSubmit={handleFormSubmit} defaultValues={data && defaultValues}>
    <Grid container spacing={2} sx={{my:5}}>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='name'label='Name' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='email'type='email'label='Email'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='contactNumber'type='tel'label='Contact Number'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='address' label='Address'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='registrationNumber' label='Registration Number'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='experience'type='number' label='Experience'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSSelect multiple={false} items={Gender}  name='gender'  label='Gender'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='apointmentFee' type='number' label='Apointment Fee'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='qualification'  label='Qualification'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='currentWorkingPlace'  label='Current Working Place'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='designation'  label='designation'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  {/* <Grid item xs={12} sm={12} md={4} >
  <BSSelect   multiple={true} items={specialtyOptions}  name='specialties'  label='specialties'fullWidth={true} sx={{mb:2}}/>
  </Grid> */}
    </Grid>
    <Button sx={{mt:1}} type='submit'>Update</Button>
</BSForm>)}
    </Box>
  );
};

export default page;