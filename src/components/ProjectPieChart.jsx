import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import '../utilis/chartStyles.css'; 

const ProjectPieChart = () => {
  return (
    <div className="w-full flex justify-center custom-pie-chart">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 40, label: 'Jobs Provided' },
              { id: 1, value: 30, label: 'Skills Training' },
              { id: 2, value: 20, label: 'Financial Aid' },
              { id: 3, value: 10, label: 'Community Support' },
            ],
          },
        ]}
        width={600}
        height={300}
      />
    </div>
  );
};

export default ProjectPieChart;
