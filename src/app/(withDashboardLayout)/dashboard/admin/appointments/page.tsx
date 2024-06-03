"use client"
import  {  useState } from 'react';
import { Box,IconButton, Pagination,  } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetAllAppointmentsQuery, useGetMyAppointmentsQuery } from '@/redux/api/appointment';
import { dateFormatter } from '@/utils/DateFormatter';
import { getTimeIn12HourFormat } from '../../doctor/schedule/components/MultipleSelectField';
import Link from 'next/link';
import VideocamIcon from '@mui/icons-material/Videocam';
import BsChip from '@/components/shared/BsChips/BsChip';
import MedicationIcon from '@mui/icons-material/Medication';
const AppointmentsPage = () => {
  const query:Record<string,any> = {}
  const [page,setPage] = useState(1)
const [limit,setLimit] = useState(4)
query['page'] = page
query['limit'] = limit
const {data:appointmentData,isLoading } = useGetAllAppointmentsQuery({})
const appointments = appointmentData?.appointment
console.log(appointments);

const meta = appointmentData?.meta
let pageCount: number;
if(meta?.total){
  pageCount = Math.ceil(meta.total / limit) 
}
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
};
  const columns: GridColDef[] = [
    { field: 'doctorName', headerName: 'Doctor Name', flex:1,
    renderCell:({row})=> {
      return row?.doctor?.name
    }
  },
    { field: 'name', headerName: 'Patient Name', flex:1,
      renderCell:({row})=> {
        return row?.patient?.name
      }
    },
    {
      field: 'contactNumber', headerName: 'Patient Contact Number', flex: 1,
      renderCell: ({ row }) => {
        return row?.patient?.contactNumber
      }
    },
    {
      field: 'apointmentFee', headerName: 'Apointment Fee', flex: 1,
      renderCell: ({ row }) => {
        return row?.doctor?.apointmentFee + 'Tk'
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