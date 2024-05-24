// "use client"
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PaymentIcon from '@mui/icons-material/Payment';
const TopRatedDoctors = async() => {
    const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3")
    const{ data:doctors }= await res.json()
    console.log(doctors);
    
  return (
    <Box sx={{
        my:10,
        py:30,
        backgroundColor:"rgba(20,20,20,0.1)",
        clipPath:"polygon(0 0, 100% 25%, 100% 100%, 0 75%)"

    }}>
     <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" component="h1" fontWeight={700}>
       Our Top Rated Doctors
        </Typography>
        <Typography  component="p" fontWeight={400} fontSize={18} sx={{mt:2}}>
    Access to expert physicians and surgeons, advance technologies
        </Typography>
        <Typography  component="p" fontWeight={400} fontSize={18} >
  and top-quality surgery facilities right here.
        </Typography>
     </Box>
 <Container sx={{
       margin:"30px auto"
 }}>
 <Grid container spacing={2}>
{
    doctors?.map((item: any)=>(
        <Grid item key={item.id} md={4} >
            <Card sx={{ }}>
    <Box>
        <Image     
       
        src={item?.profilePhoto! || "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1713936271~exp=1713939871~hmac=ada5802159c0f0f841e48831e328ea7101cfc11c887c318d823e790ab3ef70d5&w=826"}  alt="green iguana" width={500} height={1000}  />
    </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item?.name!}
        </Typography>
        <Typography variant="body2" color="text.secondary">
  {item?.qualification!}, {item?.designation!}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
      <LocationOnIcon />   {item?.address!}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
      <PaymentIcon />  tk {item?.apointmentFee!}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent:"space-between",
    px:2,
    paddingBottom:"20px"
      }} >
        <Button >Book Now</Button>
        <Button variant="outlined">View Profile</Button>
      </CardActions>
    </Card>
        </Grid>
    ))
}
</Grid>
  <Box sx={{
textAlign:"center"
  }}>
  <Button sx={{marginTop:"20px"}} variant="outlined">View All</Button>
  </Box>
 </Container>
    </Box>
  );
};

export default TopRatedDoctors;