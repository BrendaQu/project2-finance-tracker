//Brenda
import React, {useState, useEffect} from "react";
import axios from "axios";
import BudgetBars from "./BudgetBars";
import ExpenseLogs from "./ExpenseLogs";
import ExpenseBarsAndTable from "./ExpenseBarsAndTable";

const UserReport = () => {

    const[budget, setBudget] = useState([]);
    const[expense, setExpense] = useState([]);

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