import { Chip } from '@mui/material';
import React from 'react';
type TChip = 'error' | 'warning' | 'success' | 'info'
const BsChip = ({type,label,variant}:{type:TChip,label:string,variant:any}) => {
    let chipStyle = {
        bgcolor:"#cdffe0",
    color:"#00592e"
    }
    if(type === 'success'){
        chipStyle={
            bgcolor:"#cdffe0",
            color:"#00592e"
        };
    }else if(type === "warning"){
        chipStyle={
            bgcolor:"#fff3cd",
            color:"#856404"
        };
    }else if(type === "error"){
        chipStyle={
            bgcolor:"#f8d7da",
            color:"#721c24"
        };
    }else if(type === "info"){
        chipStyle={
            bgcolor:"#d1ecf1",
            color:"#0c5460"
        };
    }
  return (
  <Chip label={label} sx={chipStyle} variant={variant}/>
  );
};

export default BsChip;