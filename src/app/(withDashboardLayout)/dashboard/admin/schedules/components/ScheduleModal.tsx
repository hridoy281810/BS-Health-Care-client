
import BSForm from '@/components/Forms/BSForm';
import BSModal from '@/components/shared/modal/BSModal';
import { Button, Grid } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { TProps } from '../../doctors/components/DoctorModal';
import BSDatePicker from '@/components/Forms/BSDatePicker';
import BSTimePicker from '@/components/Forms/BSTimePicker';
import { dateFormatter } from '@/utils/DateFormatter';
import { useCreateScheduleMutation } from '@/redux/api/scheduleApi';
import { toast } from 'sonner';
import { timeFormatter } from '@/utils/TimeFormatter';

const ScheduleModal =({open,setOpen}:TProps) => {
    const [createSchedule,{data}] = useCreateScheduleMutation()
    // console.log("data",data);
    
   const handleFormSubmit = async(values:FieldValues)=>{
       values.startDate = dateFormatter(values.startDate)
       values.endDate = dateFormatter(values.endDate)
       values.startTime = timeFormatter(values.startTime)
       values.endTime = timeFormatter(values.endTime)
       console.log(values);
    
try{
const res = await createSchedule(values).unwrap()
console.log(res,"res");
if(res?.length > 0){
    toast.success("Schedule created successfully!!")
    setOpen(false)
   }

}catch(error:any){
    console.log(error.message);
    
}
   }
  return (
    <BSModal open={open} setOpen={setOpen} title='Create Schedule'>
    <BSForm onSubmit={handleFormSubmit}>
<Grid container spacing={2} sx={{width:"400px", mb:2}}>
<Grid item md={12} >
       <BSDatePicker name='startDate' label='Start Date' />
        </Grid>
        <Grid item md={12}>
       <BSDatePicker name='endDate' label='End Date' />
        </Grid>
        <Grid item md={6}>
       <BSTimePicker name='startTime' label='Start Time' />
        </Grid>
        <Grid item md={6}>
       <BSTimePicker name='endTime' label='End Time' />
        </Grid>
       </Grid>
        <Button  type='submit'>Create</Button>
    </BSForm>
    </BSModal>
  );
};

export default ScheduleModal;