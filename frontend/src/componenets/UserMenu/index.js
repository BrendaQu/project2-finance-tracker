//Brenda
import React from "react";
import { Nav } from "react-bootstrap";

const UserMenu = () => {

    const name = sessionStorage.getItem("name")
    return (
        <div className="container">
            <h3>Welcome, {name}</h3>
            <p>Log your expense, update your budget, or view your monthly reports.</p>
            <div class="user-menu">
                <button class="btn btn-outline-secondary"><Nav.Link class="btn btn-outline-secondary" href="userexpense">Log Expenses</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="userbudget">Set Budget</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="userreport">View Reports</Nav.Link></button>
            </div>
        </div>
    )
}

export default UserMenu;