//Milton
import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
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

    const onClickBar = () => {
        var x = document.getElementsByClassName("bar-graph")[0];
        console.log(x)
        if (x.style.display === 'none') {
            x.style.display = 'block';
          } else {
            x.style.display = 'none';
          }
    }

    const onClickDoughnut = () => {
        var x = document.getElementsByClassName("doughnut-graph")[0];
        console.log(x)
        if (x.style.display === 'none') {
            x.style.display = 'block';
          } else {
            x.style.display = 'none';
          }
    }

    useEffect(() => {
        axios
            .get("http://localhost:9007/expenses")
            .then((response) => {
                console.log(response.data)
                let obj = response.data
                for (let i = 0; i < obj.length; i++) {
                    switch(obj[i].category) {
                        case "Rent":
                            catSums.Rent += obj[i].amount
                            break;
                        case "Utilities":
                            catSums.Utilities += obj[i].amount
                            break;
                        case "Groceries":
                            catSums.Groceries += obj[i].amount
                            break;
                        case "Subscription":
                            catSums.Subscriptions += obj[i].amount
                            break;
                        case "Entertainment":
                            catSums.Entertainment += obj[i].amount
                            break;
                        case "Dining Out":
                            catSums.Dining += obj[i].amount
                            break;
                        case "Shopping":
                            catSums.Shopping += obj[i].amount
                            break;
                        case "Misc.":
                            catSums.Misc += obj[i].amount
                            break;
                        default:
                            break;
                    }
                }
                setCategory(catSums);
                console.log(category)
                console.log(Object.values(category))
            })
            .catch((error) => console.error(error));
    }, [])

    const catSums = {
        Rent: 0,
        Utilities: 0,
        Groceries: 0,
        Subscriptions: 0,
        Entertainment: 0,
        Dining: 0,
        Shopping: 0,
        Misc: 0
    }

    const [category, setCategory] = useState([{
        rent: "",
        utilities: "",
        groceries: "",
        subscriptions: "",
        entertainment: "",
        dining: "",
        shopping: "",
        misc: ""
    }])

    const chartData = {
        labels: ['Rent', 'Utilities', 'Groceries', 'Subscriptions', 'Entertainment', 'Dining', 'Shopping', 'Misc'],
        datasets: [
            {
                label: 'Dataset 1',
                data: Object.values(category),
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
        <div className="graphs container">
            <button type="button" className="btn btn-primary m-3" onClick={onClickBar}>Bar</button>
            <button type="button" className="btn btn-primary m-3" onClick={onClickDoughnut}>Doughnut</button>
            <div className="bar-graph">
                <Bar data={chartData} options={options} />
            </div>
            <div className="doughnut-graph">
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    )
}

export default EmployeeReport