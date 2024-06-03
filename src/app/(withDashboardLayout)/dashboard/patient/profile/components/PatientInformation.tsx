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
const PatientInformation = ({data}:any) => {
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
    Contact Number

    </Typography>
    <Typography>
      {data?.contactNumber
}
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
</Stack>
    </>
  );
};
export default PatientInformation;