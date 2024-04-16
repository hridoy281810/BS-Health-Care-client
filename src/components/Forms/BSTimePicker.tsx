import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { Controller, useFormContext } from 'react-hook-form';
import { SxProps } from '@mui/material';
type TDatePickerProps = {
    name: string
    label?:string
    size?:"small" | "medium"
    fullWidth?: boolean
    sx?:SxProps
    required?:boolean,

    
}
const BSTimePicker=  ({name,label,size="small",fullWidth=true,sx,required}:TDatePickerProps)=>  {
    const {control,formState} = useFormContext()
    const isError = formState.errors[name] !== undefined
  return (
  <Controller
   name={name}
   control={control}
   defaultValue={dayjs(new Date().toDateString())}
   render={({field:{onChange,value,...field}})=>(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
        timezone='system'
        // disablePast
        {...field}
        label={label}
        value={value || Date.now()}
        onChange={(time)=> onChange(time)}
         slotProps={{
            textField:{
                required:required,
                size:size,
                sx:{
                    ...sx
                },
                variant:"outlined",
                fullWidth:fullWidth,
                helperText: isError ? (formState.errors[name]?.message as string):""
            }
         }}
        />
  </LocalizationProvider>
   )}
   />
  );
}

export default BSTimePicker;