import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
interface PropsType {
    searchParams: {status:string}
}
const PaymentStatus = ({searchParams}:PropsType) => {
    const status = searchParams?.status
    let icon;
    let title;
    switch(status){
    case "success":
        icon = <CheckCircleIcon sx={{fontSize:"90px",color:"#23b93c"}} />;
        title = "payment successful";
        break;
    case "cancel":
        icon = <CancelIcon sx={{fontSize:"90px",color:"#ff0000"}} />;
        title = "payment cancelled";
        break;
    case "failed":
        icon = <ErrorIcon sx={{fontSize:"90px",color:"#ff0000"}} />;
        title = "payment failed";
        break;
    default:
        icon = null;
        title = "Unknown Status!";
    }
  return (
    <Container
     sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
      }}
    >
      <Box sx={{mt:10, py:'100px',px:"150px",shadow:4, border:"1px solid #F0EBE3"}}>
          <Stack justifyContent="center" alignItems="center">
            {icon}
             <Typography variant='h5' my={2}>
                {title}
             </Typography>
             {
                status === "success" && (
                    <Button size='small' variant='outlined'>
                <Link href="/dashboard/patient/appointments">Go To Dashboard</Link>
                    </Button>
                )
             }
             {
                status !== "success" && (
                    <Button size='small' variant='outlined'>
                <Link href="/doctors"> Book Again</Link>
                    </Button>
                )
             }
          </Stack>
        </Box>      
    </Container>
  );
};

export default PaymentStatus;