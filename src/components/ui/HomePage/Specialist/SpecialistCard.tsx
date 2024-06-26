// "use server"
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
const SpecialistCard = async() => {
  const res =await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/specialties`,{
    next:{
      revalidate:30
    }
  })
  const {data:specialties} = await res.json()
  console.log(specialties,"asseeeeee");
  return (
    <Stack direction="row" gap={4} mt={5}>
    {
     specialties?.slice(0,6).map((item:any )=>(
      <Box key={item.id} sx={{
        flex:1,
        width:"150px",
        backgroundColor: "rgba(245, 245, 245, 1)",
        border:"1px solid rgba(250,250,250,1)",
        borderRadius:"10px",
        textAlign:"center",
        padding:"40px 10px",
        "& img": {
          width:"50px",
          height:"50px",
          mx:"auto"
        },
        "&:hover": {
          border:"1px solid blue",
          padding:"40px 10px",
          borderRadius:"10px",
        }
     
      }} component={Link} href={ `/doctors?specialties=${item?.title}`} >
      <Image src={item.icon} alt="speciality icon" width={100} height={100} />
      <Box>
      <Typography mt={2} component={"p"} fontWeight={300} fontSize={18}>{item.title}</Typography>
      </Box>
       </Box>
     ))
    }
   </Stack>
  );
};

export default SpecialistCard;