'use client'
import { useGetALlMetaQuery } from '@/redux/api/userApi';
import TotalCountForDoctor from './components/TotalCountForDoctor';
import { CircularProgress } from '@mui/material';

const DoctorPage = () => {
  const {data,isLoading,isFetching} = useGetALlMetaQuery({})
  if(isLoading || isFetching){
    return  <CircularProgress />
  }
  const metaData = data?.meta
  return (
    <div>
       <div className='mt-2'>
  <TotalCountForDoctor
   patientCount={metaData?.patientCount!}
   appointmentCount={metaData?.appointmentCount!}
   reviewCount={metaData?.reviewCount!}
   revenue={metaData?.totalRevenue?._sum?.amount}
  />
    </div>
    </div>
  );
};

export default DoctorPage;