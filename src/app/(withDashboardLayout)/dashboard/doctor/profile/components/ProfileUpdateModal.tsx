import BSForm from "@/components/Forms/BSForm";
import BSInput from "@/components/Forms/BSInput";
import BSSelect from "@/components/Forms/BSSelect";
import BSFullScreenModal from "@/components/shared/modal/BSFullScreenModal";
import { useGetSingleDoctorQuery, useUpdateDoctorMutation } from "@/redux/api/doctorsApi";
import { Gender } from "@/types";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import MultipleSelectChip from "./MultipleSelectChip";
import { useGetSpecialtyQuery } from "@/redux/api/specialtiesApi";
import { useEffect, useState } from "react";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUsrInfo } from "@/services/actions/auth.service";
type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   id: string;
};

const validationSchema = z.object({
   experience: z.preprocess(
      (x) => (x ? x : undefined),
      z.coerce.number().int().optional()
   ),
   apointmentFee: z.preprocess(
      (x) => (x ? x : undefined),
      z.coerce.number().int().optional()
   ),
   name: z.string().optional(),
   contactNumber: z.string().optional(),
   registrationNumber: z.string().optional(),
   gender: z.string().optional(),
   qualification: z.string().optional(),
   currentWorkingPlace: z.string().optional(),
   designation: z.string().optional(),
});

const ProfileUpdateModal = ({open,setOpen,id}:TProps) => {
   const userInfo =getUsrInfo()
   console.log(userInfo);
   
const { data: doctorData, refetch, isSuccess } = useGetSingleDoctorQuery(id)
 console.log(doctorData);
 
const {data:allSpecialties} = useGetSpecialtyQuery(undefined)
const [selectedIds,setSelectedIds] = useState([])
const [updateDoctor,{isLoading:updating}] = useUpdateDoctorMutation()
useEffect(()=>{

},[])
useEffect(() => {
   if (!isSuccess) return;

   setSelectedIds(
      doctorData?.doctorSpecialties.map((sp: any) => {
         return sp.specialtiesId;
      })
   );
}, [isSuccess]);

const submitHandler = async (values: FieldValues) => {
   const specialties = selectedIds.map(
      (specialtiesId: string) => ({
         specialtiesId,
         isDeleted: false,
      })
   );

   console.log({ id });
   // return;

   const excludedFields: Array<keyof typeof values> = [
      'email',
      'id',
      'role',
      'needPasswordChange',
      'status',
      'createdAt',
      'updatedAt',
      'isDeleted',
      'averageRating',
      'review',
      'profilePhoto',
      'registrationNumber',
      'schedules',
      'doctorSpecialties',
   ];

   const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
         return !excludedFields.includes(key);
      })
   );

   updatedValues.specialties = specialties;

   try {
      updateDoctor({ body: updatedValues, id });
      await refetch();
      setOpen(false);
   } catch (error) {
      console.log(error);
   }
};

    //example 
   //  const obj = {name:"anis", age:34}
   //  Object.entries = [["name", "anis"],["age",34]]
   
// const updatedValue = Object.entries(values).filter(([key])=> {
//    return !excludeFields.includes(key)
// })
// const updatedValue = Object.fromEntries(
//    Object.entries(values).filter(([key])=> {
//       return !excludeFields.includes(key)
//    })
// )
// updatedValue.specialties = specialties 
// console.log(updatedValue,"updated value");
// console.log(id);


  return (
    <BSFullScreenModal open={open} setOpen={setOpen} title="Update Profile">
     <BSForm onSubmit={submitHandler} defaultValues={doctorData} resolver={zodResolver(validationSchema)}>
       <Grid container spacing={2} my={2} >
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="name" label="Name" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="email" label="Email" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="contactNumber" label="Contact Number" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="address" label="Address" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="registrationNumber" label="Registration Number" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="experience" label="Experience" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSSelect items={Gender} fullWidth name="gender" label="Gender" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="apointmentFee" label="Apointment Fee" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="qualification" label="Qualification" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="currentWorkingPlace" label="Current Working Place" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <BSInput fullWidth name="designation" label="Designation" sx={{mb:2}}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
         <MultipleSelectChip fullWidth allSpecialties={allSpecialties} 
         selectedIds={selectedIds} setSelectedIds={setSelectedIds}
         sx={{mb:2}}/>
      </Grid>
       </Grid>
       <Button type="submit" disabled={updating}>Save</Button>
     </BSForm>
    </BSFullScreenModal>
  );
};

export default ProfileUpdateModal;