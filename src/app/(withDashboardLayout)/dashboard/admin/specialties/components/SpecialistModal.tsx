import BSFileUploader from '@/components/Forms/BSFileUploader';
import BSForm from '@/components/Forms/BSForm';
import BSInput from '@/components/Forms/BSInput';
import BSModal from '@/components/shared/modal/BSModal';
import { modifyPayload } from '@/utils/modifyPayload';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { useCreateSpecialtyMutation } from '../../../../../../redux/api/specialtiesApi';
import { toast } from 'sonner';
export type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialistModal = ({open,setOpen}:TProps) => {
    const [createSpecialty] =  useCreateSpecialtyMutation()
    const handleFormSubmit = async(values:FieldValues)=>{
     const data = modifyPayload(values)
     try{
       const res = await createSpecialty(data).unwrap()
       console.log('res',res);
    
       if(res?.id){
        toast.success("Specialty created successfully!!")
        setOpen(false)
       }
       
     }catch(error:any){
        console.log(error.message);
        
     }

    }
  return (
<BSModal open={open} setOpen={setOpen} title="Create Specialist">
<BSForm onSubmit={handleFormSubmit}>
    <Grid container spacing={2}>
  <Grid item md={6} >
  <BSInput name='title' label='Title'/>
  </Grid>
  <Grid item md={6} >
  <BSFileUploader name="file" label="Upload File" />
  </Grid>
    </Grid>
    <Button sx={{mt:1}} type='submit' >Create</Button>
</BSForm>
</BSModal>
  );
};

export default SpecialistModal;