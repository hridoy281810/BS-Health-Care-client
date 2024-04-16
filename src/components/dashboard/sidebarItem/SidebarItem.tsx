import  { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { Box,  Stack, Typography } from '@mui/material';
import logo from '@/assets/svgs/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import { generateSidebarItem } from '@/utils/generateSidebarItem';
import { TUserRole } from '@/types';
import SidebarItems from './SidebarItems';
import { getUsrInfo } from '@/services/actions/auth.service';

  const SidebarItem = () => {
    const [userRole,setUserRole] = useState('')
    useEffect(()=>{
      const userInfo = getUsrInfo();
      if (userInfo && userInfo.role) {
        setUserRole(userInfo.role);
      }
    },[])
  
    return (
    <Box>
      <Stack 
      direction="row"
      justifyContent="center"
      alignItems="center"
       gap={1}
       sx={{
        py:1,
        mt:1
       }}
       component={Link}
       href="/"
      >
        <Image src={logo} width={40} height={40} alt='logo' />
        <Typography variant='h6' component="h1">
          BS Health Care
        </Typography>
      </Stack>
    <List>
      {generateSidebarItem(userRole as TUserRole).map((item, index) => (
        <SidebarItems key={index} item={item} index={index}/>

      ))}
    </List>
    </Box>
    );
  };
  
  export default SidebarItem;