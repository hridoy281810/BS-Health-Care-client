'use client'
import { useGetALlMetaQuery } from '@/redux/api/userApi';
import PiChartData from './components/PiChartData';
import BarChartData from './components/BarChartData';
import AllTotalForAdmin from './components/AllTotalForAdmin';
import { CircularProgress } from '@mui/material';
const AdminPage = () => {
  const {data,isLoading} = useGetALlMetaQuery({})
  if(isLoading){
    return  <CircularProgress />
  }
  const metaData = data?.meta
  return (
   <div >
    <div className='mt-2'>
{isLoading? <CircularProgress />:  <AllTotalForAdmin
   doctorCount={metaData?.doctorCount!}
   patientCount={metaData?.patientCount!}
   appointmentCount={metaData?.appointmentCount!}
   revenue={metaData?.totalRevenue?._sum?.amount!}
  />}
    </div>
    <div className='grid md:grid-flow-row lg:grid-cols-2 mt-4 gap-4'>
 <div className=' md:mb-4 lg:mb-0 bg-slate-100 p-4'>
  <BarChartData  meta={metaData!}/>
 </div>
 <div  className='flex flex-col justify-center items-center bg-slate-100 p-4'>
 <p className='text-[#666666] text-[13px] font-bold'>BS Health Care Paid Appointment Pie Chart</p>
 <PiChartData meta={metaData?.pieCharData!}/>
 </div>
  
    </div>
   </div>
  );
};

export default AdminPage;