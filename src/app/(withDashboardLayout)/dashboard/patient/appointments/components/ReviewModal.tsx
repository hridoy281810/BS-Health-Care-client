import BSModal from '@/components/shared/modal/BSModal';
import {  Box, Button, FormControl, Input, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FieldValues } from 'react-hook-form';
import { useCreateReviewMutation } from '@/redux/api/reviewApi';
import BSForm from '@/components/Forms/BSForm';
import BSRatingInput from '@/components/Forms/BSRatingInput';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    appointmentId:string
}
const ReviewModal = ({open,setOpen,appointmentId}:TProps) => {
const [createReview, {isLoading}] = useCreateReviewMutation()
    const handleSubmit = async(values:FieldValues)=>{
        try{
            const reviewData = {
                appointmentId:appointmentId,
                rating:Number(values?.rating),
                comment:values?.comment
            }
        const res = await createReview(reviewData).unwrap()
          if(res?.appointmentId ){
            setOpen(false)
           }
        }catch(error:any){
                console.log(error.message);

        }
    }
  return (
    <BSModal  open={open} setOpen={setOpen} title='Create Review' >
    <BSForm onSubmit={handleSubmit}>
      <Stack direction={"column"} gap={2} justifyContent="center" >
     <Box  sx={{
        marginLeft:16
     }}>
     <BSRatingInput required name='rating'  type="text" fullWidth={true} sx={{ mb: 2, }} maxRating={5} />
     </Box>
      <BSRatingInput required multiline rows={4} name='comment'label='Type your commen' type='text' fullWidth={true} sx={{mb:2,width:'400px'}}/>
        <Button type='submit'>Submit</Button>
      </Stack>
      </BSForm>
    </BSModal>
  );
};


export default ReviewModal;