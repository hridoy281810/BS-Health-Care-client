"use client"
import  { useEffect, useState } from 'react';
import { Box, Button, IconButton, Pagination, Stack, Typography } from '@mui/material';
import DoctorScheduleModal from './components/DoctorScheduleModal';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { dateFormatter } from '@/utils/DateFormatter';
import { useDeleteDoctorScheduleMutation, useGetAllDoctorSchedulesQuery } from '@/redux/api/doctorScheduleApi';
import { toast } from 'sonner';
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useGetSingleUserQuery } from '@/redux/api/userApi';
const SchedulePage =() => {
const {data:doctor} = useGetSingleUserQuery(undefined)
console.log(doctor?.id,'1');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const query:Record<string,any> = {}
  const [page,setPage] = useState(1)
   const [limit,setLimit] = useState(4)
  query['page'] = page
  query['limit'] = limit
  const [allSchedule,setAllSchedule] = useState<any>([])
const doctorSchedule = allSchedule?.filter((schedule:any)=> schedule?.doctorId === doctor?.id)
const {data,isLoading } = useGetAllDoctorSchedulesQuery({...query})
// const [deleteSchedule]  =useDeleteScheduleMutation()
const [deleteDoctorSchedule]  =useDeleteDoctorScheduleMutation()
const meta = data?.meta
let pageCount: number;
if(meta?.total){
  pageCount = Math.ceil(meta.total / limit) 
}
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};
  useEffect(()=>{
    const updateData = (data?.doctorSchedules as any[])?.map((schedule:any)=> {
      return {
        id:schedule.scheduleId,
        doctorId:schedule?.doctor?.id,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        endDate: dateFormatter(schedule?.schedule?.endDate),
        startTime: dayjs(schedule?.schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
      },[data?.doctorSchedules])

  const columns: GridColDef[] = [
    { field: 'startDate', headerName: 'Date', flex:1},
    { field: 'startTime', headerName: 'Start Time', flex:1},
    { field: 'endTime', headerName: 'End Time', flex:1},
    { field: 'id', headerName: 'Action', flex:1,headerAlign:"center",align:"center", renderCell:({row})=>{
      console.log(row);
  const handleDelete = async(id:string)=>{    
   try{
      const res = await deleteDoctorSchedule(id).unwrap();
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
 {doctorSchedule?.length > 0 ?  <Box mb={10}>
    {!isLoading  ?
     (
    <Box my={2}>
   <DataGrid
        rows={doctorSchedule ?? []}
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
    </Box>: <Box mb={5}>
      <Typography>no schedule available right now</Typography> </Box>}
    </Box>
  );
};

export default SchedulePage;