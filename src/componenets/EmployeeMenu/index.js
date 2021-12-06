//Milton
import React from "react";
import { Nav } from "react-bootstrap";

const EmployeeMenu = () => {

    return (
        <div className="container">
            <h3>Welcome, Name</h3>
            <p>Approve accounts, view deletion requests, view user reports, or search for a user.</p>
            <div class="user-menu">
                <button class="btn btn-outline-secondary"><Nav.Link class="btn btn-outline-secondary" href="userexpense">Approval</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="userbudget">Deletion</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="userreport">View Reports</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="userbudget">Search</Nav.Link></button>
            </div>
        </div>
    )
}

export default EmployeeMenu