'use client'
import AutoFileUploader from '@/components/Forms/AutoFileUploader';
import { useGetSingleUserQuery, useUpdateProfileMutation } from '@/redux/api/userApi';
import { Box, Button, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DoctorsInformation from '../../doctor/profile/components/DoctorsInformation';
import PatientInformation from './components/PatientInformation';
const ProfilePage = () => {  
    const {data,isLoading} = useGetSingleUserQuery(undefined)
    console.log(data);
    const [updateProfile,{isLoading:updating}] = useUpdateProfileMutation() 
  const fileUploadHandler = async(file:File)=>{
  const formData =  new FormData()
    formData.append("file", file)
    formData.append('data', JSON.stringify({}));
   try{
       const res = await updateProfile(formData)
       console.log(res, 'profile data')
       
   }
   catch(error:any){

   }
  }
  if(isLoading){
return <p>Loading......</p>
  }
  return (
    <Container sx={{mt:4}}>
    <Grid container spacing={4} >
     <Grid xs={12}  md={4}>
    <Box sx={{
       height: 300,
       width: "100%",
       overflow:"hidden",
       borderRadius: 1,
       my:3
    }}>
   <Image height={300} width={400}  src={data?.profilePhoto!|| "https://i.ibb.co/7vLG9HV/person2.png"}  alt='user photo' />
    </Box>
 <Box sx={{
  
 }}>
 {
     updating ? <Button fullWidth>Uploading....</Button> : <AutoFileUploader sx={{
       border:1,
       width:"100%",
       
     }} name='file' label='Choose Your Profile Photo'
     onFileUpload={fileUploadHandler} variant="text" icon={<CloudUploadIcon /> }
    />
    }
 </Box>
     </Grid>
     <Grid  xs={12} md={8} >
<PatientInformation data={data}/>
     </Grid>
    </Grid>
    </Container>
  );
};

export default ProfilePage;