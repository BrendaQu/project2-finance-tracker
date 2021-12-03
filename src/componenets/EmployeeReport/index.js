//Milton
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'

Chart.register(ArcElement);

const EmployeeReport = () => {

    const chartData = {
        labels: ['Entertainment', 'Groceries', 'Dining', 'Rent', 'Utilities', 'Shopping', 'Subscriptions', 'Misc'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [200, 150, 80, 1500, 100, 75, 37, 5],
                backgroundColor: ['#7CE3B2', '#80DB26', '#EFE8FC', '#F066C9', '#7cc2e3', '#bd7ce3', '#e37c99', '#dbd7d5'],
            }
        ]
    };

    const options = {
        plugin: {
            title: {
                display: true,
                text: "Please Work"
            },
            legend: {
                display: true,
                position: "right"
            }
        }
    }


    return (
        <div className='doughnut'>
            <Doughnut data={chartData} options={options} />
        </div>
    )
}

export default EmployeeReport