"use client"
import { useGetSingleUserQuery, useUpdateProfileMutation } from '@/redux/api/userApi';
import { Box, Button, Container } from '@mui/material';
import { useState } from 'react';
import ProfileUpdateModal from './components/ProfileUpdateModal';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import DoctorsInformation from './components/DoctorsInformation';
import AutoFileUploader from '@/components/Forms/AutoFileUploader';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EditIcon from '@mui/icons-material/Edit';
const ProfilePage = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    
    const {data,isLoading} = useGetSingleUserQuery(undefined)
    console.log(data);
    const [updateProfile,{isLoading:updating}] = useUpdateProfileMutation() 
  //   const [updateProfile,{isLoading: updating}]= useUpdateProfileMutation()
  // const fileUploadHandler = (file:File)=>{
  //          const formData = new FormData()
  //          formData.append("file",file);
  //          formData.append("data",JSON.stringify({}));
  //          updateProfile(formData)
  // } 
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
 <>
 <ProfileUpdateModal open={isModalOpen} setOpen={setIsModalOpen} id={data?.id}/>
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
     <Button sx={{mt:2}}  onClick={()=>setIsModalOpen(true)} fullWidth endIcon={<EditIcon />}>
      Edit Profile
     </Button>
  </Box>
      </Grid>
      <Grid  xs={12} md={8} >
<DoctorsInformation data={data}/>
      </Grid>
     </Grid>
     </Container>
 </>
  );
};

export default ProfilePage;