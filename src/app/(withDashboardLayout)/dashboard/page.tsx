
   import Box from '@mui/material/Box';
import { TChildrenProps } from '@/types';
import { Typography } from '@mui/material';
    const DashboardHomePage = () => {
      return (
        <Box sx={{ display: 'flex' }}>
   <Typography variant='h6' component="h1">
    Welcome TO dashboard
   </Typography>
        </Box>
      );
    }

export default DashboardHomePage;