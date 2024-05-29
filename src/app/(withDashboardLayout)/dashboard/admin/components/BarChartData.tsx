import { TMetaData } from "@/types";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'BS Health Care Paid Appointment Bar Chart',
    },
  },
};
const labels = [ 'May', 'June', 'July','August','September','October','November','December'];

const BarChartData = ({meta}:TMetaData) => {
  console.log(meta);
  const dynamicData = labels.map(label => {
    const monthData = meta?.barChartData?.find((item: any) => {
      const monthDate = new Date(item?.month);
      return isNaN(monthDate.getTime()) ? false : monthDate.toLocaleDateString('en-US', { month: 'long' }) === label;
    });
    return monthData ? monthData.count : 0;
  });
  const data = {
   labels,
   datasets: [
    {
      label: 'Paid Appointments History',
      data: dynamicData ,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
   
   ],
 };

 
// const data = {
//       labels,
//       datasets: [
//         {
//           label: 'Dataset 1',
//           data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//           label: 'Dataset 2',
//           data: labels.map(() => data5?.map((count) => (count?.count))),
//           backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//       ],
//     };
    
  return (
    <>
    <Bar options={options} data={data} />
    
    </>
  );
};

export default BarChartData;