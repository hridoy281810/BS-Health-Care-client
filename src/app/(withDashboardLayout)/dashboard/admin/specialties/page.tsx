"use client";
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import SpecialistModal from './components/SpecialistModal';
import { useState } from 'react';
import { useDeleteSpecialtyMutation, useGetSpecialtyQuery } from '@/redux/api/specialtiesApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import DeleteIcon from "@mui/icons-material/Delete"
import { toast } from 'sonner';
const SpecialtiesPage = () => {
  const [deleteSpecialty] = useDeleteSpecialtyMutation()
  const {data:specialtiesData,isLoading} = useGetSpecialtyQuery({})
  const [isModalOpen, setISModalOpen] =useState<boolean>(false);
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'icon', headerName: 'Icon', flex:1, renderCell:({row})=>{
    return (
      <Box >
        <Image  src={row?.icon}  alt='icon' width={30} height={30}/>
      </Box>
    )
  
    } },
    { field: 'id', headerName: 'Action', flex:1,headerAlign:"center",align:"center", renderCell:({row})=>{
  const handleDelete = async(id:string)=>{
   try{
      const res = await deleteSpecialty(id).unwrap();
     console.log('delete data',res);
     if(res?.id){
      toast.success("Specialty deleted successfully")
     }
   }catch(error:any){
        toast.error(error?.message)
   } 
    
  }
      return (
     <IconButton onClick={()=> handleDelete(row?.id)} aria-label='delete'>
      <DeleteIcon />
     </IconButton>
    )
  
    }
   },
  ];
  return (
    <Box>
  <Stack direction="row" justifyContent="space-between" alignItems="center">
<Button onClick={()=> setISModalOpen(true)}>Create Specialty</Button>
<SpecialistModal open={isModalOpen} setOpen={setISModalOpen}/>
<TextField size="small" placeholder='Search Specialist' />
  </Stack>
  {!isLoading? ( <Box my={2}>
   <DataGrid
        rows={specialtiesData}
        columns={columns}
     
      />
   </Box>) : (<h1>Loading....</h1>)}
    </Box>
  );
};

export default SpecialtiesPage;