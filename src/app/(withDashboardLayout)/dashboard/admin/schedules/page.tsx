"use client"
import { Box, Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import ScheduleModal from './components/ScheduleModal';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDeleteScheduleMutation, useGetAllSchedulesQuery } from '@/redux/api/scheduleApi';
import { toast } from 'sonner';
import DeleteIcon from "@mui/icons-material/Delete";

import { dateFormatter } from '@/utils/DateFormatter';
import dayjs from 'dayjs';
import { useDeleteDoctorScheduleMutation } from '@/redux/api/doctorScheduleApi';
const SchedulesPage = () => {
  const [allSchedule,setAllSchedule] = useState<any>([])
  const {data,isLoading} = useGetAllSchedulesQuery({})
  console.log(data,'doctor data');
  
  const schedules = data?.schedules
  useEffect(()=>{
const updateData =schedules?.map((schedule)=> {
  return {
    id:schedule?.id,
    startDate: dateFormatter(schedule.startDate),
    endDate: dateFormatter(schedule.endDate),
    startTime: dayjs(schedule?.startDate).format("hh:mm a"),
    endTime: dayjs(schedule?.endDate).format("hh:mm a")
  };
});
setAllSchedule(updateData);
  },[schedules])
  const [deleteSchedule] = useDeleteScheduleMutation()
  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation()

  const [isModalOpen,setISModalOpen] = useState<boolean>(false)
  const columns: GridColDef[] = [
    { field: 'startDate', headerName: 'Start Date', flex:1},
    { field: 'endDate', headerName: 'End Date', flex:1},
    { field: 'startTime', headerName: 'Start Time', flex:1},
    { field: 'endTime', headerName: 'End Time', flex:1},
    { field: 'id', headerName: 'Action', flex:1,headerAlign:"center",align:"center", renderCell:({row})=>{
  const handleDelete = async(id:string)=>{
   try{
      const res = await deleteDoctorSchedule(id).unwrap();
    //  console.log('delete data',res);
     if(res?.id){
      toast.success("Schedule deleted successfully")
     }
   }catch(error:any){
        toast.error(error?.message)
   } 
    
  }
      return (
 <Box>
      <IconButton onClick={()=> handleDelete(row?.id)} aria-label='delete'>
      <DeleteIcon sx={{color:"red"}} />
     </IconButton>
  
 </Box>
    )}
   },
  ];
  return (
    <Box>
       <Button onClick={()=> setISModalOpen(true)}>Create Schedule</Button>
       <ScheduleModal open={isModalOpen} setOpen={setISModalOpen}/> 
       {!isLoading? ( <Box my={2}>
   <DataGrid
        rows={allSchedule ?? []}
        columns={columns}
      />
   </Box>
  ) : (<h1>Loading....</h1>)}
    </Box>
  );
};

export default SchedulesPage;