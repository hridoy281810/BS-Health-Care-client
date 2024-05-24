import * as React from 'react';
import { SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Input } from '@mui/material';
type TBSFileUploaderProps ={
    name:string
    label?: string
    sx?:SxProps
    accept?: any;
    icon:any;
    variant: any;
    onFileUpload:(file:File)=> void
}
export default function AutoFileUploader({name,label,accept,sx,icon,variant="contained",onFileUpload}:TBSFileUploaderProps) {
   
  return (
 <Box>
    <Button  
    component="label"
    role={undefined}
    variant={variant}
    tabIndex={-1}
   startIcon={icon ? icon:< CloudUploadIcon />}
   sx={{...sx}}
    >
        {label || "Upload File"}
        <Input  
         name= 'name'
        type='file'
        inputProps={{accept:accept}}
        style={{display:"none"}}
        onChange={(e)=> {
            const fileInput = e.target as HTMLInputElement;
        const file = fileInput.files?.[0];
        if(file){
            onFileUpload(file)
        }
        }}
        />
    </Button>
 </Box>
  );
}

