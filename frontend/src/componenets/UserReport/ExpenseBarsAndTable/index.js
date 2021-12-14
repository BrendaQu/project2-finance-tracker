import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpenseBarsAndTable = (props) => {

    //get current date
    var nowDate = new Date();
    var date = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();

    //initalize state
    const [expenses, setExpenses] = useState([
        // {
        //     "expenseID": 1,
        //     "date": date,
        //     "amount": 100.56,
        //     "category": "Shopping",
        //     "memo": "Sephora"
        // },
        // {
        //     "expenseID": 3,
        //     "date": date,
        //     "amount": 1450,
        //     "category": "Rent",
        //     "memo": "Rent"
        // },
        // {
        //     "expenseID": 4,
        //     "date": date,
        //     "amount": 250,
        //     "category": "Utilities",
        //     "memo": "Utilities"
        // },
        // {
        //     "expenseID": 6,
        //     "date": date,
        //     "amount": 55.67,
        //     "category": "Dining Out",
        //     "memo": "AppleBee's"
        // },
        // {
        //     "expenseID": 7,
        //     "date": date,
        //     "amount": 125.34,
        //     "category": "Groceries",
        //     "memo": "Kroger"
        // },
        // {
        //     "expenseID": 8,
        //     "date": date,
        //     "amount": 10.99,
        //     "category": "Subscription",
        //     "memo": "Netflix"
        // },
        // {
        //     "expenseID": 10,
        //     "date": date,
        //     "amount": 10.56,
        //     "category": "Misc.",
        //     "memo": "Random"
        // },
        // {
        //     "expenseID": 16,
        //     "date": date,
        //     "amount": 33.9,
        //     "category": "Entertainment",
        //     "memo": "Movies"
        // }
    ]);

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

    //group array object into different categories
    // function groupBy(arr, key) {
    //     return arr.reduce(function (cat, x) {
    //         if (!cat[x[key]]) {
    //             cat[x[key]] = [];
    //         }
    //         cat[x[key]].push(x);
    //         return cat;
    //     }, []);
    // }

    // const categories = groupBy(currMonthResult(), 'category');

    // console.log(categories);

    //sum each category
    // function sumCat(arr, p) {
    //     return arr.map(i => i[p]).reduce((a, b) => a + b);

    // }


    // const cat_arr = ['Rent', 'Utilities', 'Groceries', 'Subscription', 'Entertainment', 'Dining Out', 'Shopping', 'Misc.'];
    // const cat_amount = [];


    // for (let cat of cat_arr) {
    //     cat_amount.push(sumCat(categories[cat], 'amount'));
    // }

    // console.log(cat_amount);

    // let cat_total = 0;
    // for (let item of cat_amount) {
    //     cat_total += item;
    // }
    // console.log(cat_total);

    let cat_total = 0;
    for (let i = 0; i < currMonthResult().length; i++) {
        cat_total = currMonthResult()[i].amount
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

    for(const key in catPercent){
        console.log(`${key}:
         ${catPercent[key]=(expenseSums[key]/cat_total*100).toString() + '%'}`);
    }

    console.log(catPercent);


    return (

        <div>
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
                        <td>${props.data.rent}</td>
                        <td>${expenseSums.rent}</td>
                    </tr>
                    <tr>
                        <th scope="row">Utilities</th>
                        <td>${props.data.utilities}</td>
                        <td>${expenseSums.utilities}</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>${props.data.groceries}</td>
                        <td>${expenseSums.groceries}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscription</th>
                        <td>${props.data.subscriptions}</td>
                        <td>${expenseSums.subscriptions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>${props.data.entertainment}</td>
                        <td>${expenseSums.entertainment}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dining Out</th>
                        <td>${props.data.dining}</td>
                        <td>${expenseSums.dining}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shopping</th>
                        <td>${props.data.shopping}</td>
                        <td>${expenseSums.shopping}</td>
                    </tr>
                    <tr>
                        <th scope="row">Misc</th>
                        <td>${props.data.misc}</td>
                        <td>${expenseSums.misc}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseBarsAndTable;