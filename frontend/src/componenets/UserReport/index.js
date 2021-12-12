//Brenda
import React from "react";
import axios from "axios";

const UserReport = () => {
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
                        <td>$1,200</td>
                        <td>$1,200</td>
                    </tr>
                    <tr>
                        <th scope="row">Utilities</th>
                        <td>$300</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <th scope="row">Groceries</th>
                        <td>$400</td>
                        <td>$350</td>
                    </tr>
                    <tr>
                        <th scope="row">Subscription</th>
                        <td>$100</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <th scope="row">Entertainment</th>
                        <td>$200</td>
                        <td>$357</td>
                    </tr>
                    <tr>
                        <th scope="row">Dining Out</th>
                        <td>$200</td>
                        <td>$332</td>
                    </tr>
                    <tr>
                        <th scope="row">Shopping</th>
                        <td>$150</td>
                        <td>$234</td>
                    </tr>
                    <tr>
                        <th scope="row">Misc</th>
                        <td>$100</td>
                        <td>$232</td>
                    </tr>
                </tbody>
            </table>
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
                    <tr>
                        <td>12/01/2021</td>
                        <td>$1,200</td>
                        <td>Rent</td>
                        <td>Rent sent to landlord</td>
                    </tr>
                    <tr>
                        <td>12/02/2021</td>
                        <td>$300</td>
                        <td>Utilities</td>
                        <td>Utitlies sent</td>
                    </tr>
                    <tr>
                        <td>12/05/21</td>
                        <td>Groceries</td>
                        <td>$125</td>
                        <td>Kroger</td>
                    </tr>
                    <tr>
                        <td>12/03/2021</td>
                        <td>Subscription</td>
                        <td>$10</td>
                        <td>Netflix</td>
                    </tr>
                    <tr>
                        <td>12/04/2021</td>
                        <td>Entertainment</td>
                        <td>$80</td>
                        <td>Concert</td>
                    </tr>
                    <tr>
                        <td>12/07/2021</td>
                        <td>Dining Out</td>
                        <td>$50</td>
                        <td>Chili's</td>
                    </tr>
                    <tr>
                        <td>12/05/2021</td>
                        <td>Shopping</td>
                        <td>$90</td>
                        <td>Clothing Store</td>
                    </tr>
                    <tr>
                        <td>12/06/2021</td>
                        <td>Misc</td>
                        <td>$25</td>
                        <td>Gift card</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default UserReport;