"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useGetSpecialtyQuery } from '@/redux/api/specialtiesApi';
import {  TAllSpecialties } from '@/types';
import { useRouter } from 'next/navigation';
const ScrollCategory = ({specialties}:{specialties:string}) => {
    const [value, setValue] = React.useState(specialties || '');
    const {data} = useGetSpecialtyQuery({})
    const router = useRouter()
    console.log('seciality',data);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue)
    router.push(`/doctors?specialties=${newValue}`)
    };
  return (
    <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
        {
            data?.map((specialty:TAllSpecialties)=> (
                <Tab sx={{fontWeight:600}} key={specialty?.id}   label={specialty?.title} value={specialty?.title} />
            ))
        }
    </Tabs>
  </Box>
  );
};

export default ScrollCategory;