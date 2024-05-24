import { Rating, SxProps, TextField } from '@mui/material';
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
    required?:boolean,
    multiline?: boolean;
    rows?: number;
    maxRating?: number
}
const BSRatingInput = ({name,label,size="small",fullWidth,type="text",sx,required,placeholder,multiline,rows,maxRating}:TInputProps) => {
    const {control} = useFormContext()
  return (
    <Controller
        control={control} 
        name={name}
        render={({ field ,fieldState:{error}}) => (
          maxRating ? (
            <div>
                <label>{label}</label>
                <Rating
                    name={name}
                    value={field.value || 0}
                    onChange={(_, newValue) => field.onChange(newValue)}
                    max={maxRating}
                />
                {error && <p style={{ color: 'red' }}>{error.message}</p>}
            </div>
        ) : (
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
            multiline={!!rows}
            rows={rows}
            />)
        )}
      />

  );
};


export default BSRatingInput;