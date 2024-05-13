// "use client"
import { Box, Button, Container, Typography } from "@mui/material";
import SpecialistCard from "./SpecialistCard";

const Specialist =() => {

  return (
 <>
    <Container>

<Box sx={{
   margin:"20px 0px",
   textAlign:"center"
}}>
  <Box sx={{
    textAlign:"start"
  }}>
  <Typography variant="h4" fontWeight={600}>Explore Treatment Across Specialties</Typography>
  <Typography component={"p"} fontWeight={300} fontSize={18}>Experienced Doctors Across All Specialist</Typography>
  </Box>
<SpecialistCard />
<Button sx={{marginTop:"20px"}} variant="outlined">View All</Button>
</Box>
</Container>
 </>

  );
};

export default Specialist;