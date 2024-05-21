"use client"
import { Box, styled } from '@mui/material';
const StyleDashedLine = styled(Box)(({theme})=>(
    {
      borderBottom: "3px dashed",
      borderColor: theme.palette.secondary.main,
      marginTop:theme.spacing(4),
      marginBottom:theme.spacing(4)
  
   }
   ))
const DashedLine = () => {
  return <StyleDashedLine />

};

export default DashedLine;