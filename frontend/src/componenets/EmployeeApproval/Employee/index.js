import React, { useState } from "react";
import axios from "axios";

const Employee = (props) => {
    const approveHandler = () => {
        axios.post("http://localhost:9007/users", props.data)
        .then()
        .catch((error) => console.error(error))
        denyHandler()
    }

    const denyHandler = () => {
        axios.delete("http://localhost:9007/pendingUsers/" + props.data.userId)
        .then(window.location.pathname = ('/EmpApprove'))
        .catch((error) => console.error(error))

    }
    
    return(
        <tr>
            <th scope="row">{props.data.userId}</th>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.email}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.gender}</td>
            <td>{props.data.country}</td>
            <td>
                <a href="/EmpApprove">
                <button type="button" class="btn btn-success approval-btn" onClick={approveHandler}>Approve</button>
                <button type="button" class="btn btn-danger approval-btn" onClick={denyHandler}>Deny</button>
                </a>
            </td>
        </tr>
    )
}

export default Employee