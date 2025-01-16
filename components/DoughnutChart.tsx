import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import React from 'react'

export const DoughnutChart = ({accounts}: DoughnutChartProps) => {

    const dataa = {
        datasets: [
            {
                label: 'Banks',
                data: [10, 20, 30],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
            }
        ],
        labels : ['Bank 1', 'Bank 2']
    }
  return (
    <Doughnut data={dataa} />
  )
}
