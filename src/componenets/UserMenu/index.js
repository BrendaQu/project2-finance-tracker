//Brenda
import React from "react";
import "./style.css";

const UserMenu = () => {
    return (
        <div className="container">
            <h3>Welcome, Name</h3>
            <p>Log your expense, update your budget, or view your monthly reports.</p>
            <div class="user-menu">
                <button class="btn btn-outline-secondary">Log Expenses<a href="#"></a></button>
                <button class="btn btn-outline-secondary">Set Budget<a href="#"></a></button>
                <button class="btn btn-outline-secondary">View Reports<a href="#"></a></button>
            </div>
        </div>
    )
}

export default UserMenu;