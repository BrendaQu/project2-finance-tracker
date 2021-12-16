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
    const expenseSumsPrev = {
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

    var nowDate = new Date();
    var curr_month = (nowDate.getMonth() + 1);
    var prev_month = (nowDate.getMonth() + 0);
    if(curr_month == 1){
        var curr_month = (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
        var prev_month = (nowDate.getMonth() + 0) + '/' + (nowDate.getFullYear()-1);
    } else {
        var curr_month = (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();
        var prev_month = (nowDate.getMonth() + 0) + '/' + nowDate.getFullYear();
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

    //filter by previous month
    const prevMonthResult = () => expenses.filter(e => {
        const e_date = new Date(e.date);
        const today = new Date();
        if(today.getMonth() === 1){
            const currentYear = e_date.getFullYear() === (today.getFullYear()-1);
            const prevMonth = e_date.getMonth() === (today.getMonth()-1);
            return currentYear && prevMonth;
        } else {
            const currentYear = e_date.getFullYear() === today.getFullYear();
            const prevMonth = e_date.getMonth() === (today.getMonth()-1);
            return currentYear && prevMonth;
        }
    })

    console.log(prevMonthResult());

    let prev_total = 0;
    for (let i = 0; i < prevMonthResult().length; i++) {
        prev_total += prevMonthResult()[i].amount;
        switch (prevMonthResult()[i].category) {
            case "Rent":
                expenseSumsPrev.rent += prevMonthResult()[i].amount;
                break;
            case "Utilities":
                expenseSumsPrev.utilities += prevMonthResult()[i].amount;
                break;
            case "Groceries":
                expenseSumsPrev.groceries += prevMonthResult()[i].amount;
                break;
            case "Subscription":
                expenseSumsPrev.subscriptions += prevMonthResult()[i].amount;
                break;
            case "Entertainment":
                expenseSumsPrev.entertainment += prevMonthResult()[i].amount;
                break;
            case "Dining Out":
                expenseSumsPrev.dining += prevMonthResult()[i].amount;
                break;
            case "Shopping":
                expenseSumsPrev.shopping += prevMonthResult()[i].amount;
                break;
            case "Misc.":
                expenseSumsPrev.misc += prevMonthResult()[i].amount;
                break;
        }

    }

    console.log(expenseSumsPrev);

    let bud_total = 0;
    for (const key in budget) {
        if (props.data[key] == undefined) {
            budget[key] = 0;
        } else {
            budget[key] = props.data[key];
            bud_total += props.data[key];
        }
    }

    for (const key in expenseSums) {
        expenseSums[key] = expenseSums[key].toFixed(2);
        budget[key] = budget[key].toFixed(2);
        expenseSumsPrev[key] = expenseSumsPrev[key].toFixed(2);
    }

    console.log(budget);

    for (let key in catPercent) {
        catPercent[key] = (expenseSums[key] / cat_total * 100).toFixed(2) + '%';
        budPercent[key] = (budget[key] / bud_total * 100).toFixed(2) + '%';
    }

    console.log(catPercent);
    console.log(budPercent);


    return (

        <div>
            <p>Budget Percentage Bar</p>
            <div className="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: budPercent.rent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.rent}</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: budPercent.utilities }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.utilities}</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: budPercent.groceries }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.groceries}</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: budPercent.subscriptions }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.subscriptions}</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: budPercent.entertainment }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.entertainment}</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: budPercent.dining }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.dining}</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: budPercent.shopping }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.shopping}</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: budPercent.misc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {budPercent.misc}</div>
            </div>
            <br />
            <p>This Month's Actual Percentage Bar</p>
            <div class="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: catPercent.rent }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.rent}</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: catPercent.utilities }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.utilities}</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: catPercent.groceries }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.groceries}</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: catPercent.subscriptions }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.subscriptions}</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: catPercent.entertainment }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.entertainment}</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: catPercent.dining }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.dining}</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: catPercent.shopping }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.shopping}</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: catPercent.misc }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {catPercent.misc}</div>
            </div>
            <br />
            <h4>Budget vs Actual Spending</h4>
            <table class="table table-hover table-bordered table-striped" >
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Budget</th>
                        <th scope="col">{curr_month}</th>
                        <th scope="col">{prev_month}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Rent</th>
                        <td>${budget.rent}</td>
                        <td>${expenseSums.rent}</td>
                        <td>${expenseSumsPrev.rent}</td>
                    </tr>
                    <tr>
                        <th scope="row">Utilities</th>
                        <td>${budget.utilities}</td>
                        <td>${expenseSums.utilities}</td>
                        <td>${expenseSumsPrev.utilities}</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>${budget.groceries}</td>
                        <td>${expenseSums.groceries}</td>
                        <td>${expenseSumsPrev.groceries}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscription</th>
                        <td>${budget.subscriptions}</td>
                        <td>${expenseSums.subscriptions}</td>
                        <td>${expenseSumsPrev.subscriptions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>${budget.entertainment}</td>
                        <td>${expenseSums.entertainment}</td>
                        <td>${expenseSumsPrev.entertainment}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dining Out</th>
                        <td>${budget.dining}</td>
                        <td>${expenseSums.dining}</td>
                        <td>${expenseSumsPrev.dining}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shopping</th>
                        <td>${budget.shopping}</td>
                        <td>${expenseSums.shopping}</td>
                        <td>${expenseSumsPrev.shopping}</td>
                    </tr>
                    <tr>
                        <th scope="row">Misc</th>
                        <td>${budget.misc}</td>
                        <td>${expenseSums.misc}</td>
                        <td>${expenseSumsPrev.shopping}</td>
                    </tr>
                    <tr>
                        <th scope="row">Month's Total</th>
                        <td>${bud_total.toFixed(2)}</td>
                        <td>${cat_total.toFixed(2)}</td>
                        <td>${prev_total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProgressBarsAndTable;