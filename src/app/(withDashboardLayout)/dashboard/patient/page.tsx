'use client'
import { useGetALlMetaQuery } from '@/redux/api/userApi';
import React from 'react';
import TotalCountForPatient from './components/TotalCountForPatient';
import { CircularProgress } from '@mui/material';
import PiChartData from '../admin/components/PiChartData';
const PatientPage = () => {
  const {data,isLoading,isFetching} = useGetALlMetaQuery({})
  if(isLoading || isFetching){
    return  <CircularProgress />
  }
  const metaData = data?.meta
  console.log(metaData);
  return (
    <div>
          <div className='mt-2'>
  <TotalCountForPatient
   appointmentCount={metaData?.appointmentCount!}
   prescriptionCount={metaData?.prescriptionCount!}
   reviewCount={metaData?.reviewCount!}
  />
    </div>
    <div className='grid md:grid-flow-row lg:grid-cols-2 mt-4 gap-4'>
    <div  className='flex flex-col justify-center items-center bg-slate-100 p-4'>
 <p className='text-[#666666] text-[13px] font-bold'>BS Health Care Paid Appointment Pie Chart</p>
 <PiChartData meta={metaData?.formattedAppointmentStatusDistribution!}/>
 </div>
    </div>
   
    </div>
  );
};

export default PatientPage;