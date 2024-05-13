"use client"
import { useGetSingleUserQuery } from '@/redux/api/userApi';
import { Avatar, Box, Divider, Stack, Tab, Tabs, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ProfileComponents from '@/components/dashboard/ProfileComponents/ProfileComponents';


const ProfilePage = () => {
 const {data,isLoading} = useGetSingleUserQuery({})


  return (
    <Box >
    <Stack sx={{backgroundColor:"#f5f7f9", pt:"24px",pb:"20px",px:"28px"}} spacing={2} direction="row" justifyContent="space-between" alignItems="center" >
      <Box sx={{display:"flex" , alignItems:"center",gap:"28px" }}>
      <Avatar alt={data?.name || ""} src={data?.profilePhoto|| ""}   sx={{ width: 120, height: 120 }}/>
       <Box>
      <Typography variant='h3' component="h6" sx={{color: "black", fontWeight:700}}>
        {data?.name}
      </Typography>
      <Box sx={{display:"flex" , alignItems:"center",gap:"28px" }}>
      <Typography   component="p"  >
      <PersonOutlineOutlinedIcon sx={{marginBottom:"6px",marginRight:"4px"}}/>
    {data?.role}
      </Typography>
      <Typography  component="p" sx={{}}>
        <EmailOutlinedIcon sx={{marginBottom:"6px",marginRight:"4px"}}/>
        {data?.email}
      </Typography>
      <Typography  component="p" sx={{}}>
    { data?.status === "ACTIVE" ? <CheckCircleOutlineIcon sx={{marginBottom:"6px",marginRight:"4px",color:"green"}}/>: <CheckCircleOutlineIcon sx={{marginBottom:"6px",marginRight:"4px"}}/>}
        {data?.status}
      </Typography>
      </Box>
       </Box>
      </Box>
      <Box>
yetrywrt
      </Box>
     </Stack>
      <Divider />
      <Stack sx={{backgroundColor:"#f5f7f9", pt:"24px",pb:"20px",px:"28px"}} spacing={2}>
  <Box >
      <Box>
       <Typography  sx={{borderBottom:"4px" ,borderColor: 'primary.main' }}> Settings</Typography>
      </Box>
  </Box>
      </Stack>
    <Stack spacing={2} sx={{backgroundColor:"#f5f7f9", pt:"24px",pb:"20px",px:"28px",mt:"20px"}}>
    <ProfileComponents isLoading={isLoading} data={data} />
     </Stack>
    </Box>
  );
};

export default ProfilePage;