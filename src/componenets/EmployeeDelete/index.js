//Milton
import React, { useState, useEffect } from "react";
import Employee from "./Employee";
import axios from "axios";

const EmployeeDelete = () => {

    const [users, setUser] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:9007/users")
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Country</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <Employee data={user} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeDelete;