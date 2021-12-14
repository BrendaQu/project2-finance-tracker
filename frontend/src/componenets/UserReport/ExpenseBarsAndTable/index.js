import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpenseBarsAndTable = (props) => {

    const [expenses, setExpenses] = useState([
        {
            "expenseID": 1,
            "date": "2021-12-10",
            "amount": 100.56,
            "category": "Shopping",
            "memo": "Sephora"
        },
        {
            "expenseID": 3,
            "date": "2021-12-03",
            "amount": 1450,
            "category": "Rent",
            "memo": "Rent"
        },
        {
            "expenseID": 4,
            "date": "2021-12-06",
            "amount": 250,
            "category": "Utilities",
            "memo": "Utilities"
        },
        {
            "expenseID": 6,
            "date": "2021-12-10",
            "amount": 55.67,
            "category": "Dining Out",
            "memo": "AppleBee's"
        },
        {
            "expenseID": 7,
            "date": "2021-12-08",
            "amount": 125.34,
            "category": "Groceries",
            "memo": "Kroger"
        },
        {
            "expenseID": 8,
            "date": "2021-12-10",
            "amount": 10.99,
            "category": "Subscription",
            "memo": "Netflix"
        },
        {
            "expenseID": 9,
            "date": "2021-12-08",
            "amount": 75.6,
            "category": "Entertainment",
            "memo": "Concert"
        },
        {
            "expenseID": 10,
            "date": "2021-12-08",
            "amount": 10.56,
            "category": "Misc.",
            "memo": "Random"
        },
        {
            "expenseID": 12,
            "date": "2021-12-09",
            "amount": 567,
            "category": "Misc.",
            "memo": "Random"
        },
        {
            "expenseID": 16,
            "date": "2021-12-12",
            "amount": 33.9,
            "category": "Entertainment",
            "memo": "Movies"
        },
        {
            "expenseID": 18,
            "date": "2021-12-12",
            "amount": 55.56,
            "category": "Entertainment",
            "memo": "Fun"
        },
        {
            "expenseID": 21,
            "date": "2021-12-10",
            "amount": 100.55,
            "category": "Dining Out",
            "memo": "Random"
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:9007/expenses/" + sessionStorage.getItem("userId"), expenses)
            .then((response) => {
                setExpenses(response.data);
            })
            .catch((error) => console.error(error));
    }, [])

    console.log(expenses);

    //filter array object by current month
    const currMonthResult = () => expenses.filter(e => {
        const e_date = new Date(e.date);
        const today = new Date();
        const currentYear = e_date.getFullYear() === today.getFullYear();
        const currentMonth = e_date.getMonth() === today.getMonth();

        return currentYear && currentMonth;
    })

    console.log(currMonthResult());

    //group array object into different categories
    function groupBy(arr, key) {
        return arr.reduce(function (cat, x) {
            if (!cat[x[key]]) {
                cat[x[key]] = [];
            }
            cat[x[key]].push(x);
            return cat;
        }, []);
    }

    const categories = groupBy(currMonthResult(), 'category');

    console.log(categories);

    //sum each category
    function sumCat(arr, p) {
        return arr.map(i => i[p]).reduce((a, b) => a + b);

    }


    const cat_arr = ['Rent', 'Utilities', 'Groceries', 'Subscription', 'Entertainment', 'Dining Out', 'Shopping', 'Misc.'];
    const cat_amount = [];

    for (let cat of cat_arr) {
        cat_amount.push(sumCat(categories[cat], 'amount'));
    }

    console.log(cat_amount);

    let cat_total = 0;
    for (let item of cat_amount) {
        cat_total += item;
    }
    console.log(cat_total);

    const cat_percent = [];

    for (let item of cat_amount) {
        let p_cat = (item / cat_total * 100).toString();
        cat_percent.push(p_cat + '%');
    }

    console.log(cat_percent);


    return (

        <div>
            <p>This Month's Actual Percentage Bar</p>
            <div class="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: cat_percent[0] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[0]}</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: cat_percent[1] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[1]}</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: cat_percent[2] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[2]}</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: cat_percent[3] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[3]}</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: cat_percent[4] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[4]}</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: cat_percent[5] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[5]}</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: cat_percent[6] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[6]}</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: cat_percent[7] }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$ {cat_amount[7]}</div>
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
                        <td>${cat_amount[0]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Utilities</th>
                        <td>${props.data.utilities}</td>
                        <td>${cat_amount[1]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>${props.data.groceries}</td>
                        <td>${cat_amount[2]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscription</th>
                        <td>${props.data.subscriptions}</td>
                        <td>${cat_amount[3]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>${props.data.entertainment}</td>
                        <td>${cat_amount[4]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dining Out</th>
                        <td>${props.data.dining}</td>
                        <td>${cat_amount[5]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shopping</th>
                        <td>${props.data.shopping}</td>
                        <td>${cat_amount[6]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Misc</th>
                        <td>${props.data.misc}</td>
                        <td>${cat_amount[7]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseBarsAndTable;