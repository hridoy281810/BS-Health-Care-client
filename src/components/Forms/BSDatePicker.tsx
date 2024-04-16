import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
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
const BSDatePicker=  ({name,label,size="small",fullWidth=true,sx,required}:TDatePickerProps)=>  {
    const {control,formState} = useFormContext()
    const isError = formState.errors[name] !== undefined
  return (
  <Controller
   name={name}
   control={control}
   defaultValue={dayjs(new Date().toDateString())}
   render={({field:{onChange,value,...field}})=>(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker 
        timezone='system'
        disablePast
        {...field}
        label={label}
        onChange={(date)=> onChange(date)}
        value={value || Date.now()}
         slotProps={{
            textField:{
                required:required,
                size:size,
                sx:{
                    ...sx
                },
                variant:"outlined",
                fullWidth:fullWidth,
                helperText:isError?(formState.errors[name]?.message as string):""
            }
         }}
        />
  </LocalizationProvider>
   )}
   />
  );
}

export default BSDatePicker;