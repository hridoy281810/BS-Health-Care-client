"use client"
import  {  useState } from 'react';
import { Box,IconButton, Pagination } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetMyAppointmentsQuery } from '@/redux/api/appointment';
import { dateFormatter } from '@/utils/DateFormatter';
import { getTimeIn12HourFormat } from '../../doctor/schedule/components/MultipleSelectField';
import Link from 'next/link';
import VideocamIcon from '@mui/icons-material/Videocam';
import BsChip from '@/components/shared/BsChips/BsChip';import ReviewModal from './components/ReviewModal';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useGetALlMetaQuery } from '@/redux/api/userApi';
const AppointmentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query:Record<string,any> = {}
  const [page,setPage] = useState(1)
const [limit,setLimit] = useState(4)
query['page'] = page
query['limit'] = limit
const {data:metaData } = useGetALlMetaQuery({})
console.log(metaData,'metaData');

const {data:appointmentData,isLoading } = useGetMyAppointmentsQuery({})
// const schedules = data?.doctorSchedules 
// console.log(appointmentData,'appoinstment');
const appointments = appointmentData?.appointments?.data
// console.log(appointments,"hello");

const meta = appointmentData?.meta
let pageCount: number;
if(meta?.total){
  pageCount = Math.ceil(meta.total / limit) 
}
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Doctor Name', flex:1,
      renderCell:({row})=> {
        return row?.doctor?.name
      }
    },
    { field: 'appointmentDate', headerName: 'Appointment Date', flex:1,  headerAlign:"center",
    align:"center",
      renderCell:({row})=> {
        return dateFormatter(row?.schedule?.startDate)
      }
    },
    { field: 'appointmentTime', headerName: 'Appointment Time', flex:1,  headerAlign:"center",
    align:"center",
      renderCell:({row})=> {
        return getTimeIn12HourFormat(row?.schedule?.startDate) 
      }
    },
    { field: 'paymentStatus', headerName: 'Payment Status', flex:1,  headerAlign:"center",
    align:"center",
  renderCell: ({row})=>{
     return (
      row?.paymentStatus === "PAID" ?  <BsChip label={row?.paymentStatus}  type='success' variant="outlined" />:
      <BsChip  label={row?.paymentStatus} type="error" variant="outlined" />
     )
  }
  },
    { field: 'action', headerName: 'Join', flex:1,  headerAlign:"center",
    align:"center",
    renderCell: ({row})=>{
      return(
         <IconButton component={Link} href={`/video?videoCallingId=${row?.videoCallingId}`}
        disabled={row?.paymentStatus === "UNPAID"}>
        <VideocamIcon  sx={{
          color: row?.paymentStatus === 'PAID' ? "primary.main": ""
        }}/>
         </IconButton>
      )
    }
  },
    { field: 'review', headerName: 'Review', flex:1,  headerAlign:"center",
    align:"center",
    renderCell: ({row})=>{
      return(
        <>
         <IconButton onClick={()=> setIsModalOpen(true)}  disabled={row?.paymentStatus === "UNPAID"}>
              <RateReviewIcon  sx={{
          color: row?.paymentStatus === 'PAID' ? "primary.main": ""
        }}/>
         </IconButton>
            <ReviewModal appointmentId={row?.id} open={isModalOpen} setOpen={setIsModalOpen}/>
        </>

      )
    }
  },
    
  ];

  return (
    <Box>
    <Box mb={5}>
    {!isLoading? ( <Box my={2}>
   <DataGrid
        rows={appointments || []}
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

export default AppointmentsPage;