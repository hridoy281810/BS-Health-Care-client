import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const ReviewCard = ({review}:{review:any}) => {
  return (
    <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Patient Review for {review?.doctor.email}
          </Typography>
          <Typography variant="h5" component="div">
            {review?.patient.name}
          </Typography>
          <Typography variant="body2" sx={{my:1}}>
            Patient Email: {review?.patient.email}
          </Typography>
          <Rating name="read-only" value={review?.rating} readOnly />
         <Box sx={{
            border:"1px dashed gray",
            py:2,
            px:3,
            mt:2
         }}>
         <Typography variant="body2">
        {review?.comment}
          </Typography>
         </Box>
        </CardContent>
      </React.Fragment>
  );
};

export default ReviewCard;