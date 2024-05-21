"use client"
import { useState } from 'react';
import { Box, IconButton, Pagination } from '@mui/material';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetMyAppointmentsQuery } from '@/redux/api/appointment';
import { dateFormatter } from '@/utils/DateFormatter';
import { getTimeIn12HourFormat } from '../../doctor/schedule/components/MultipleSelectField';
import Link from 'next/link';
import VideocamIcon from '@mui/icons-material/Videocam';
const AppointmentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {}
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(4)
  query['page'] = page
  query['limit'] = limit
  const { data: appointmentData, isLoading } = useGetMyAppointmentsQuery({})
  // const schedules = data?.doctorSchedules 
  console.log(appointmentData, 'appoinstment');
  const appointments = appointmentData?.appointments?.data
  console.log(appointments, 'true');
  const meta = appointmentData?.meta
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit)
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const columns: GridColDef[] = [
    {
      field: 'name', headerName: 'Doctor Name', flex: 1,
      renderCell: ({ row }) => {
        return row.doctor.name
      }
    },
    {
      field: 'contactNumber', headerName: 'Contact Number', flex: 1,
      renderCell: ({ row }) => {
        return row.doctor.contactNumber
      }
    },
    {
      field: 'appointmentDate', headerName: 'Appointment Date', flex: 1, headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return dateFormatter(row?.schedule.startDate)
      }
    },
    {
      field: 'appointmentTime', headerName: 'Appointment Time', flex: 1, headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return getTimeIn12HourFormat(row?.schedule?.startDate)
      }
    },
    {
      field: 'paymentStatus', headerName: 'Payment Status', flex: 1, headerAlign: "center",
      align: "center",
    },
    {
      field: 'action', headerName: 'Join', flex: 1, headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Link href={`/video?videoCallingId=${row?.videoCallingId}`}>
            <IconButton>
              <VideocamIcon />
            </IconButton>
          </Link>
        )
      }
    },

  ];
  return (
    <Box>
      <Box mb={5}>
        {!isLoading ? (<Box my={2}>
          <DataGrid
            rows={appointments || []}
            columns={columns}
            hideFooterPagination
            slots={{
              footer: () => {
                return <Box sx={{
                  mb: 2,
                  display: 'flex',
                  justifyContent: "center"
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