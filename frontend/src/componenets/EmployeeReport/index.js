//Milton
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'
import axios from "axios";


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

    useEffect(() => {
        axios
            .get("http://localhost:9007/budgets")
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => console.error(error));
    })

    const [category, setCategory] = useState({
        rent:"",
        utilities:"",
        groceries:"",
        subscriptions:"",
        entertainment:"",
        dining:"",
        shopping:"",
        misc:""
    })

    const chartData = {
        labels: ['Rent', 'Utilities', 'Groceries', 'Subscriptions', 'Entertaiment', 'Dining', 'Shopping', 'Misc'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [1500, 150, 200, 37, 100, 75, 88, 5],
                backgroundColor: ['#7ABA30', '#ffce39', '#f3994a', '#266482', '#6832AD', '#F3524A', '#2E8B94', '#AA26A4']
            },
            {
                label: 'Dataset 2',
                data: category,
                backgroundColor: ['#7ABA30', '#ffce39', '#f3994a', '#266482', '#6832AD', '#F3524A', '#2E8B94', '#AA26A4']
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