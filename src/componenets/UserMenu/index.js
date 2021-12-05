//Brenda
import React from "react";
import "./style.css";

const UserMenu = () => {
    return (
        <div className="container">
            <h3>Welcome, Name</h3>
            <p>View your monthly progress below or update your expense and budget.</p>
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
            <p>Budget Percentage</p>
            <div class="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: '45%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$1,200</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: '11%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$300</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: '15%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$400</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: '4%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$100</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: '8%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$200</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: '8%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$200</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: '6%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$150</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: '3%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$100</div>
            </div>
            <br />
            <p>This Month's Actual Percentage</p>
            <div class="progress">
                <div class="progress-bar bar-rent" role="progressbar" style={{ width: '39%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$1,200</div>
                <div class="progress-bar bar-utl" role="progressbar" style={{ width: '10%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$300</div>
                <div class="progress-bar bar-groc" role="progressbar" style={{ width: '11%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$350</div>
                <div class="progress-bar bar-subs" role="progressbar" style={{ width: '3%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$100</div>
                <div class="progress-bar bar-ent" role="progressbar" style={{ width: '11%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$357</div>
                <div class="progress-bar bar-din" role="progressbar" style={{ width: '11%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$332</div>
                <div class="progress-bar bar-shop" role="progressbar" style={{ width: '8%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$234</div>
                <div class="progress-bar bar-misc" role="progressbar" style={{ width: '7%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">$232</div>
            </div>
            <div class="user-menu">
                <button class="btn btn-outline-secondary">Log Expenses<a href="#"></a></button>
                <button class="btn btn-outline-secondary">Set Budget<a href="#"></a></button>
                <button class="btn btn-outline-secondary">View Reports<a href="#"></a></button>
            </div>
        </div>
    )
}

export default UserMenu;