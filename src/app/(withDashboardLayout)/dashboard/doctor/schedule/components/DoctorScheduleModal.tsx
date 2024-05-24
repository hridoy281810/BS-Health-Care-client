import BSModal from '@/components/shared/modal/BSModal';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useGetAllSchedulesQuery } from '@/redux/api/scheduleApi';
import MultipleSelectField from './MultipleSelectField';
import {  Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCreateDoctorScheduleMutation } from '@/redux/api/doctorScheduleApi';
import { FieldValues } from 'react-hook-form';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DoctorScheduleModal = ({open,setOpen}:TProps) => {
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()).toISOString());
    // console.log(selectedDate);
    const [selectedScheduleIdes,setSelectedScheduleIdes] = useState<string[]>([])
    console.log(selectedScheduleIdes);
    
    const query:Record<string,any> = {}
    if(!!selectedDate){
        query["startDate"] = dayjs(selectedDate).hour(0).minute(0).millisecond(0).toISOString()
        query["endDate"] =  dayjs(selectedDate).hour(23).minute(59).millisecond(999).toISOString()
    }
    const {data} = useGetAllSchedulesQuery(query)
    const schedules = data?.schedules
    // console.log(schedules);
const [createDoctorSchedule, {isLoading}] = useCreateDoctorScheduleMutation()

    const onSubmit = async(value:FieldValues)=>{

        try{
        const res = await createDoctorSchedule({scheduleIds:selectedScheduleIdes}).unwrap()
        console.log(res,'doctor sedule');
           if(res?.success === true ){
            setOpen(false)
           }
        }catch(error:any){
console.log(error.message);

        }
    }
  return (
    <BSModal open={open} setOpen={setOpen} title='Create Doctor Schedule' >
      <Stack direction={"column"} gap={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) => setSelectedDate(dayjs(newValue).toISOString())}
          sx={{width: "100%"}}
        />
    </LocalizationProvider>
    <MultipleSelectField selectedScheduleIdes={selectedScheduleIdes} setSelectedScheduleIdes={setSelectedScheduleIdes} schedules={schedules!}/>
    <LoadingButton
          size="small"
          onClick={onSubmit}
          loading={isLoading}
          loadingIndicator="Submitting..."
          variant="contained"
         
        >
          <span typeof='submit'>Submit</span>
        </LoadingButton>
      </Stack>
    </BSModal>
  );
};

export default DoctorScheduleModal;