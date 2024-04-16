import { getUsrInfo, removeUser } from '@/services/actions/auth.service';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthButton = () => {
    const userInfo = getUsrInfo()
    console.log(userInfo);
    const router = useRouter()
    const handleLogOut = ()=>{
     removeUser()
     router.refresh()
    }
  
  return (
    <>
{  
  userInfo?.userId ? 
   (<Button onClick={handleLogOut} color="error">Logout</Button>)
  :(<Button component={Link} href='/login'>Login</Button>)
   }
    </>
  );
};

export default AuthButton;