import BSFileUploader from "@/components/Forms/BSFileUploader";
import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import { useUpdateProfileMutation } from "@/redux/api/userApi";
import {  TProfile } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ProfileComponents: React.FC<{ data: TProfile; isLoading: boolean } >= ({data,isLoading}) => {
const [updateProfile] = useUpdateProfileMutation()
const handleFormSubmit = async(values:FieldValues) =>{
   const formData = new FormData()
  
  formData.append("data", JSON.stringify(values))
   formData.append('file', data.profilePhoto)

  // const toastId = toast.loading("Creating...")
   try{
    const res = await updateProfile(data).unwrap();
     console.log('res',res);
     if (res?.id) {
       toast.success("Profile Updated Successfully!!!");
     }
   }catch(error:any){
      console.log(error.message);
   }
 }
const defaultValues = {
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    profilePhoto: data?.profilePhoto || ""
  };

  return (
     <Box>
       <Typography component="h5" variant="h5">
        Update Profile Info
      </Typography>
  {isLoading?( <p>Loading...</p> ):(
<BSForm onSubmit={handleFormSubmit} defaultValues={data && defaultValues}>
    <Grid container spacing={2} sx={{my:5}}>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='name'label='Name' fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='contactNumber'type='tel'label='Contact Number'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item xs={12} sm={12} md={4} >
  <BSInput name='address' label='Address'fullWidth={true} sx={{mb:2}}/>
  </Grid>
  <Grid item md={6} >
  <BSFileUploader name="file" label="Upload File" />
  </Grid>
    </Grid>
    <Button sx={{mt:1}} type='submit'>Update</Button>
</BSForm>)}
    </Box>
  );
};

export default ProfileComponents;