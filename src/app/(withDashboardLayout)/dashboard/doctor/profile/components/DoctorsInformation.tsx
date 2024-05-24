import { Box, Stack, Typography, styled } from '@mui/material';
interface StyleInformationBoxProps {
  theme?: any;
}
const StyleInformationBox = styled(Box)<StyleInformationBoxProps>(({theme})=> ({
  background:"#f4f7fe",

  borderRadius: theme.spacing(1),
  width:"45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600
  }
}));
const DoctorsInformation = ({data}:any) => {
  return (
    <>
<Typography variant='h6' color='primary.main' mb={2}>
  Basic Information
</Typography>
<Stack  sx={{
  mb:4
}} direction={{xs: "column" ,md:"row"}} gap={2} flexWrap={"wrap"}>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
   Role
    </Typography>
    <Typography>
      {data?.role}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
 Name
    </Typography>
    <Typography>
      {data?.name}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
   Email
    </Typography>
    <Typography>
      {data?.email}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
  Gender
    </Typography>
    <Typography>
      {data?.gender}
    </Typography>

  </StyleInformationBox>
</Stack>
<Typography variant='h6' color='primary.main' mb={2}>
  Probational Information
</Typography>
<Stack   direction={{xs: "column" ,md:"row"}} gap={2} flexWrap={"wrap"}>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
  Description
    </Typography>
    <Typography>
      {data?.designation}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
Appointment Fee 
    </Typography>
    <Typography>
      {data?.apointmentFee}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
   Qualification 
    </Typography>
    <Typography>
      {data?.qualification}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
  Current Working Place 
    </Typography>
    <Typography>
      {data?.currentWorkingPlace}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
  Joined
    </Typography>
    <Typography>
      {data?.createdAt}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
  Current Status
    </Typography>
    <Typography>
      {data?.status}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
Average Rating
    </Typography>
    <Typography>
      {data?.averageRating}
    </Typography>

  </StyleInformationBox>
  <StyleInformationBox>
    <Typography color='secondary' variant='caption'>
Experience
    </Typography>
    <Typography>
      {data?.experience}
    </Typography>

  </StyleInformationBox>
</Stack>
    </>
  );
};

export default DoctorsInformation;