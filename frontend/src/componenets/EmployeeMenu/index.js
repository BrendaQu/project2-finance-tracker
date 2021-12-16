//Milton
import React from "react";
import { Nav } from "react-bootstrap";

const EmployeeMenu = () => {

    return (
        <div className="container">
            <h3>Welcome, Name</h3>
            <p>Approve accounts, view deletion requests, view user reports, or search for a user.</p>
            <div class="user-menu">
                <button class="btn btn-outline-secondary"><Nav.Link class="btn btn-outline-secondary" href="EmpApprove">Approval</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="EmpDelete">Deletion</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="EmpReport">View Reports</Nav.Link></button>
                <button class="btn btn-outline-secondary"><Nav.Link href="EmpSearch">User Search</Nav.Link></button>
            </div>
        </div>
    )
}

export default EmployeeMenu