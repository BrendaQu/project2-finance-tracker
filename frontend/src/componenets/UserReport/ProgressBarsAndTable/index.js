import React, { useState, useEffect } from "react";
import axios from "axios";

const ProgressBarsAndTable = (props) => {
    const [expenses, setExpenses] = useState([]);

    const expenseSums = {
        rent: 0,
        utilities: 0,
        groceries: 0,
        subscriptions: 0,
        entertainment: 0,
        dining: 0,
        shopping: 0,
        misc: 0
    }
    const catPercent = {
        rent: '0%',
        utilities: '0%',
        groceries: '0%',
        subscriptions: '0%',
        entertainment: '0%',
        dining: '0%',
        shopping: '0%',
        misc: '0%'
    }

    const budget = {
        rent: 0,
        utilities: 0,
        groceries: 0,
        subscriptions: 0,
        entertainment: 0,
        dining: 0,
        shopping: 0,
        misc: 0
    }

    const budPercent = {
        rent: '0%',
        utilities: '0%',
        groceries: '0%',
        subscriptions: '0%',
        entertainment: '0%',
        dining: '0%',
        shopping: '0%',
        misc: '0%'
    }

    useEffect(() => {
        axios.get("http://localhost:9007/expenses/" + sessionStorage.getItem("userId"), expenses)
            .then((response) => {
                setExpenses(response.data);
            })
            .catch((error) => console.error(error));
    }, [])

    console.log(expenses);

    //filter by current month
    const currMonthResult = () => expenses.filter(e => {
        const e_date = new Date(e.date);
        const today = new Date();
        const currentYear = e_date.getFullYear() === today.getFullYear();
        const currentMonth = e_date.getMonth() === today.getMonth();

        return currentYear && currentMonth;
    })

    console.log(currMonthResult());

    let cat_total = 0;
    for (let i = 0; i < currMonthResult().length; i++) {
        cat_total += currMonthResult()[i].amount;
        switch (currMonthResult()[i].category) {
            case "Rent":
                expenseSums.rent += currMonthResult()[i].amount;
                break;
            case "Utilities":
                expenseSums.utilities += currMonthResult()[i].amount;
                break;
            case "Groceries":
                expenseSums.groceries += currMonthResult()[i].amount;
                break;
            case "Subscription":
                expenseSums.subscriptions += currMonthResult()[i].amount;
                break;
            case "Entertainment":
                expenseSums.entertainment += currMonthResult()[i].amount;
                break;
            case "Dining Out":
                expenseSums.dining += currMonthResult()[i].amount;
                break;
            case "Shopping":
                expenseSums.shopping += currMonthResult()[i].amount;
                break;
            case "Misc.":
                expenseSums.misc += currMonthResult()[i].amount;
                break;
        }

    }

    console.log(expenseSums);

    let bud_total = 0;
    for (const key in budget) {
        if (props.data[key] == undefined) {
            budget[key] = 0;
        } else {
            budget[key] = props.data[key];
            bud_total += props.data[key];
        }
    }

    console.log(budget);

    for (let key in catPercent) {
        catPercent[key] = (expenseSums[key] / cat_total * 100).toString() + '%';
        budPercent[key] = (budget[key] / bud_total * 100).toString() + '%';
    }

    console.log(catPercent);
    console.log(budPercent);

    return (

        <div>
            <p>Budget Percentage Bar</p>
            <div className="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: budPercent.rent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.rent}</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: budPercent.utilities  }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.utilities}</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: budPercent.groceries  }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.groceries}</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width:  budPercent.subscriptions }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.subscriptions}</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: budPercent.entertainment  }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.entertainment}</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: budPercent.dining  }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.dining}</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: budPercent.shopping  }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.shopping}</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: budPercent.misc  }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budget.misc}</div>
            </div>
            <br />
            <p>This Month's Actual Percentage Bar</p>
            <div class="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: catPercent.rent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.rent}</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: catPercent.utilities }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.utilities}</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: catPercent.groceries }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.groceries}</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: catPercent.subscriptions }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.subscriptions}</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: catPercent.entertainment }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.entertainment}</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: catPercent.dining }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.dining}</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: catPercent.shopping }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.shopping}</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: catPercent.misc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {expenseSums.misc}</div>
            </div>
            <br />
            <h4>Budget vs Actual Spending</h4>
            <table class="table table-hover table-bordered table-striped" >
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Rent</th>
                        <td>${budget.rent}</td>
                        <td>${expenseSums.rent}</td>
                    </tr>
                    <tr>
                        <th scope="row">Utilities</th>
                        <td>${budget.utilities}</td>
                        <td>${expenseSums.utilities}</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>${budget.groceries}</td>
                        <td>${expenseSums.groceries}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscription</th>
                        <td>${budget.subscriptions}</td>
                        <td>${expenseSums.subscriptions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>${budget.entertainment}</td>
                        <td>${expenseSums.entertainment}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dining Out</th>
                        <td>${budget.dining}</td>
                        <td>${expenseSums.dining}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shopping</th>
                        <td>${budget.shopping}</td>
                        <td>${expenseSums.shopping}</td>
                    </tr>
                    <tr>
                        <th scope="row">Misc</th>
                        <td>${budget.misc}</td>
                        <td>${expenseSums.misc}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProgressBarsAndTable;