"use client"
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; 
dayjs.extend(utc)
import { useGetAllDoctorSchedulesQuery } from '@/redux/api/doctorScheduleApi';
import { Box, Button, Stack, Typography } from '@mui/material';
import { dateFormatter } from '@/utils/DateFormatter';
import { getTimeIn12HourFormat } from '@/app/(withDashboardLayout)/dashboard/doctor/schedule/components/MultipleSelectField';
import { DoctorSchedule } from '@/types';
import { useEffect, useState } from 'react';
import { useCreateAppointmentMutation } from '@/redux/api/appointment';
import { useInitialPaymentMutation } from '@/redux/api/payment';
import { useRouter } from 'next/navigation';
const DoctorScheduleSlots = ({id}:{id:string}) => {
   const router = useRouter()
  const [scheduleId, setScheduleId] = useState('');
  let query: Record<string, any> = {};
  query['doctorId'] = id;
//   query['startDate'] = dayjs(new Date())
//      .utc()
//      .hour(0)
//      .minute(0)
//      .second(0)
//      .millisecond(0)
//      .toISOString();
//   query['endDate'] = dayjs(new Date())
//      .utc()
//      .hour(23)
//      .minute(59)
//      .second(59)
//      .millisecond(999)
//      .toISOString();
   const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
   console.log(data?.doctorSchedules,'main data');
   
  const currentDate = new Date();
  const today = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const [createAppointment] = useCreateAppointmentMutation()
  const [initialPayment] = useInitialPaymentMutation()
  const handleBookAppointment = async () => {
   try{
   if(id && scheduleId){
    const res = await createAppointment({doctorId:id,scheduleId}).unwrap()
    if(res?.id){
       const paymentRes = await initialPayment(res?.id).unwrap()
       if(paymentRes?.paymentUrl){
         router.push(paymentRes?.paymentUrl)
       }
    }
   }
   }catch(error){
  };}
  const [availableSlots, setAvailableSlots] = useState<DoctorSchedule[]>([]);
  console.log(availableSlots,'slot data');
  
  useEffect(() => {
    if (data && Array.isArray(data.doctorSchedules)) {
      const filteredSchedules:DoctorSchedule[] = data?.doctorSchedules?.filter((schedule: DoctorSchedule) => !schedule.isBooked);
      setAvailableSlots(filteredSchedules);
    }
  }, [data]);

  return (
    <Box mb={5}>
    <Box sx={{ bgcolor: 'white', p: 3, mt: 1 }}>
       <Typography variant='h4' mb={3} color='primary.main'>
          Availability
       </Typography>
       <Typography variant='h6' fontSize={16}>
          <b>
             Today:{' '}
             {dateFormatter(currentDate.toISOString()) + ' ' + today}
          </b>
       </Typography>
       <Box sx={{ borderBottom: '2px dashed #d0d0d0', mt: 2, mb: 3 }} />
       <Stack direction='row' alignItems='center' flexWrap='wrap' gap={2}>
          {availableSlots?.length ? (
             isLoading ? (
                'Loading...'
             ) : (
                availableSlots?.map((doctorSchedule:DoctorSchedule) => {
                   const formattedTimeSlot = `${getTimeIn12HourFormat(
                      doctorSchedule?.schedule?.startDate
                   )} - ${getTimeIn12HourFormat(
                      doctorSchedule?.schedule?.endDate
                   )}`;

                   return (
                      <Button
                         key={doctorSchedule?.scheduleId}
                         color='primary'
                         onClick={() =>
                            setScheduleId(doctorSchedule?.scheduleId)
                         }
                         variant={`${
                            doctorSchedule?.scheduleId === scheduleId
                               ? 'contained'
                               : 'outlined'
                         }`}
                      >
                         {formattedTimeSlot}
                      </Button>
                   );
                })
             )
          ) : (
             <span style={{ color: 'red' }}>
                No Schedule is Available Today!
             </span>
          )}
       </Stack>
    </Box>

    <Button
       onClick={handleBookAppointment}
       sx={{ display: 'block', mx: 'auto' }}
    >
       Book Appointment Now
    </Button>
 </Box>
  );
};
export default DoctorScheduleSlots;