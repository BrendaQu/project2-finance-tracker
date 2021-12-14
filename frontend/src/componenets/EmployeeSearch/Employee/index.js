import React from "react";

const Employee = (props) => {
    
    return(
        <tr>
            {console.log(props.data)}
            <th scope="row">{props.data.userId}</th>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.email}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.gender}</td>
            <td>{props.data.country}</td>
        </tr>
    )
}

export default Employee