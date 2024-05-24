'use server'
import DashedLine from '@/components/ui/HomePage/Doctor/DashedLine';
import DoctorCard from '@/components/ui/HomePage/Doctor/DoctorCard';
import ScrollCategory from '@/components/ui/HomePage/Doctor/ScrollCategory';
// const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/doctor?page=1&limit=3`)
// const{ data:doctors }= await res.json()
import { Box, Container } from '@mui/material';
type TDoctorPageProps = {
  searchParams:  { specialties: string }
}
const DoctorsPage = async({searchParams}:TDoctorPageProps) => {
  console.log(searchParams);
      let res;
      console.log(res);
      
      if(searchParams?.specialties){
           res = await fetch(`http://localhost:5000/api/v1/doctor?specialties=${searchParams?.specialties}`);
     
      }else{
          res = await fetch(`http://localhost:5000/api/v1/doctor`);
      }
      const data = await res.json()
      console.log(data.data,"anis tumi kar");
      return (
    <Container>
<DashedLine />
<ScrollCategory specialties={searchParams.specialties} />
   <Box sx={{mt:2, p:3,bgcolor:"secondary.light"}}>
    {
     data?.data?.map((doctor:any, idx:number)=> (
        <Box key={doctor?.id}>
          <DoctorCard doctor={doctor} />
          {idx === data.length - 1 ? null: <DashedLine />}
        </Box>
      ))
    }
  {
    data.length === 0 && <Box>No Doctor Found With This Specialty</Box>
  }
   </Box>

    </Container>
  );
};

export default DoctorsPage;