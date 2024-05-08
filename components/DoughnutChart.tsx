"use client";

import { Chart, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, Title, Legend } from 'chart.js';

ChartJS.register(Tooltip, CategoryScale, LinearScale, Title, Legend, ArcElement);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [300, 50, 100],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }

  return (
    <Doughnut
        data={data}
        options={{
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
  )
}

export default DoughnutChart;