import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebook from '../../../assets/landing_page/facebook.png'
import instagram from '../../../assets/landing_page/instagram.png'
import twitter from '../../../assets/landing_page/twitter.png'
import linkedin from '../../../assets/landing_page/linkedin.png'

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
    <Container >
    <Stack direction="row" justifyContent="center" gap={4}>
    <Typography color="#fff" component={Link} href='/consultation'>Consultation</Typography>
    <Typography color="#fff">Health Plans</Typography>
    <Typography color="#fff">Medicine</Typography>
    <Typography color="#fff">Diagnostics</Typography>
    <Typography color="#fff">NGOS</Typography>
   </Stack>
    <Stack direction="row"justifyContent="center" gap={2} py={3}>
   <Image src={facebook} width={30} height={30}  alt="facebook"/>
   <Image src={instagram} width={30} height={30}  alt="facebook"/>
   <Image src={twitter} width={30} height={30}  alt="facebook"/>
   <Image src={linkedin} width={30} height={30}  alt="facebook"/>
   </Stack>
   {/* <div className="border-b-[1px] border-dashed"></div> */}
   <Box sx={{
    border:"1px dashed lightgray"
   }}>

   </Box>
   <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2} py={3}>
    <Typography color="#fff" component='p' >
        &copy;2024 bs HealthCare. All Rights Reserved.
    </Typography>
    <Typography variant='h4' component={Link} href='/' fontWeight={600} color="#fff">
    B<Box component="span" color="primary.main">S</Box> Health Care
   </Typography>
   <Typography color="#fff" component='p' >
       Privacy Policy! Terms & Conditions
    </Typography>
   </Stack>
    </Container>
    </Box>
  );
};

export default Footer;