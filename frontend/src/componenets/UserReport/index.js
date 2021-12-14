//Brenda
import React, {useState, useEffect} from "react";
import axios from "axios";
import BudgetBars from "./BudgetBars";
import ExpenseLogs from "./ExpenseLogs";
import ExpenseBarsAndTable from "./ExpenseBarsAndTable";

const UserReport = () => {

    const[budget, setBudget] = useState([]);
    const[expense, setExpense] = useState([]);

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

    useEffect(() => {
        axios.get("http://localhost:9007/budgets/" + sessionStorage.getItem("userId"), budget)
        .then((response) => {
            setBudget(response.data);
        })
        .catch((error) => console.error(error));
    }, [])

    useEffect(() => {
        axios.get("http://localhost:9007/expenses/" + sessionStorage.getItem("userId"), expense)
        .then((response) =>{
            setExpense(response.data);
        })
        .catch((error) => console.error(error));
    }, [])

    return (
        <div className="container">
            <h3>Report</h3>
            <p>View this month's report and progress bar below.</p>
            <ul class="legend">
                <li><span class="legend-rent"></span> Rent</li>
                <li><span class="legend-utl"></span> Utilities</li>
                <li><span class="legend-groc"></span> Groceries</li>
                <li><span class="legend-subs"></span>Subscription</li>
                <li><span class="legend-ent"></span> Entertainment</li>
                <li><span class="legend-din"></span> Dining Out</li>
                <li><span class="legend-shop"></span> Shopping</li>
                <li><span class="legend-misc"></span>Misc</li>
            </ul>
            <br />
            <p>Budget Percentage Bar</p>
            {
                <BudgetBars data={budget}/>
            }

            <br />
            {
                <ExpenseBarsAndTable data={budget} />
            }
            {/* <div>
            <p>This Month's Actual Percentage Bar</p>
            {
                <ExpenseBars/>
            }
            <br />
            <h4>Budget vs Actual Spending</h4>
            <table class="table table-hover table-bordered table-striped" >
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Actual</th>
                    </tr>
                </thead> */}
                {/* <tbody>
                    <tr>
                        <th scope="row">Rent</th>
                        <td>${budget.rent}</td>
                        <td>${Object.values(expense)[0]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Utilities</th>
                        <td>${budget.utilities}</td>
                        <td>${Object.values(expense)[1]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>${budget.groceries}</td>
                        <td>${Object.values(expense)[2]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscription</th>
                        <td>${budget.subscriptions}</td>
                        <td>${Object.values(expense)[3]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>${budget.entertainment}</td>
                        <td>${Object.values(expense)[4]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dining Out</th>
                        <td>${budget.dining}</td>
                        <td>${Object.values(expense)[5]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Shopping</th>
                        <td>${budget.shopping}</td>
                        <td>${Object.values(expense)[6]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Misc</th>
                        <td>${budget.misc}</td>
                        <td>${Object.values(expense)[7]}</td>
                    </tr>
                </tbody> */}
                {/* <tbody>
                    {
                        <BudvsAct data={budget}/>
                    }
                </tbody> */}
            {/* </table>
            </div> */}
            <h4>Expense Logs</h4>
            <table class="table table-hover table-bordered table-striped" >
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Memo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expense.map(e => <ExpenseLogs data={e}/>)
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UserReport;