import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const genderData = [
  { name: 'Male', value: 87 },
  { name: 'Female', value: 110 },
];

const COLORS = ['#0088FE', '#FF6384'];

const GenderPieChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure component is rendered only on the client side
    setIsClient(true);
  }, []);

  // Render nothing if not on the client
  if (!isClient) return null;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <PieChart width={150} height={150}>
        <Pie
          data={genderData}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ cx, cy, value, name, index }) => (
            <text
              x={cx}
              y={cy + (index === 0 ? -15 : 15)} // Adjust label position
              fill={COLORS[index]}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={14}
              fontWeight="normal"
            >
              {`${value} ${name}`}
            </text>
          )}
          labelLine={false}
        >
          {genderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default GenderPieChart;
