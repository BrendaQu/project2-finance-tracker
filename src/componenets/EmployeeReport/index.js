//Milton
import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart, registerables, registerablesbles } from 'chart.js'


Chart.register(...registerables);
Chart.overrides.doughnut = {
    plugins: {
        title: {
            display: false,
            text: "Please Work"
        },
        legend: {
            display: false,
            position: "right"
        }
    }
    
}

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
        plugins: {
            title: {
                display: false,
                text: "Please Work"
            },
            legend: {
                display: false,
                position: "bottom"
            }
        }

    }


    return (
        <div className='doughnut'>
            <Doughnut data={chartData} options={options} />
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default EmployeeReport