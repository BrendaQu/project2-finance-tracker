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
        labels: ['Rent', 'Utilities', 'Groceries', 'Subscriptions', 'Entertaiment', 'Dining', 'Shopping', 'Misc'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [1500, 150, 200, 37, 100, 75, 88, 5],
                backgroundColor: ['#7ABA30', '#ffce39', '#f3994a', '#266482', '#6832AD', '#F3524A', '#2E8B94', '#AA26A4'],
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
            },
            responsive: true
        },
        
    }


    return (
        <div className='bar-graph'>
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default EmployeeReport