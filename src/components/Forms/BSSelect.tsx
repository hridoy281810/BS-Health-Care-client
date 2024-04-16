import {  MenuItem, SxProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
interface ITextField {
    name: string
    label?:string
    size?:"small" | "medium"
    fullWidth?: boolean
    type?: string
    sx?:SxProps
    placeholder?:string
    required?:boolean
    items: string[],
    multiple?:any

}
const BSSelect = ({name,label,size="small",fullWidth,type="text",sx,required,placeholder,items,multiple}:ITextField) => {
    const {control,formState} = useFormContext();
    const isError = formState.errors[name] !== undefined

  return (
    <Controller control={control} 
    name={name}
   
    render={({field})=>(
     <TextField {...field} 
   
     sx={{...sx}}
     size={size}
     select
     SelectProps={multiple}
     label={label}
     type={type}
     required={required}
     fullWidth={fullWidth}
     placeholder={label} 
     error={isError}
     helperText={
        isError? (formState.errors[name]?.message as string): ""
     }
    >
        {
            items.map((name)=> (
                <MenuItem key={name} value={name}>
                {name}
                </MenuItem>
            ))
        }
    </TextField>
    )}
    />
  );
};

export default BSSelect;