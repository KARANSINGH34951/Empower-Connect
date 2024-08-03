
import { PieChart } from '@mui/x-charts/PieChart';

const ProjectPieChart = () => {
  return (
    <PieChart className='text-white'
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
      width={550}
      height={250}
    />
  );
};

export default ProjectPieChart;
