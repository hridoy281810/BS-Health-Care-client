"use client"
import  { useEffect, useState } from 'react';
import { Box, Button, IconButton, Pagination, Stack, Typography } from '@mui/material';
import DoctorScheduleModal from './components/DoctorScheduleModal';
import { DataGrid, GridColDef, GridRowEditStopReasons } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { dateFormatter } from '@/utils/DateFormatter';
import { useDeleteDoctorScheduleMutation, useGetAllDoctorSchedulesQuery } from '@/redux/api/doctorScheduleApi';
import { toast } from 'sonner';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDeleteScheduleMutation } from '@/redux/api/scheduleApi';
const SchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query:Record<string,any> = {}
  const [page,setPage] = useState(1)
const [limit,setLimit] = useState(4)
query['page'] = page
query['limit'] = limit
  const [allSchedule,setAllSchedule] = useState<any>([])
const {data,isLoading } = useGetAllDoctorSchedulesQuery({...query})
const [deleteSchedule]  = useDeleteScheduleMutation()

const schedules = data?.doctorSchedules 
console.log(schedules,"doctor");

const meta = data?.meta
// console.log(meta);
let pageCount: number;
if(meta?.total){
  pageCount = Math.ceil(meta.total / limit) 
}
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};
  useEffect(()=>{
    const updateData = schedules?.map((schedule:any)=> {
      return {
        // sl: idx + 1,
        id:schedule.scheduleId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        endDate: dateFormatter(schedule?.schedule?.endDate),
        startTime: dayjs(schedule?.schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
      },[schedules])

  const columns: GridColDef[] = [
    // { field: 'sl', headerName: 'SL', flex:1},
    { field: 'startDate', headerName: 'Date', flex:1},
    { field: 'startTime', headerName: 'Start Time', flex:1},
    { field: 'endTime', headerName: 'End Time', flex:1},
    { field: 'id', headerName: 'Action', flex:1,headerAlign:"center",align:"center", renderCell:({row})=>{
      // console.log(row);
  const handleDelete = async(id:string)=>{    
   try{
      const res = await deleteSchedule(id).unwrap();
      console.log(res);
      
     if(res?.id){
      toast.success("Schedule deleted successfully")
     }
   }catch(error:any){
        toast.error(error?.message)
   } 
    
  }

      return (
 <Box>
      <IconButton onClick={()=>handleDelete(row?.id)} aria-label='delete'>
      <DeleteIcon sx={{color:"red"}} />
     </IconButton>
  
 </Box>
    )}
   },
  ];

  return (
    <Box>
    <Button sx={{mt:3}} endIcon={<AddCircleIcon />} onClick={()=> setIsModalOpen(true)}>
      Create Doctor Schedule
    </Button>
    <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen}/>
    <Box mb={5}>
    {!isLoading? ( <Box my={2}>
   <DataGrid
        rows={allSchedule ?? []}
        columns={columns}
        hideFooterPagination
        slots={{
          footer:()=>{
          return   <Box sx={{
              mb:2,
              display:'flex',
              justifyContent:"center"
          }}>
          <Pagination color='primary' count={pageCount} page={page} onChange={handleChange} />
        </Box>
          }
        }}
      />
   </Box>
  ) : (<h1>Loading....</h1>)}
    </Box>
    </Box>
  );
};

export default SchedulePage;