"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import{ useState } from 'react';
import DoctorModal from './components/DoctorModal';
import { useDeleteDoctorMutation, useGetAllDoctorQuery } from '@/redux/api/doctorsApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { toast } from 'sonner';
import DeleteIcon from "@mui/icons-material/Delete";
import { useDebounced } from '@/redux/hooks';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
const DoctorsPage = () => {
  const query :Record<string,any> = {};
  const [searchTerm,setSearchTerm] = useState<string>("")
  const debouncedTerm =useDebounced({
    searchQuery: searchTerm,
    delay: 600
  })
  if(!!debouncedTerm){
    query["searchTerm"] = searchTerm
  }

  const {data:doctorData,isLoading} = useGetAllDoctorQuery({...query})
  console.log('doctorData',doctorData);
    const doctors =doctorData?.doctors    
    const meta =doctorData?.meta    
    const [deleteDoctor] = useDeleteDoctorMutation()
  const [isModalOpen, setISModalOpen] =useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex:1},
    { field: 'email', headerName: 'Email', flex:1},
    { field: 'contactNumber', headerName: 'ContactNumber', flex:1},
    { field: 'registrationNumber', headerName: 'RegistrationNumber', flex:1},
    { field: 'apointmentFee', headerName: 'AppointmentFee', flex:1},
    { field: 'qualification', headerName: 'Qualification', flex:1},
    { field: 'currentWorkingPlace', headerName: 'CurrentWorkingPlace', flex:1},
    { field: 'id', headerName: 'Action', flex:1,headerAlign:"center",align:"center", renderCell:({row})=>{
  const handleDelete = async(id:string)=>{
   try{
      const res = await deleteDoctor(id).unwrap();
     console.log('delete data',res);
     if(res?.id){
      toast.success("Doctor deleted successfully")
     }
   }catch(error:any){
        toast.error(error?.message)
   } 
    
  }
      return (
<Box>
<IconButton onClick={()=> handleDelete(row?.id)} aria-label='delete'>
      <DeleteIcon />
     </IconButton>
         <IconButton  aria-label='delete'>
       <Link href={`/dashboard/admin/doctors/edit/${row?.id}`}>  <EditIcon /></Link>
        </IconButton>
</Box>
    )}
   },
  ];
  return (
    <Box>
     <Stack direction="row" justifyContent="space-between" alignItems="center">
     <Button onClick={()=> setISModalOpen(true)}>Create Doctor</Button>
<DoctorModal open={isModalOpen} setOpen={setISModalOpen}/>
<TextField onChange={(e)=>setSearchTerm(e.target.value)}  size="small" placeholder='Search Specialist' />
     </Stack>
     {!isLoading? ( <Box my={2}>
   <DataGrid
        rows={doctors}
        columns={columns}
     
      />
   </Box>) : (<h1>Loading....</h1>)}
    </Box>
  );
};

export default DoctorsPage;