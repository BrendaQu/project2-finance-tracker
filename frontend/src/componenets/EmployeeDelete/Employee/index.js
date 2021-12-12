import React, { useState } from "react";
import axios from "axios";

const Employee = (props) => {

    const deleteHandler = () => {
        axios.delete("http://localhost:9007/users/" + props.data.userId)
        .then(() => {})
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
                <a href="/EmpDelete"><button type="button" class="btn btn-danger approval-btn" onClick={deleteHandler}>Delete</button></a>
            </td>
        </tr>
    )
}

export default Employee