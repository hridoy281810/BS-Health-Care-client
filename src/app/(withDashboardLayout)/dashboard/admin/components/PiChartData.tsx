

import { PieChart, Pie, Cell, ResponsiveContainer ,Tooltip} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
interface ChartData {
  count: number;
  month?: string; 
  status?: string; 
}
interface IMeta {
  meta: ChartData[]
}
const PiChartData = ({ meta }: IMeta ) => {
  console.log(meta);
  
  const data = meta?.map((item:any, indx:any) => ({
    name: item.status,
    value: item.count
  })) || [];
  return (
    <>
  <div className="w-full h-64  md:h-[300px] lg:h-[300px]  flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
       <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="70%"
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={false}
          >
            {data.map((entry:any, index:number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
       </div>

    </>
  );
};

export default PiChartData;
