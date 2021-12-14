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

    var count = 0

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

    const onClickBar = () => {
        var x = document.getElementsByClassName("bar-graph")[0];
        var y = document.getElementsByClassName("doughnut-graph")[0];
        console.log(x)
        if (x.style.display === 'none') {
            y.style.display = 'none';
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            y.style.display = 'block';
        }
    }

    const onClickDoughnut = () => {
        var x = document.getElementsByClassName("doughnut-graph")[0];
        var y = document.getElementsByClassName("bar-graph")[0];
        console.log(x)
        if (x.style.display === 'none') {
            y.style.display = 'none';
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            y.style.display = 'block';
        }
    }

    useEffect(() => {
        var x = document.getElementsByClassName("doughnut-graph")[0];
        x.style.display = 'none';
        axios
            .get("http://localhost:9007/users")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].type === "regular") {
                        count++
                    }
                }
            })
            .catch((error) => console.error(error))
        axios
            .get("http://localhost:9007/expenses")
            .then((response) => {
                let obj = response.data
                console.log(count)
                for (let i = 0; i < obj.length; i++) {
                    switch (obj[i].category) {
                        case "Rent":
                            catSums.Rent += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Utilities":
                            catSums.Utilities += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Groceries":
                            catSums.Groceries += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Subscription":
                            catSums.Subscriptions += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Entertainment":
                            catSums.Entertainment += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Dining Out":
                            catSums.Dining += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Shopping":
                            catSums.Shopping += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        case "Misc.":
                            catSums.Misc += Math.round(obj[i].amount / count * 100) / 100
                            break;
                        default:
                            break;
                    }
                }
                setCategory(catSums);
            })
            .catch((error) => console.error(error));
    }, [])




    return (
        <div className="graphs container">
            <div className="bar-graph">
            <button type="button" className="btn btn-primary m-3" onClick={onClickDoughnut}>Doughnut</button>
                <Bar data={chartData} options={options} />
            </div>
            <div className="doughnut-graph">
            <button type="button" className="btn btn-primary m-3" onClick={onClickBar}>Bar</button>
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    )
}

export default EmployeeReport