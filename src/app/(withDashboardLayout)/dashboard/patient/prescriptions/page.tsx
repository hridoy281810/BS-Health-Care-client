'use client'
import { useGetMyPrescriptionsQuery } from '@/redux/api/prescriptionApi';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/svgs/logo.svg'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import html2pdf from 'html2pdf.js';
import { dateFormatter } from '@/utils/DateFormatter';

const parseInstructions = (instructions: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(instructions, 'text/html');
  const parsedInstructions = Array.from(doc.body.childNodes);

  return parsedInstructions.map((node, index) => (
    <div key={index} dangerouslySetInnerHTML={{ __html: (node as Element).outerHTML as any }} />
  ));
};

const downloadPDF = (prescription: any) => {
  const content = document.getElementById('prescription-container')!;
  html2pdf().from(content).save();
};

const PrescriptionsPage = () => {
  const { data: prescriptionsData } = useGetMyPrescriptionsQuery({});
  console.log(prescriptionsData);
  
  return (
    <Grid container spacing={2} sx={{my:1}}>
      {prescriptionsData?.prescriptions.map((prescription: any, index) => (
        <Grid item xs={6} sm={12} md={6} key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            mx="auto"
          >
         <Typography>
         <Button sx={{marginBottom:2}}  endIcon={<FileDownloadIcon />} onClick={() => downloadPDF(prescription)} >
          Download PDF
         </Button>
         </Typography>
            <Box id="prescription-container" p={3} sx={{ backgroundColor: '#d9f4fa' }}>
              <Image className='mx-auto m-2' src={logo} width={50} height={50} alt='logo' />
              <Typography sx={{ textAlign: "center" }} variant="h6" className="clinic-name">BS Health Care</Typography>
              <Stack mb={2} direction="row" justifyContent="space-between">
                <Stack direction="column">
                  <Typography variant="h6" className="doctor-name">{prescription?.doctor?.name}</Typography>
                  <Typography variant="body2">MEDICINE DOCTOR</Typography>
                  <Typography variant="body2">{prescription?.doctor?.currentWorkingPlace}</Typography>
                  <Typography variant="body2">{prescription?.doctor?.address}</Typography>
                  <Typography variant="body2">Phone: {prescription?.doctor?.contactNumber}</Typography>
                </Stack>
              </Stack>
              <Divider variant="middle" />
              <Box mt={2} className="patient-info">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="h6" >{prescription?.patient?.name}</Typography>
                    <Typography variant="body2">Phone: {prescription?.patient?.contactNumber}</Typography>
                  </Box>
                  <Stack direction="column">
                    <Typography variant="body2">Date of Birth: 01/01/2000</Typography>
                    <Typography variant="body2">Age: 24</Typography>
                    <Typography variant="body2">Gender: Male</Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{
                border: 1,
                p: 3,
                marginTop: 2
              }}>
                {parseInstructions(prescription?.instructions)}
                <Typography>
                Date of next meeting:  {dateFormatter(prescription?.followUpDate)}
                </Typography>
              </Box>
              <Typography sx={{
                textAlign: "center",
                color: "primary.main",
                marginTop: 2
              }}>
                Embrace wellness with confidence – BS Health Care stands steadfast by your side, empowering your journey to better health.
              </Typography>
              <Typography variant="h6">Hospital Information</Typography>
              <Typography variant="body1">Location: Level 7, Shop 15,16,18,19 Mirpur DOHS Shopping Complex, 1216</Typography>
              <Typography variant="body1">Contact Number: +880 01739749758,990-84875 (24/7)</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PrescriptionsPage;
