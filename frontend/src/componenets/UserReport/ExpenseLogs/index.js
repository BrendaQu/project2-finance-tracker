import React from "react";

const ExpenseLogs = (props) => {
    return (
        <tr>
            <td>{props.data.date}</td>
            <td>${props.data.amount}</td>
            <td>{props.data.category}</td>
            <td>{props.data.memo}</td>
        </tr>
    )
}

export default ExpenseLogs;