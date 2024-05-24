import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { TSchedule } from '@/types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function getTimeIn12HourFormat(dateTimeString: string):string{
    const date:Date = new Date(dateTimeString)
    const hours:number = date.getHours();
    const minutes: number = date.getMinutes();
    const ampm: string = hours>=12? "PM": "AM";
    const formattedHours: number  = hours % 12 === 0 ? 12: hours %12;
    const formattedMinutes: string = minutes < 10 ? "0" + minutes: minutes.toString();
    return `${formattedHours}: ${formattedMinutes} ${ampm}`;
}

function getStyles(name: string, selectedScheduleIdes: readonly string[], theme: Theme) {
  return {
    fontWeight:
    selectedScheduleIdes.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
type TMultipleSelectFieldProps = {
schedules:  TSchedule[];
selectedScheduleIdes: string[],
 setSelectedScheduleIdes: React.Dispatch<React.SetStateAction<string[]>>;
}
const MultipleSelectField = ({schedules,selectedScheduleIdes,setSelectedScheduleIdes}:TMultipleSelectFieldProps)=>  {
  const theme = useTheme();
//   const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedScheduleIdes>) => {
    const {
      target: { value },
    } = event;
    setSelectedScheduleIdes(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel  id="demo-multiple-chip-label">Chip</InputLabel>
        <Select  
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedScheduleIdes}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => {
                const selectedSchedule =  schedules.find((schedule)=> schedule.id === value)
               console.log(selectedSchedule,'selectedSchedule');
               if(!selectedSchedule) return null;
               const formattedTimeSlot = `${getTimeIn12HourFormat(selectedSchedule?.startDate)} -  ${getTimeIn12HourFormat(selectedSchedule?.endDate)}`;
                // getTimeIn12HourFormat(value)
                return ( <Chip key={value} label={formattedTimeSlot} />)
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          { schedules.length > 0  ? schedules.map((schedule) => (
            <MenuItem
              key={schedule?.id}
              value={schedule?.id}
              style={getStyles(schedule?.id, selectedScheduleIdes, theme)}
            >
         
         {`${getTimeIn12HourFormat(schedule?.startDate)} -  ${getTimeIn12HourFormat(schedule?.endDate)}`
         }
            </MenuItem>
          )) :<Box sx={{padding: 4}}> No Schedule Available Right Now</Box>}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectField;