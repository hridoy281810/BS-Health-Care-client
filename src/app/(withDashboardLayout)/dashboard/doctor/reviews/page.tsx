"use client"
import * as React from 'react';
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import Box from '@mui/material/Box';
import { Card, Grid, Typography } from '@mui/material';
import ReviewCard from './components/ReviewCard';
const MyReviewPage = () => {
const {data:myInfo}= useGetSingleUserQuery({})
    const doctorEmail = myInfo?.email
    let query: Record<string, any> = {};
    query["doctorEmail"] = doctorEmail;
    const {data:myReviewData} = useGetAllReviewsQuery({...query})
    const review = myReviewData?.schedules
    console.log(myReviewData,'hello');
    return (
   
       <Box sx={{ minWidth: 275 }}>
{review!?.length > 0 ? 
  <Grid container spacing={2} sx={{my:5}}>
    {
          myReviewData?.schedules?.map((review)=> (
            <Grid item xs={12} sm={12} md={4} >
            <Card key={review?.id}  variant="outlined">
             <ReviewCard review={review} />
            </Card>
            </Grid>
          ))
         }
     {
          myReviewData?.schedules?.map((review)=> (
            <Grid item xs={12} sm={12} md={4} >
            <Card key={review?.id}  variant="outlined">
             <ReviewCard review={review} />
            </Card>
            </Grid>
          ))
         }
    </Grid>: <Typography >No reviews from your patients are available at the moment. Please check back later or encourage your patients to leave a review.</Typography>}
    </Box>
    
  );
};

export default MyReviewPage;