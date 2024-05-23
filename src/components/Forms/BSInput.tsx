import { SxProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
type TInputProps = {
    name: string
    label?:string
    size?:"small" | "medium"
    fullWidth?: boolean
    type?: string
    sx?:SxProps
    placeholder?:string
    required?:boolean
    
}
const BSInput = ({name,label,size="small",fullWidth,type="text",sx,required,placeholder}:TInputProps) => {
    const {control} = useFormContext()
  return (
    <Controller
        control={control} 
        name={name}
        render={({ field ,fieldState:{error}}) => (
          <TextField
          {...field}
          sx={{...sx}}
          label={label}
          variant="outlined"
           size={size}
            fullWidth={fullWidth}
            type={type}
            placeholder={label}
            required={required} 
         
            />
        )}
      />

  );
};

export default BSInput;